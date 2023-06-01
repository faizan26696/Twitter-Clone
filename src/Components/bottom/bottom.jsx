import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import TagIcon from "@mui/icons-material/Tag";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { Grid, Avatar } from "@mui/material";
import TwitterIcon from "@mui/icons-material/Twitter";

const Bottom = () => {
  const data = [
    {
      icon: <HomeIcon />,
      name: "Home",
    },

    {
      icon: <NotificationsNoneIcon />,
      name: "Notification",
      link: "/notification",
    },
    {
      icon: <MailOutlineIcon />,
      name: "Messages",
    },

    {
      icon: <PersonOutlineIcon />,
      name: "Profile",
    },
  ];

  return (
    <Grid
      sx={{
        display: "flex",
        width: "100vw",
        height:"50px",
        justifyContent: "space-evenly",
        alignItems:"center"
      }}
    >
      {data.map((ele, index) => {
        return (
          <div key={index}>
            <span
              style={{
                borderRadius: 10,
                cursor: "pointer",
                color: "black",
                fontSize: "1.3rem",
              }}
            >
              {ele.icon}
            </span>
          </div>
        );
      })}
    </Grid>
  );
};

export default Bottom;
