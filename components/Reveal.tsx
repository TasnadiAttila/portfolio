"use client";

import { useEffect, useRef, useState, type ElementType } from "react";

export default function Reveal({
  children,
  onDark = false,
  as: Tag = "div",
  className = "",
}: {
  children: React.ReactNode;
  onDark?: boolean;
  as?: ElementType;
  className?: string;
}) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      className={`reveal ${onDark ? "on-dark" : ""} ${
        visible ? "is-visible" : ""
      } ${className}`}
    >
      {children}
    </Tag>
  );
}