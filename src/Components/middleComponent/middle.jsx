import React from "react";
import AspectRatio from "@mui/joy/AspectRatio";
import Avatar from "@mui/joy/Avatar";
import Box from "@mui/joy/Box";
import Card from "@mui/joy/Card";
import CardOverflow from "@mui/joy/CardOverflow";
import Link from "@mui/joy/Link";
import IconButton from "@mui/joy/IconButton";
import Input from "@mui/joy/Input";
import Typography from "@mui/joy/Typography";
import MoreHoriz from "@mui/icons-material/MoreHoriz";


import { AiOutlineRetweet } from "react-icons/ai";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { BiBarChart } from "react-icons/bi";
import MapsUgcOutlinedIcon from "@mui/icons-material/MapsUgcOutlined";
import IosShareOutlinedIcon from "@mui/icons-material/IosShareOutlined";


export default function InstagramPost({ details }) {
  const {
    content,
    image,
    tweetedBy,
    likeCount,
    commentCount,
    reTweetsCount,
    isLiked,
  } = details;
  const [IsLiked, setIsLiked] = React.useState(isLiked);
  const [likecount, setLikeCount] = React.useState(likeCount);
  const [retweetcount, setretweetcount] = React.useState(reTweetsCount);
  const [flag, setflag] = React.useState(true);


  function handleLike() {
        IsLiked ? setLikeCount(likecount - 1) : setLikeCount(likecount + 1);
       
    setIsLiked(!IsLiked);
  }
  function handleTweet() {
    
     flag  ? setretweetcount(retweetcount - 1)
       : setretweetcount(retweetcount + 1);
        setflag(!flag)
  }
  return (
    <Card
      
      sx={{
        width: "100%",
        height: "auto",
        
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", pb: 1.5, gap: 1 }}>
        <Box
          sx={{
            position: "relative",
            "&:before": {
              content: '""',
              position: "absolute",
              top: 0,
              left: 0,
              bottom: 0,
              right: 0,
              m: "-2px",
              borderRadius: "50%",
              background:
                "linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%)",
            },
          }}
        >
          <Avatar src={image} sx={{ border: "none" }} />
        </Box>
        <Typography fontWeight="lg">{tweetedBy.name}</Typography>

        <IconButton
          variant="plain"
          color="neutral"
          size="sm"
          sx={{ ml: "auto" }}
        >
          <MoreHoriz />
        </IconButton>
      </Box>

      <Typography sx={{marginLeft:"5px"}}>{content}</Typography>
      <AspectRatio>
        <img src={image} alt="" loading="lazy" />
      </AspectRatio>

      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Box sx={{ display: "flex", gap: 1, width: "auto",marginLeft:"5px" }}>
          <IconButton variant="plain" color="neutral" size="sm">
            <MapsUgcOutlinedIcon style={{ fontSize: "20px" }} />
            {commentCount}
          </IconButton>
          <IconButton
            onClick={handleTweet}
            variant="plain"
            color="neutral"
            size="sm"
          >
            {flag ? (
              <AiOutlineRetweet
                style={{ color: "#1da1f2", fontSize: "20px" }}
              />
            ) : (
              <AiOutlineRetweet style={{ color: "black", fontSize: "20px" }} />
            )}
            {retweetcount}
          </IconButton>
          <IconButton
            onClick={handleLike}
            variant="plain"
            color="neutral"
            size="sm"
          >
            {IsLiked ? (
              <FavoriteIcon sx={{ color: "red" }} />
            ) : (
              <FavoriteBorderIcon />
            )}
            {likecount}
          </IconButton>
          <IconButton variant="plain" color="neutral" size="sm">
            <BiBarChart />
            {reTweetsCount}
          </IconButton>
          <IconButton variant="plain" color="neutral" size="sm">
            <IosShareOutlinedIcon style={{ fontSize: "20px" }} />
          </IconButton>
        </Box>
      </Box>
    </Card>
  );
}
