import React from "react";
import TweetBox from "../Tweet/Tweet";
import TweetList from "../TweetList/TweetList";

export default function Home() {
  return (
    <>
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            width: "50%",
          }}
        >
          <div style={{ width: "100%" }}>
            <TweetBox />
          </div>
          <div style={{ width: "100%" }}>
            <TweetList />
          </div>
        </div>
      </div>
    </>
  );
}
