import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          
          "23-ARID-643 Emaan Chaudhary",
          "23-ARID-743 Sayeqa Noor",
          "23-ARID-671 Malaika Arshad",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
