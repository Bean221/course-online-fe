import { useState, useRef, useEffect } from 'react';

/**
 * useInView - Hook giúp phát hiện khi phần tử (ref) xuất hiện trong viewport
 * @param {Object} options - Tuỳ chọn IntersectionObserver
 * @returns [ref, isVisible]
 */
export default function useInView(options = { root: null, rootMargin: '0px', threshold: 0.1 }) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        // Nếu chỉ muốn chạy 1 lần
        observer.unobserve(entry.target);
      }
    }, options);

    if (ref.current) observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [ref, options]);

  return [ref, isVisible];
}
