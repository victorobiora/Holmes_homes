"use client";

import Lottie from "react-lottie";
import animationData from "@/assets/images/general/Email verification gif.json";

const EnvelopeAnimated = () => {
  if (typeof window !== "undefined") {
    return (
      <Lottie
        options={{ animationData, loop: true, autoplay: true }}
        height={100}
        width={500}
      />
    );
  }
  return <></>;
};

export default EnvelopeAnimated;
