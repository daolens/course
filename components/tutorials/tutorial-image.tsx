import classNames from "classnames";
import React from "react";

type Props = {
  src: string;
  width: "full" | "half";
  alt?: string;
};

const Img = ({ src, width, alt }: Props) => {
  return (<>
    <br/><br/>
    <img
      src={src}
      className={classNames("w-full mx-auto", width === "half" && "")}
      alt={alt}
    /><br/><br/>
    </>
  );
};

export default Img;
