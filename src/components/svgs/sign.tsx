import React from "react";
type Props = {
  isPlus: boolean;
  height: string;
};
export default function Sign({ isPlus, height }: Props) {
  return (
    <svg
      width={height}
      height={height}
      viewBox="0 0 115 116"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <line y1="57" x2="115" y2="57" stroke="#fff" stroke-width=".5vw" />
      {!isPlus ? (
        <line
          x1="56.5"
          y1="115.5"
          x2="56.5"
          y2="0.499986"
          stroke="white"
          stroke-width=".5vw"
        />
      ) : (
        ""
      )}
    </svg>
  );
}
