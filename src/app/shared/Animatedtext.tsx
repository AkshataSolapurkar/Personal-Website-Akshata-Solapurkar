// components/AnimatedText.js
import React from 'react';
import { useSpring, animated } from 'react-spring';

const AnimatedText = ({ text }:any) => {
  const gradient = useSpring({
    from: { backgroundPosition: '0% 50%' },
    to: { backgroundPosition: '100% 50%' },
    config: { duration: 3000 },
    loop: true,
  });
  return (
    <animated.div style={gradient} className={`fontGradient`}>
      {text}
    </animated.div>
  );
};

export default AnimatedText;
