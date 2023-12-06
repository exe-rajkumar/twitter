import React, { useState } from "react";
import { Button, IconButton, TextField } from "@mui/material";
import styles from "./Tweet.module.css";
import axios from "axios";
import CircularProgress from "@mui/material/CircularProgress";

const TweetBox = () => {
  const [tweet, setTweet] = useState("");
  const [tweetStatus, setTweetStatus] = useState(false);
  const [error, setError] = useState(false);
  // const [image, setImage] = useState(null);
  // const [location, setLocation] = useState("");

  // const handleTweetChange = (e) => {
  //   setTweet(e.target.value);
  // };

  // const handleImageChange = (e) => {
  //   const file = e.target.files[0];
  //   setImage(file);
  // };

  // const handleLocationChange = (e) => {
  //   setLocation(e.target.value);
  // };

  const tweetCriteria = () => {
    return tweet !== "";
  };
  const handleFlaskTweet = async (e) => {
    console.log(tweet);
    try {
      const response = await axios.post("http://localhost:5000/tweet_input", {
        tweet: tweet,
      });
  
      if (response.status === 200) {
        console.log(response.data);
      }
    } catch (error) {
      console.log(error);
      setTweetStatus(false);
      setError(true);
    }
  };

  const handleTweetSubmit = async (e) => {
    setTweetStatus(true);
    e.preventDefault();
    const id = localStorage.getItem("id");
    try {
      const response = await axios.post(
        "https://2igvvouj0k.execute-api.ap-south-1.amazonaws.com/user_tweet",
        {
          tweet,
          id,
        }
      );
      if (response.request.status === 200) {
        setTweetStatus(false);
        setTweet("");
      }
    } catch (error) {
      console.log(error);
      setTweetStatus(false);
      setError(true);
    }
    handleFlaskTweet();
  };

  return (
    <div className={styles.container}>
      <div style={{ width: "75%" }}>
        <TextField
          className={styles.tweetInput}
          placeholder="What's happening?"
          value={tweet}
          onChange={(e) => setTweet(e.target.value)}
          multiline
          rows={4}
        />
        <div className={styles.iconButtons}>
          {/* <div style={{ width: "50%" }}>
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
        </div> */}
          {tweetStatus ? (
            <div style={{ width: "100%", textAlign: "right" }}>
              <CircularProgress />
            </div>
          ) : (
            <div
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "flex-end",
              }}
            >
              <button
                disabled={!tweetCriteria()}
                className={
                  tweetCriteria() ? styles.valid_button : styles.disabled_button
                }
                onClick={handleTweetSubmit}
              >
                Tweet
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TweetBox;
