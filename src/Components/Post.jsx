import React, { useState, useRef, useContext, useEffect } from "react";
import "../Styles/Components/Post.css";
import { Link } from "react-router-dom";
import { LuDot, LuSend } from "react-icons/lu";
import { BsThreeDots } from "react-icons/bs";
import { FaRegHeart, FaHeart, FaRegBookmark, FaBookmark } from "react-icons/fa";
import { TbMessageCircle } from "react-icons/tb";
import { GoSmiley } from "react-icons/go";
import { MdVerified } from "react-icons/md";
import { HiPlay } from "react-icons/hi2";
import { PiSpeakerSlashFill, PiSpeakerHighFill } from "react-icons/pi";
import EmojiPicker from 'emoji-picker-react';
import SavePostBanner from "./SavePostBanner";
import PostLikeAnimation from "./PostLikeAnimation";


const Post = ({ user, profilePhoto, verified, time, location, photo, video, likes,adminUser }) => {

  const [postLikes, setPostLikes] = useState(likes);
  const [isLiked, setIsLiked] = useState(false);
  const [doubleTap,setDoubleTap] =useState(false);
  const [isSaved, setIsSaved] = useState(false);
  const [savePostBanner,setSavePostBanner] = useState(false);
  const [commentInput, setCommentInput] = useState("");
  const [postedComment, setPostedComment] = useState("");
  const [isDisplayComment, setIsDisplayComment] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const emojiRef = useRef(null);

  const videoRef = useRef(null);


  const toggleLike = () => {
    setIsLiked(!isLiked);
    setPostLikes((prev) => (isLiked ? prev - 1 : prev + 1));
    setDoubleTap(false);
  };

 
  const postDoubleClick = () => {
    if (!isLiked) {
      setIsLiked(true);
      setPostLikes((prev) => prev + 1);
    }
    setDoubleTap(true);
  };
  
  const handleSaveButton = () => {
    setIsSaved((prevIsSaved) => {
      const newIsSaved = !prevIsSaved;
      setSavePostBanner(newIsSaved);
      return newIsSaved;
    });
  };

  const handleCommentChange = (e) => setCommentInput(e.target.value);

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    setPostedComment(commentInput);
    setCommentInput("");
    setIsDisplayComment(true);
  };

  const handlePlayPause = () => {
    const video = videoRef.current;
    if (video.paused) {
      video.play();
    } else {
      video.pause();
    }
    setIsPlaying(!isPlaying);
  };

  const toggleMute = () => {
    const video = videoRef.current;
    video.muted = !video.muted;
    setIsMuted(video.muted);
  };

  const onEmojiClick = (emojiObject) => {
    setCommentInput((prevInput) => prevInput + emojiObject.emoji);
  };

  const toggleEmojiPicker = () => {
    setShowEmojiPicker((prev) => !prev);
  };
  

  useEffect(() => {
    if (isSaved) {
      const timer = setTimeout(() => {
        setSavePostBanner(false);
      }, 1500);

      return () => clearTimeout(timer); // Cleanup the timer
    }

    const handleClickOutside = (event) => {
      if (emojiRef.current && !emojiRef.current.contains(event.target)) {
        setShowEmojiPicker(false); // Close emoji picker
      }
    };

    if (showEmojiPicker) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isSaved,showEmojiPicker]);

  return (
    <div className="post">
      <div className="postHeader">
        <Link to="#" className="postLinks">
          <img src={profilePhoto} alt="profile" className="postUserPhoto" />
        </Link>

        <div className="postInfo">
          <div className="postInfo1">
            <Link to="#" className="postLinks">
              <span className="postProfileName">{user}</span>
            </Link>
            {verified && <MdVerified className="userVerification" />}
            <span className="postTimeSeparator">
              <LuDot />
            </span>
            <Link to="#" className="postLinks">
              <span className="postTime">{time}</span>
            </Link>
          </div>
          <div className="postInfo2">
            <Link to="#" className="postLinks">
              <span className="postLocation">{location}</span>
            </Link>
          </div>
        </div>

        <button type="button" className="postInfo-button">
          <BsThreeDots size={18} className="postHeaderOption" />
        </button>
      </div>

      <div className="postContent" onDoubleClick={postDoubleClick}>
        {photo && <img src={photo} alt="Post" className="postImg" />}
        {video && (
          <div className="videoContainer">
            <video
              ref={videoRef}
              className="postVideo"
              muted={isMuted}
              loop
              playsInline
              onClick={handlePlayPause}
            >
              <source src={video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className="videoControls">
              {!isPlaying && (
                <HiPlay
                  className="videoPlayPauseButton"
                  onClick={handlePlayPause}
                />
              )}
              <button onClick={toggleMute} className="videoMuteUnmute">
                {isMuted ? (
                  <PiSpeakerSlashFill size={15} />
                ) : (
                  <PiSpeakerHighFill size={15} />
                )}
              </button>
            </div>
          </div>
        )}
        {doubleTap && <PostLikeAnimation />}
        {isSaved && savePostBanner && <SavePostBanner />}
      </div>

      <div className="postFooter">
        <div className="postFooterNav">
          <button onClick={toggleLike} type="button" className="postFooterBtn">
            {isLiked ? (
              <FaHeart color="red" size={24} />
            ) : (
              <FaRegHeart size={24} />
            )}
          </button>
          <Link to="#" className="postLinks">
            <TbMessageCircle className="postCommentIcon" />
          </Link>
          <Link to="#" className="postLinks">
            <LuSend className="postForwardIcon" />
          </Link>

          <button
            onClick={handleSaveButton}
            type="button"
            className="postFooterBtn"
          >
            {isSaved ? <FaBookmark size={20} /> : <FaRegBookmark size={20} />}
          </button>
        </div>
        <Link to="#" className="postLinks">
          <div className="postLikes">{postLikes} Likes</div>
        </Link>
        <Link to="#" className="postLinks">
          <div className="postComments">View all comments</div>
        </Link>

        {isDisplayComment && (
          <div className="postedCommentContainer">
            <span className="commentedUser">{adminUser.username}</span>
            <div className="postedComment">{postedComment}</div>
          </div>
        )}

        <div className="addComment">
          <form onSubmit={handleCommentSubmit} className="commentForm">
            <textarea
              placeholder="Add a comment..."
              autoComplete="off"
              autoCorrect="off"
              value={commentInput}
              onChange={handleCommentChange}
              className="addCommentTextarea"
            ></textarea>

            {commentInput.trim() && (
              <button type="submit" className="postCommentButton">
                Post
              </button>
            )}

            <button className="post-emojiButton" onClick={toggleEmojiPicker}>
              <GoSmiley className="addEmoji" />
            </button>
            {showEmojiPicker && (
              <div ref={emojiRef}>
                <EmojiPicker onEmojiClick={onEmojiClick} />
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Post;