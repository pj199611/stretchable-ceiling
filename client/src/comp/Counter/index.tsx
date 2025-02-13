"use client";
import { useState, useEffect, useRef } from "react";

const Counter = ({ target, suffix }) => {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false); // Track whether the counter has started
  const counterRef = useRef(null); // Reference to the counter element

  useEffect(() => {
    // Create the intersection observer
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          // Start the counter when the component comes into view
          setHasStarted(true);
        }
      },
      { threshold: 0.5 } // Trigger when 50% of the component is visible
    );

    // Observe the counter element
    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    // Cleanup observer on unmount
    return () => {
      if (counterRef.current) {
        observer.unobserve(counterRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (hasStarted) {
      const interval = setInterval(() => {
        setCount((prevCount) => {
          if (prevCount < target) {
            return prevCount + 1;
          } else {
            clearInterval(interval); // Stop when target is reached
            return prevCount;
          }
        });
      }, 40); // Adjust the speed by changing the interval (in ms)

      return () => clearInterval(interval); // Cleanup on unmount
    }
  }, [hasStarted, target]);

  return (
    <div ref={counterRef}>
      {count} {" + "}
    </div>
  );
};

export default Counter;
