import classNames from "classnames";
import React from "react";

type Props = {
  src: string;
  width: "full" | "half";
  alt?: string;
};

const Img = ({ src, width, alt }: Props) => {
  return (
    <img
      src={src}
      className={classNames("w-full", width === "half" && "md:w-1/2")}
      alt={alt}
    />
  );
};

export default Img;
