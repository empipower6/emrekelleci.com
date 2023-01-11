import React, {
  Dispatch,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from "react";
import * as styles from "../../styles/artwork.module.scss";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Sign from "../svgs/sign";
import { gsap } from "gsap";

type Props = {
  data: {
    caption: string;
    media_type: string;
    media_url: string;
    permalink: string;
    thumbnail_url: string;
    localImage: any;
  };
  index: number;
  artProjectState: boolean[];
  toggleProjects: Dispatch<SetStateAction<boolean[]>>;
};
function Artwork({ data, index, artProjectState, toggleProjects }: Props) {
  const artworkRef = useRef(null);
  const imageRef = useRef(null);
  const projectImg = getImage(data.localImage.childImageSharp);
  const findName = (txt: string) => {
    //regex to find emojis
    const firstEmoji = /\p{Extended_Pictographic}/u;
    //find the first index of an emoji
    const emojiMatch = txt.match(firstEmoji);
    const emojiIndex = emojiMatch ? Number(emojiMatch.index) : 0;

    //return until the emoji, return Untitled if emoji is not found or is the first thing
    return emojiIndex > 0 && emojiIndex < 30
      ? txt.slice(0, emojiIndex).toLowerCase()
      : "untitled";
  };
  useEffect(() => {
    //animation opening
    const opening = gsap.timeline({ paused: true });
    opening
      .to(artworkRef.current, {
        height: "auto",
        duration: 0.5,
        ease: "none",
      })
      .to(imageRef.current, {
        opacity: 0,
        duration: 0.5,
        ease: "none",
      });

    //closing animation
    const closing = gsap.timeline({ paused: true });
    closing
      .to(
        artworkRef.current,
        {
          height: "30px",
          duration: 0.5,
          ease: "none",
        },
        "start"
      )
      .to(
        imageRef.current,
        {
          opacity: 1,
          duration: 1,
          ease: "none",
        },
        "start"
      );

    //if the artwork is opened, play the opening animation
    if (artworkRef && imageRef && artProjectState[index]) {
      opening.play();
    }
    //if the artwork is closed, play the closing animation
    else if (artworkRef && imageRef && !artProjectState[index]) {
      closing.play();
    }
  }, [artProjectState[index]]);

  return (
    <button
      className={`${styles.artwork} ${index === 0 ? styles.firstArtwork : ""}`}
      onClick={() => {
        toggleProjects([
          ...Array.from({ length: index }, (i) => (i = false)),
          !artProjectState[index],
          ...Array.from({ length: 9 - index }, (i) => (i = false)),
        ]);
      }}
    >
      <div className={styles.left}>{findName(data.caption)}</div>
      <div className={styles.right}>
        <div className={styles.artContent} ref={artworkRef}>
          {projectImg ? (
            <div className={styles.image} ref={imageRef}>
              <GatsbyImage
                image={projectImg}
                alt={`A snippet image for the project`}
              />
            </div>
          ) : (
            ""
          )}
          {artProjectState[index] ? (
            <div className={styles.videoComponent}>
              <video
                disablePictureInPicture
                autoPlay
                loop
                className={styles.video}
              >
                <source src={data.media_url} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          ) : (
            ""
          )}
        </div>
        <div className={styles.sign}>
          <Sign isPlus={artProjectState[index] ? true : false} height="25px" />
        </div>
      </div>
    </button>
  );
}

export default Artwork;
