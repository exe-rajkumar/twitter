import React, { useState } from "react";
import { Button, IconButton, TextField } from "@mui/material";
import InsertPhotoOutlinedIcon from "@mui/icons-material/InsertPhotoOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import styles from "./Tweet.module.css";

const TweetBox = () => {
  const [tweet, setTweet] = useState("");
  const [image, setImage] = useState(null);
  const [location, setLocation] = useState("");

  const handleTweetChange = (e) => {
    setTweet(e.target.value);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };

  const handleLocationChange = (e) => {
    setLocation(e.target.value);
  };

  const handleTweetSubmit = () => {
    // Add your logic to handle the tweet submission (e.g., send it to a server)
    console.log("Tweet:", tweet);
    console.log("Image:", image);
    console.log("Location:", location);

    // Clear the tweet box after submission
    setTweet("");
    setImage(null);
    setLocation("");
  };

  return (
    <div className={styles.container}>
      <TextField
        className={styles.tweetInput}
        placeholder="What's happening?"
        value={tweet}
        onChange={handleTweetChange}
        multiline
        rows={4}
      />
      <div className={styles.iconButtons}>
        <div style={{ width: "50%" }}>
          <IconButton component="label" htmlFor="image-input">
            <InsertPhotoOutlinedIcon color="primary" />
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              id="image-input"
              style={{ display: "none" }}
            />
          </IconButton>
          <IconButton>
            <LocationOnOutlinedIcon color="primary" />
          </IconButton>
        </div>
        <div
          style={{ width: "50%", display: "flex", justifyContent: "flex-end" }}
        >
          <button className={styles.tweetButton} onClick={handleTweetSubmit}>
            Tweet
          </button>
        </div>
      </div>
    </div>
  );
};

export default TweetBox;
