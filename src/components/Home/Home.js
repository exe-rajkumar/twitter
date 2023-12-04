import React from "react";
import TweetBox from "../Tweet/Tweet";
import TweetList from "../TweetList/TweetList";

export default function Home() {
  return (
    <>
      {/* <div style={{ display: "flex" }}>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <TweetBox />
        </div> */}
      <div style={{ display: "flex", justifyContent: "center" }}>
        <TweetBox />
      </div>
      <TweetList />
      {/* </div> */}
    </>
  );
}
