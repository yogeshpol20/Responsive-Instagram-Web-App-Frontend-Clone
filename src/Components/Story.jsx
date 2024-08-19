import React, { useRef } from "react";
import "../Styles/Components/Story.css";
import { IoIosArrowDropleftCircle } from "react-icons/io";
import { IoIosArrowDroprightCircle } from "react-icons/io";

const storyData = [
  {
    src: "marcmarquez93.jpg",
    username: "marcmarquez93",
  },
  {
    src: "motogp.jpg",
    username: "motogp",
  },
  {
    src: "tridhac.jpg",
    username: "tridhac",
  },
  {
    src: "hegdepooja.jpg",
    username: "hegdepooja",
  },
  {
    src: "ducati.jpg",
    username: "ducaticorse",
  },
  {
    src: "rolex.jpg",
    username: "Rolex",
  },
  {
    src: "bmw.jpg",
    username: "bmw",
  },
  {
    src: "redbullracing.jpg",
    username: "redbullracing",
  },
  {
    src: "hrc_motogp.jpg",
    username: "hrc_motogp",
  },
  {
    src: "evoindia.jpg",
    username: "evoindia",
  },

  {
    src: "lando.jpg",
    username: "landonorris",
  },
  {
    src: "gopro.jpg",
    username: "gopro",
  },
  {
    src: "danielricciardo.jpg",
    username: "danielricciardo",
  },
  {
    src: "maxverstappen1.jpg",
    username: "maxverstappen1",
  },
  {
    src: "omega.jpg",
    username: "omega",
  },
  {
    src: "nehasharma.jpg",
    username: "nehasharmaofficial",
  },
  {
    src: "noprofile.jpg",
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
