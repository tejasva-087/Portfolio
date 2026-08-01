import {
  useRef,
  useState,
  useEffect,
  useCallback,
  type ReactNode,
} from "react";
import { CaretLeftIcon, CaretRightIcon } from "@phosphor-icons/react";

interface CarouselProps {
  children: ReactNode[];
  gap?: number;
  className?: string;
}

function Carousel({ children, gap = 16, className = "" }: CarouselProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);
  const [needsScroll, setNeedsScroll] = useState(false);

  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeftStart = useRef(0);

  const updateScrollState = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;

    // temporarily measure natural content width by checking scrollWidth
    // against clientWidth — note: when items are flex-1 this always reads
    // as "fits", so we check overflow using the items' natural width first
    const overflow = el.scrollWidth > el.clientWidth + 1;
    setNeedsScroll(overflow);
    setCanScrollLeft(el.scrollLeft > 2);
    setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 2);
  }, []);

  useEffect(() => {
    updateScrollState();
    const el = scrollRef.current;
    if (!el) return;

    const resizeObserver = new ResizeObserver(updateScrollState);
    resizeObserver.observe(el);

    el.addEventListener("scroll", updateScrollState);
    window.addEventListener("resize", updateScrollState);

    return () => {
      resizeObserver.disconnect();
      el.removeEventListener("scroll", updateScrollState);
      window.removeEventListener("resize", updateScrollState);
    };
  }, [updateScrollState, children.length]);

  const scrollByAmount = (dir: 1 | -1) => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollBy({ left: el.clientWidth * 0.8 * dir, behavior: "smooth" });
  };

  const onMouseDown = (e: React.MouseEvent) => {
    const el = scrollRef.current;
    if (!el || !needsScroll) return;
    isDragging.current = true;
    startX.current = e.pageX;
    scrollLeftStart.current = el.scrollLeft;
    el.style.cursor = "grabbing";
    el.style.scrollSnapType = "none";
  };

  const onMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current) return;
    const el = scrollRef.current;
    if (!el) return;
    e.preventDefault();
    el.scrollLeft = scrollLeftStart.current - (e.pageX - startX.current);
  };

  const endDrag = () => {
    const el = scrollRef.current;
    if (!el) return;
    isDragging.current = false;
    el.style.cursor = needsScroll ? "grab" : "default";
    el.style.scrollSnapType = "";
  };

  return (
    <div className={`relative w-full ${className}`}>
      <div
        ref={scrollRef}
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={endDrag}
        onMouseLeave={endDrag}
        className={`flex overflow-x-auto scroll-smooth [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden ${
          needsScroll ? "cursor-grab" : ""
        }`}
        style={{ gap: `${gap}px`, scrollSnapType: "x mandatory" }}
      >
        {children.map((child, i) => (
          <div
            key={i}
            className={needsScroll ? "shrink-0" : "flex-1 min-w-0"}
            style={needsScroll ? { scrollSnapAlign: "start" } : undefined}
          >
            {child}
          </div>
        ))}
      </div>

      {needsScroll && (
        <>
          <button
            onClick={() => scrollByAmount(-1)}
            disabled={!canScrollLeft}
            aria-label="Scroll left"
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 z-10 w-10 h-10 rounded-full border border-white-tertiary bg-white-primary flex items-center justify-center transition-opacity duration-300 disabled:opacity-0 disabled:pointer-events-none hover:bg-white-secondary cursor-pointer"
          >
            <CaretLeftIcon
              size={18}
              weight="bold"
              className="text-black-tertiary"
            />
          </button>

          <button
            onClick={() => scrollByAmount(1)}
            disabled={!canScrollRight}
            aria-label="Scroll right"
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 z-10 w-10 h-10 rounded-full border border-white-tertiary bg-white-primary flex items-center justify-center transition-opacity duration-300 disabled:opacity-0 disabled:pointer-events-none hover:bg-white-secondary cursor-pointer"
          >
            <CaretRightIcon
              size={18}
              weight="bold"
              className="text-black-tertiary"
            />
          </button>
        </>
      )}
    </div>
  );
}

export default Carousel;
