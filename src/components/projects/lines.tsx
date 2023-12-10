import React from "react";

export default function Lines({ lines }: any) {
    return (
      <svg
        width={100+'vw'}
        height={100+'vh'}
        viewBox="0 0 100vw 100vh"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width={100+'vw'} height={100+'vh'} fill="black" />
        {lines.map((line: any[], index: number) => (
          <line
            x1={line[0]+'vw'}
            y1={line[1]+'vh'}
            x2={line[2]+'vw'}
            y2={line[3]+'vh'}
            stroke={line[4]}
            key={index}
          />
        ))}
      </svg>
    );
  }
  