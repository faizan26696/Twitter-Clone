import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Trend.module.css";
import { BsThreeDots } from "react-icons/bs";

const Trends = () => {
  const [trends, setTrends] = useState([
    { id: 1, status: "Trending", content: "Brahmin", tweets: "10K" },
    { id: 2, status: "Trending", content: "#FrontEndDeveloper", tweets: "10K" },
    { id: 3, status: "Trending", content: "#BJPFraud", tweets: "10K" },
    { id: 4, status: "Trending", content: "#GoModi", tweets: "10K" },
  ]);

  return (
    <div className={styles.mainContainer}>
      <div>
        <h2>What's Happening</h2>
      </div>
      <div>
        <div className={styles.mainContent}>
          <div>
            <p>NBA - 46 minutes ago</p>
            <h3>Warriors at Kings</h3>
          </div>
          <img src={"https://reqres.in/img/faces/5-image.jpg"} alt="userImg" />
        </div>
      </div>
      <div>
        {trends.map((elem) => {
          return (
            <div className={styles.contentSection} key={elem.id}>
              <div className={styles.Img}>
                <div className={styles.nameSection}>
                  <p>{elem.status}</p>
                  <h3>{elem.content}</h3>
                  <p>{elem.tweets} Tweets</p>
                </div>
              </div>

              <div>
                <BsThreeDots />
              </div>
            </div>
          );
        })}
      </div>
      <Link to="#" className={styles.Link}>
        Show more
      </Link>
    </div>
  );
};
export default Trends;
