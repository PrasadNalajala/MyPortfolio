import React from "react";

import Typewriter from "typewriter-effect";

export const Type = () => {
  return (
    <>
      <Typewriter
        options={{
          strings: ["Enthusiastic Dev 💻", "Full Stack Developer 🖥", "A Creative Problem Solver ","Technical Writer"],
          autoStart: true,
          loop: true,
          deleteSpeed: 70
        }}
      />
    </>
  );
};
