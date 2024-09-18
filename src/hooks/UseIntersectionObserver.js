import { useState, useRef, useEffect } from "react";

const UseIntersectionObserver = (targetRef) => {
  const [isDisplayOn, setIsDisplayOn] = useState(false);
  const observer = useRef();

  useEffect(() => {
    if (!observer.current) {
      const observerCallback = (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsDisplayOn(true);
          } 
        });
      };

      observer.current = new window.IntersectionObserver(observerCallback, {
        threshold: 0.5,
      });
    }

    if (targetRef.current) {
      observer.current.observe(targetRef.current);
    }

    return () => {
      if (observer.current) {
        observer.current.disconnect();
      }
    };
  }, [targetRef]);
  
  return isDisplayOn;
};

export default UseIntersectionObserver;
