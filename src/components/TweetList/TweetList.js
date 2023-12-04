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
    <div>
      <ul>
        {tweets.map((tweet) => (
          <li key={tweet.tweet_id}>
            <p>{tweet.user_profile_picture}</p>
            <p>{tweet.user_first_name}</p>
            <p>{tweet.user_last_name}</p>
            <p>{tweet.user_username}</p>
            <p>{tweet.tweet_text}</p>
            {/* <p>Tweet Time: {tweet.tweet_time}</p> */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TweetList;
