"use client";

import { useState, useEffect } from "react";
import Lottie from "react-lottie";
import animationData from "@/assets/images/general/Email verification gif.json";

const EnvelopeAnimated = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  return (
    <Lottie
      options={{
        animationData,
        loop: true,
        autoplay: true,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice",
        },
      }}
      height={100}
      width={500}
    />
  );
};

export default EnvelopeAnimated;
