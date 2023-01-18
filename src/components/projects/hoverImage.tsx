import { GatsbyImage } from "gatsby-plugin-image";
import React, { useEffect, useState } from "react";
import * as styles from "../../styles/projects.module.scss";

type Props = {
  image: any;
  title: string;
  index: number;
};
function HoverImage({ image, title, index }: Props) {
  const [mousePosition, setMousePosition] = React.useState({
    x: 0,
    y: 0,
  });
  const [show, setShow] = useState(false);
  React.useEffect(() => {
    const updateMousePosition = (ev: { clientX: any; clientY: any }) => {
      setMousePosition({ x: ev.clientX, y: ev.clientY });
    };
    window.addEventListener("mousemove", updateMousePosition);
    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, []);
  useEffect(() => {
    if (mousePosition.x === 0) {
      setShow(false);
    }
    setShow(true);
  }, [mousePosition]);
  return (
    <>
      {show ? (
        <div className={styles.hoverImage}>
          <GatsbyImage
            image={image}
            style={{
              left: `${mousePosition.x}px`,
              top: `${mousePosition.y - 200 - 40 * index}px`,
              position: "absolute",
            }}
            loading="eager"
            alt={`A snippet image for the ${title} project`}
          />
        </div>
      ) : (
        ""
      )}
    </>
  );
}

export default HoverImage;
