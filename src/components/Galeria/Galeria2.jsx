import { useEffect, useRef } from "react";
import "./Galeria.scss";
const carouselDuplicates = 1;

const valores = [
  { name: "Servicio", img: "gal_1.jpg" },
  { name: "Servicio", img: "gal_2.jpg" },
  { name: "Servicio", img: "gal_3.jpg" },
];

const lerp = (a, b, t) => a + (b - a) * t;

const getTouchMidpoint = (touches) => {
  let midpoint = {
    x: touches[0].clientX,
    y: touches[0].clientY,
  };

  for (let i = 1; i < touches.length; i++) {
    midpoint.x = lerp(midpoint.x, touches[i].clientX, 0.5);
    midpoint.y = lerp(midpoint.y, touches[i].clientY, 0.5);
  }

  return midpoint;
};

export default function Valores() {
  const carouselRef = useRef(null);
  const contentRef = useRef(null);
  const AUTO_SCROLL_SPEED = -1;

  useEffect(() => {
    const carousel = carouselRef.current;
    const carouselContent = contentRef.current;

    if (!carousel || !carouselContent) return;

    const prefersReducedMotion = matchMedia("(prefers-reduced-motion: reduce)");
    const hasFinePointer = matchMedia("(pointer: fine)");

    let carouselHasMouse = false;
    let carouselTouches = 0;
    let lastMouseX = null;
    let lastTouchX = null;
    let scrollDelta = AUTO_SCROLL_SPEED;

    const handleTouchRemove = (event) => {
      carouselTouches -= event.changedTouches.length;
      if (carouselTouches <= 0 && !carouselHasMouse) {
        lastTouchX = null;
      }
    };

    const updateScroll = () => {
      carousel.scrollLeft += scrollDelta;

      if (carouselHasMouse || carouselTouches > 0) {
        scrollDelta = lerp(scrollDelta, 0, 0.2);
      } else if (!prefersReducedMotion.matches) {
        scrollDelta = lerp(scrollDelta, AUTO_SCROLL_SPEED, 0.05);
      }

      requestAnimationFrame(updateScroll);
    };

    const onMouseDown = () => (carouselHasMouse = true);

    const onMouseUp = () => {
      carouselHasMouse = false;
      lastMouseX = null;
    };

    const onMouseMove = (event) => {
      if (carouselHasMouse) {
        if (lastMouseX !== null) {
          scrollDelta = lastMouseX - event.clientX;
        }
        lastMouseX = event.clientX;
      }
    };

    const onWheel = (event) => {
      if (hasFinePointer.matches && event.shiftKey) {
        event.preventDefault();
        const multiplier = prefersReducedMotion.matches ? 2 : 0.1;
        scrollDelta += event.deltaY * multiplier;
      }
    };

    const onTouchStart = (event) => {
      if (lastTouchX === null) {
        lastTouchX = getTouchMidpoint(event.touches).x;
      }
      carouselTouches += event.changedTouches.length;
    };

    const onTouchMove = (event) => {
      if (lastTouchX !== null) {
        const midpoint = getTouchMidpoint(event.touches);
        scrollDelta = -(midpoint.x - lastTouchX);
        lastTouchX = midpoint.x;
      }
    };

    const onScroll = () => {
      const content = carousel.children[1];
      const rect = content.getBoundingClientRect();
      if (rect.left > window.innerWidth) {
        carousel.scrollLeft += rect.width;
      } else if (rect.right < 0) {
        carousel.scrollLeft -= rect.width;
      }
    };

    carousel.addEventListener("mousedown", onMouseDown);
    carousel.addEventListener("wheel", onWheel);
    carousel.addEventListener("touchstart", onTouchStart);
    carousel.addEventListener("scroll", onScroll);

    window.addEventListener("mouseup", onMouseUp);
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("touchmove", onTouchMove);
    window.addEventListener("touchend", handleTouchRemove);
    window.addEventListener("touchcancel", handleTouchRemove);

    for (let i = 0; i < carouselDuplicates; i++) {
      const before = carouselContent.cloneNode(true);
      const after = carouselContent.cloneNode(true);

      before.setAttribute("aria-hidden", "true");
      after.setAttribute("aria-hidden", "true");

      carousel.prepend(before);
      carousel.append(after);
    }

    carousel.scrollLeft += carouselContent.offsetWidth * carouselDuplicates;
    requestAnimationFrame(updateScroll);

    return () => {
      carousel.removeEventListener("mousedown", onMouseDown);
      carousel.removeEventListener("wheel", onWheel);
      carousel.removeEventListener("touchstart", onTouchStart);
      carousel.removeEventListener("scroll", onScroll);

      window.removeEventListener("mouseup", onMouseUp);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("touchend", handleTouchRemove);
      window.removeEventListener("touchcancel", handleTouchRemove);
    };
  }, []);

  return (
    <>
      <div className="carousel" ref={carouselRef}>
        <div className="carousel-content" ref={contentRef}>
          {valores.map((lang) => (
            <div className="valores__card" key={lang.name}>
              <img
                loading="lazy"
                width="800"
                height="800"
                src={`/assets/img/${lang.img}`}
                alt={lang.name}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
