import type { ReactNode } from "react";

import { useMouseParallax } from "../hooks/useMouseParallax";

type PositionedItem = {
  left: string;
  top: string;
};

type FloatingParallaxLayerProps<T extends PositionedItem> = {
  items: readonly T[];
  renderItem: (item: T, index: number) => ReactNode;
  className?: string;
  stiffness?: number;
  damping?: number;
  maxDist?: number;
  depthFor?: (index: number) => number;
};

function FloatingParallaxLayer<T extends PositionedItem>({
  items,
  renderItem,
  className = "",
  stiffness,
  damping,
  maxDist,
  depthFor,
}: FloatingParallaxLayerProps<T>) {
  const { setRef } = useMouseParallax({
    count: items.length,
    stiffness,
    damping,
    maxDist,
    depthFor,
  });

  return (
    <div className={`absolute inset-0 pointer-events-none ${className}`}>
      <ul className="w-full h-full relative">
        {items.map((item, i) => (
          <li
            key={i}
            ref={setRef(i)}
            className="absolute"
            style={{ left: item.left, top: item.top }}
          >
            {renderItem(item, i)}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FloatingParallaxLayer;
