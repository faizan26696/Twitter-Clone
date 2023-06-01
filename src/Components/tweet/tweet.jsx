import React, { useState } from "react";



import { SlPicture } from "react-icons/sl";
import { MdOutlineGifBox } from "react-icons/md";
import { MdOutlinePoll } from "react-icons/md";

// import { AiOutlineSchedule } from "react-icons/Ai";



import Avatar from "@mui/joy/Avatar";
import { TextField } from "@mui/material";
import { useEffect } from "react";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAlt";
import FmdGoodOutlinedIcon from "@mui/icons-material/FmdGoodOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import EmojiPicker from "emoji-picker-react";
import { SkinTones } from "emoji-picker-react";
import { useRecoilState } from "recoil";
import { recoilImage } from "../../atoms/atoms";

import {AvatarImage} from "../../atoms/atoms";


export default function Tweet() {
  const [random, setRandom] = useState(Math.floor(Math.random() * 50));
  const [isSee, isSetsee] = useState(false);
  const [images, setImages] = useRecoilState(recoilImage);
  const [emoji, setEmoji] = useState("");
  const [Arrayemoji, setArrayEmoji] = useState([]);
  const [InputArrayemoji, InputsetArrayEmoji] = useState("");
  const [AvatarState, setAvatarState] = useRecoilState(AvatarImage);


  useEffect(() => {
    dataFetch();
   
  }, []);
 
  function dataFetch() {
    fetch("./users.json")
      .then((r) => r.json())
      .then((data) =>{ setImages(data);
         setAvatarState(data[random]?.image)
         
      });
      
  }
  function handlelocation(){
    const successCallback = (position) => {
     
    };

    const errorCallback = (error) => {
     
    };

    navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
  }
 
  const inputref = React.useRef();
  function handleIcon1() {
    inputref.current.click();
  }

  return (
    <div
      style={{
        borderTop: "3px solid #f7f9f9",

        boxShadow: "",
        display: "flex",
        width: "100%",
        height: "27vh",
        paddingRight: "7px",

        borderRadius: "5px",
      }}
    >
      <div>
        <Avatar
          sx={{ marginTop: "5px", marginLeft: "4px" }}
          alt="Remy Sharp"
          src={AvatarState}
        />
      </div>
      <div
        style={{
          marginTop: "1%",
          width: "50vw",
          marginLeft: "2%",
          marginTop: "2%",
        }}
      >
        <div style={{ marginTop: "4px", paddingTop: "0.2rem" }}>
          <input
            onChange={(e) => {
              setArrayEmoji([...Arrayemoji, e.target.value]);
            }}
            type="textarea"
            value={Arrayemoji.join("")}
            style={{
              width: "30vw",
              height: "8vh",
              border: "1px solid white",
              fontFamily: "sans-serif",
              fontSize: "20px",
              outline: "none",
            }}
            placeholder="What's Happening??"
          />
        </div>
        <div
          style={{
            marginTop: "12px",

            marginBottom: "5%",
          }}
        >
          <div
            style={{
              width: "50%",
              fontFamily: "serif",
              color: "#1da1f2",
            }}
          >
            <LanguageOutlinedIcon
              style={{ fontSize: "0.9rem", marginRight: "0.2rem" }}
            />
            EveryOne Can Reply
          </div>
        </div>
        <hr />
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",

              width: "15vw",
              marginTop: "0.5rem",
              padding: "0.2rem",
            }}
          >
            <input ref={inputref} type="file" hidden />
            <SlPicture
              onClick={handleIcon1}
              style={{ color: "1da1f2", fontSize: "20px" }}
            />
            <MdOutlineGifBox style={{ color: "1da1f2", fontSize: "20px" }} />
            <MdOutlinePoll style={{ color: "1da1f2", fontSize: "20px" }} />
            <SentimentSatisfiedAltIcon
              onClick={() => {
                isSetsee(!isSee);
              }}
              style={{ color: "1da1f2", fontSize: "20px" }}
            />

            <FmdGoodOutlinedIcon onClick={handlelocation}
              style={{ color: "1da1f2", fontSize: "20px" }}
            />
            {/* <AiOutlineSchedule style={{ color: "1da1f2", fontSize: "20px" }} /> */}
          </div>

          <div>
            <button
              style={{
                marginRight: "20px",
                width: "100%",
                padding: "10px",
                borderRadius: "25px",
                border: "none",
                backgroundColor: "#1da1f2",
                color: "white",
                fontSize: "15px",
              }}
            >
              Tweet
            </button>
          </div>
        </div>
      </div>
      {isSee && (
        <span
          style={{
            zIndex: "1",
            marginTop: "10px",
            position: "absolute",
            top: "300px",
          }}
        >
          <EmojiPicker
            emojiStyle="twitter"
            skinTonesDisabled={false}
            height={500}
            width={400}
            onEmojiClick={(data) => {
              setEmoji(data.emoji);
              setArrayEmoji([...Arrayemoji, emoji]);
            }}
          />
        </span>
      )}
    </div>
  );
}
