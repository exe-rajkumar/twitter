import React, { useState, useEffect } from "react";

const TweetList = () => {
  const [tweets, setTweets] = useState([]);

  const fetchTweets = async () => {
    try {
      const response = await fetch(
        "https://0hnd5ng6ef.execute-api.ap-south-1.amazonaws.com/twitter_tweet_list"
      );
      const data = await response.json();

      if (response.ok) {
        setTweets(data);
      } else {
        console.error("Failed to fetch tweets:", data.message);
      }
    } catch (error) {
      console.error("Error fetching tweets:", error.message);
    }
  };

  useEffect(() => {
    fetchTweets();
    const intervalId = setInterval(() => {
      fetchTweets();
    }, 5000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div
      style={{
        width: "100%",
        marginTop: "10px",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div style={{ width: "75%" }}>
        <ul style={{ listStyle: "none" }}>
          {tweets.map((tweet) => (
            <li key={tweet.tweet_id}>
              <div
                style={{
                  width: "400px",
                  height: "100px",
                }}
              >
                <div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      padding: "5px",
                    }}
                  >
                    <img
                      src={tweet.user_profile_picture}
                      width="35px"
                      height="35px"
                    />
                    <div style={{ marginLeft: "7.5px", display: "flex" }}>
                      <b>
                        {tweet.user_first_name}
                        <span> </span>
                        {tweet.user_last_name}
                      </b>
                      <p style={{ marginLeft: "5px", fontSize: "15px" }}>
                        @{tweet.user_username}
                      </p>
                    </div>
                  </div>
                </div>
                <div style={{ marginLeft: "50px" }}>
                  <p>{tweet.tweet_text}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TweetList;
