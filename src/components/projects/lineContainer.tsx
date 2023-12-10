"use client";
import React from "react";
import LinesSVG from "./lines";
import * as styles from "../../styles/lines.module.scss";
import { useState, useEffect } from "react";

export default function LineContainer() {
  const [lines, setLines] = useState([[0, 1, 0, 0, "#ffffff"]]);
  const [colorSpecs, setColorSpecs] = useState([false, true]);
  const [sliderValue, setSliderValue] = useState(1);
  const [scrollCount, setScrollCount] = useState(0);

  const generateColor = (limit?: number) => {
    const letters = "0123456789ABCDEF";
    let color = "#";
    const forLimit = limit ? limit : 7;
    for (let i = 0; i < forLimit; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  const handleSliderChange = (event: any) => {
    setSliderValue(event.target.value);
  };
  const mixItUp = () => {
    const lineAmount = sliderValue;
    const randomCoordinates = [];
    const singleColor = colorSpecs[1] ? generateColor(6) : "";
    for (let i = 0; i < lineAmount; i++) {
      randomCoordinates.push(generateRandomFourCoordinates(singleColor));
    }
    setLines([...randomCoordinates]);
  };

  function connectMix() {
    const lineAmount = sliderValue;
    const randomCoordinates = [];
    const singleColor = colorSpecs[1] ? generateColor(6) : "";
    randomCoordinates.push(generateRandomFourCoordinates(singleColor));

    for (let i = 0; i < lineAmount; i++) {
      const x1: any = randomCoordinates[i][2];
      const y1: any = randomCoordinates[i][3];
      const newCoord = [x1, y1, ...generateRandomTwoCoordinates(singleColor)];
      randomCoordinates.push(newCoord);
    }
    setLines([...randomCoordinates]);
  }

  function generateRandomFourCoordinates(singleColor: string) {
    const x1 = Math.random() * 98;
    const y1 = Math.random() * 98;
    const x2 = Math.random() * 98;
    const y2 = Math.random() * 98;
    const color = singleColor
      ? singleColor
      : colorSpecs[0]
      ? generateColor(6)
      : "#ffffff";

    return [x1, y1, x2, y2, color];
  }
  function generateRandomTwoCoordinates(singleColor: string) {
    const x1 = Math.random() * 98;
    const y1 = Math.random() * 98;
    const color = singleColor
      ? singleColor
      : colorSpecs[0]
      ? generateColor(6)
      : "#ffffff";

    return [x1, y1, color];
  }
  useEffect(() => {
    const handleScroll = () => {
      // Increment the scroll count on each scroll
      setScrollCount(prevCount => prevCount + 1);
      // Check if the scroll count reaches the desired threshold (e.g., 10)
      if (scrollCount % 5 === 0 && window.scrollY<1500) {
        setSliderValue(window.scrollY/50);
        
        // Invoke mixItUp
        connectMix();
      }
    };

    // Attach the handleScroll function to the scroll event
    window.addEventListener('scroll', handleScroll);

    // Cleanup: Remove the scroll event listener when the component is unmounted
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrollCount]);

  return (
    <div className={styles.container}>
      <div className={styles.containerBorder}>
        <div className={styles.lines}>
          <LinesSVG lines={lines} />
        </div>
      </div>
    </div>
  );
}
