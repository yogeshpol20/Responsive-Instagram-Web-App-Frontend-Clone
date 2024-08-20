import React, { useRef } from "react";
import "../Styles/Components/Story.css";
import { IoIosArrowDropleftCircle } from "react-icons/io";
import { IoIosArrowDroprightCircle } from "react-icons/io";

import storyUserDp1 from "../assets/images/marcmarquez93.jpg";
import storyUserDp2 from "../assets/images/motogp.jpg";
import storyUserDp3 from "../assets/images/tridhac.jpg";
import storyUserDp4 from "../assets/images/hegdepooja.jpg";
import storyUserDp5 from "../assets/images/ducati.jpg";
import storyUserDp6 from "../assets/images/rolex.jpg";
import storyUserDp7 from "../assets/images/bmw.jpg";
import storyUserDp8 from "../assets/images/redbullracing.jpg";
import storyUserDp9 from "../assets/images/hrc_motogp.jpg";
import storyUserDp10 from "../assets/images/evoindia.jpg";
import storyUserDp11 from "../assets/images/lando.jpg";
import storyUserDp12 from "../assets/images/gopro.jpg";
import storyUserDp13 from "../assets/images/danielricciardo.jpg";
import storyUserDp14 from "../assets/images/maxverstappen1.jpg";
import storyUserDp15 from "../assets/images/omega.jpg";
import storyUserDp16 from "../assets/images/nehasharma.jpg";
import storyUserDp17 from "../assets/images/noprofile.jpg";

const storyData = [
  {
    id: 1,
    src: storyUserDp1,
    username: "marcmarquez93",
  },
  {
    id: 2,
    src: storyUserDp2,
    username: "motogp",
  },
  {
    id: 3,
    src: storyUserDp3,
    username: "tridhac",
  },
  {
    id: 4,
    src: storyUserDp4,
    username: "hegdepooja",
  },
  {
    id: 5,
    src: storyUserDp5,
    username: "ducaticorse",
  },
  {
    id: 6,
    src: storyUserDp6,
    username: "Rolex",
  },
  {
    id: 7,
    src: storyUserDp7,
    username: "bmw",
  },
  {
    id: 8,
    src: storyUserDp8,
    username: "redbullracing",
  },
  {
    id: 9,
    src: storyUserDp9,
    username: "hrc_motogp",
  },
  {
    id: 10,
    src: storyUserDp10,
    username: "evoindia",
  },
  {
    id: 11,
    src: storyUserDp11,
    username: "landonorris",
  },
  {
    id: 12,
    src: storyUserDp12,
    username: "gopro",
  },
  {
    id: 13,
    src: storyUserDp13,
    username: "danielricciardo",
  },
  {
    id: 14,
    src: storyUserDp14,
    username: "maxverstappen1",
  },
  {
    id: 15,
    src: storyUserDp15,
    username: "omega",
  },
  {
    id: 16,
    src: storyUserDp16,
    username: "nehasharmaofficial",
  },
  {
    id: 17,
    src: storyUserDp17,
    username: "user1",
  },
];

const Story = () => {
  const storyContainerRef = useRef(null);

  const scrollLeft = () => {
    if (storyContainerRef.current) {
      storyContainerRef.current.scrollBy({ left: -320, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (storyContainerRef.current) {
      storyContainerRef.current.scrollBy({ left: 320, behavior: "smooth" });
    }
  };

  return (
    <div className="story">
      <button className="scrollButton left" onClick={scrollLeft}>
        <IoIosArrowDropleftCircle />
      </button>

      <div className="storyContainer" ref={storyContainerRef}>
        <div className="storyStartingGap"></div>
        {storyData.map((story, index) => (
          <div className="storyUser" key={index}>
            <div className="storyUserPhoto">
              <img src={story.src} alt="Profile Photo" />
            </div>
            <div className="storyUserName">{story.username}</div>
          </div>
        ))}
      </div>

      <button className="scrollButton right" onClick={scrollRight}>
        <IoIosArrowDroprightCircle />
      </button>
    </div>
  );
};

export default Story;
