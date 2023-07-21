import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState, useEffect } from "react";

function ExampleComponent() {
  const { ref, inView } = useInView({
    triggerOnce: false, // Set triggerOnce to false
    threshold: 0.2,
  });

  // Add a state to track the visibility state
  const [isVisible, setIsVisible] = useState(false);

  // Update the state when the inView changes
  useEffect(() => {
    setIsVisible(inView);
  }, [inView]);

  return (
    <div className="container h-[500px]">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : 100 }}
        transition={{ duration: 0.5 }}
        className="box"
      >
        {isVisible ? "I'm visible!" : "Scroll to see me!"}
      </motion.div>
      <div className="spacer" />
    </div>
  );
}

export default ExampleComponent;