// import { getUsers } from "../../utils/localStorage";
import React from "react";
import { useRecoilState } from "recoil";
import InstagramPost from "../../components/middleComponent/middle";
import Tweet from "../../components/tweet/tweet";
import { tweets } from "../../atoms/atoms";
import { useEffect } from "react";
import MiddleFirst from "../../components/middleFirst/middleFirst";
///*******md components******** */
import "./Home.css"
import Trends from "../../Components/Trends/Trend";
import Search from "../../Components/Search/Search";
import FollowComponent from "../../Components/FollowComponent/Follow";
import Sidebar from "../../Components/Sidebar/Sidebar";
import Bottom from "../../Components/bottom/bottom";

///*******md components******** */

export function Home() {
  const [tweet, setTweets] = useRecoilState(tweets);
 
  useEffect(() => {
    fetchData();
  }, []);
  
  function fetchData() {
    fetch("./tweets.json")
      .then((r) => r.json())
      .then((data) => {setTweets(data);console.log("publickdata",data)});
  }
   
   
  return (


    <div style={{ display: "flex" }}>
      <div className="rightside">

        {" "}
        <Sidebar />
      </div>


      <div style={{ width: "600px" }}>
        <div style={{ border: "3px solid #f7f9f9" }}>
          <MiddleFirst />
          <div className="middle">
            <Tweet />
          </div>

     


        </div>

        {tweet.map((e) => (
          <InstagramPost details={e} />
        ))}
      </div>


      <div className="rightside">


        <Search />
        <Trends />
        <FollowComponent />
      </div>
      <div  className="bottom">
        <Bottom />
      </div>
    </div>
  );
}
 