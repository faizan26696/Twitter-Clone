
import React, { useEffect, useState } from "react";
import HomeIcon from "@mui/icons-material/Home";
import TagIcon from "@mui/icons-material/Tag";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { Grid, Avatar } from "@mui/material";
import TwitterIcon from "@mui/icons-material/Twitter";
import Button from "@mui/material/Button";
import "./Sidebar.css";
import Stack from "@mui/material/Stack";

import { Menu, MenuItem, IconButton } from "@mui/material";
import { MoreHoriz } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { getUsers } from "../../utils/localStorage";
import { useRecoilState, useRecoilValue } from "recoil";
import { LoginState, currentUser } from "../../atoms/atoms";
import { AvatarImage } from "../../atoms/atoms";
 import Modal from "@mui/material/Modal";
 import Tweet from "../../components/tweet/tweet";

const Sidebar = () => {
  const [details, setDetails] = useState([]);
  const Users = getUsers();
  const navigate = useNavigate();
  const [loginState,setLoginState] = useRecoilState(LoginState);
  const holder = useRecoilValue(AvatarImage);
  // const currentUser=useRecoilValue(currentUser);
 
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose1 = () => setOpen(false);

  useEffect(() => {
    let users = JSON.parse(localStorage.getItem("users")) || [];
    setDetails(users);
  }, []);

  useEffect(()=> {
    if(loginState===false){
      localStorage.setItem('userlogin',JSON.stringify(false))
      navigate('/sign-in')
    }

  },[])

  let store = JSON.parse(localStorage.getItem("users"));
  let userdetail;

  if (store) {
    // add a null check
    store.map((user) => {
      if (user.isLogin) {
        userdetail = user;
      }
    });
  }

  console.log(details);

  const data = [
    {
      icon: <HomeIcon />,
      name: "Home",
    },
    {
      icon: <TagIcon />,
      name: "Explore",
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
      icon: <BookmarkBorderIcon />,
      name: "Bookmarks",
    },
    {
      icon: <TwitterIcon />,
      name: "Twitter Blue",
    },
    {
      icon: <PersonOutlineIcon />,
      name: "Profile",
    },
    {
      icon: <MoreHorizIcon />,
      name: "More",
    },
  ];

  const twitterAvatar = { backgroundColor: "white", color: "#1da1f2" };
  const [anchorEl, setAnchorEl] = useState(null);
  const handleClick = (event) => {
    // console.log(event);
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setLoginState(false);
    console.log(loginState);

    if(loginState===false){
      localStorage.setItem('userlogin',JSON.stringify(false))
      navigate("/sign-in");
    }
    
  };

  const ProfileChip = {
    fontSize: "1rem",
    height: "3rem",
    width: "15rem",
    fontWeight: "550",
    borderRadius: "30px",
    "&:hover": {
      backgroundColor: "rgb(73, 71, 71)",
      opacity: [0.9, 0.8, 0.7],
    },
  };

  return (
    <Stack direction="column" spacing={2} sx={{ padding: "30px" }}>
      <Grid width="25%" height="100%">
        <Grid>
          <Avatar style={twitterAvatar}>
            <TwitterIcon
              sx={{
                fontSize: 40,
              }}
            />
          </Avatar>
        </Grid>
        <Grid
          style={{ display: "flex", flexDirection: "column", gap: "0.2rem" }}
        >
          {data.map((ele, index) => {
            return (
              <div key={index}>
                <span>
                  {" "}
                  <h3
                    className="sidebarbtn"
                    style={{
                      borderRadius: 10,
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center",
                      padding: "11px",
                      width: "190px",
                      color: "black",
                      textTransform: "none",
                      gap: "12px",

                      fontSize: "1.3rem",
                      fontWeight: 550,
                    }}
                  >
                    {" "}
                    {ele.icon} {ele.name}
                    {/* <Link to={ele.link}>{ele.icon} {ele.name}</Link> 
                    
                    ----- we will do this when we have to add links  of respective paths */}
                  </h3>
                </span>
              </div>
            );
          })}
        </Grid>
        <Grid>
          <Stack direction="column" spacing={10}>
            <button
              onClick={handleOpen}
              style={{
                marginRight: "20px",
                width: "200px",
                padding: "10px",
                borderRadius: "25px",
                border: "1px solid",
                backgroundColor: "#1da1f2",
                color: "white",
                fontSize: "15px",
              }}
            >
              Tweet
            </button>

            <Modal
              open={open}
              onClose={handleClose1}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <div
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  width: 500,
                  backgroundColor: "white",
                  border: "1px solid 1da1f2 ",
                  boxShadow: 26,
                  padding: "6px",
                }}
              >
                <Tweet />
              </div>
            </Modal>

            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose}>Log out</MenuItem>
              <MenuItem onClick={handleClose}>Add an existing account</MenuItem>
            </Menu>

            <Button
              // onClick={() => {
              //   alert("hello");
              // }}
              variant="contained"
              color="grey"
              // endIcon={<MoreHorizIcon />}
              style={ProfileChip}
              sx={{
                fontSize: 40,
                "&:hover": {
                  backgroundColor: "grey",
                },
              }}
            >
              {/* <Avatar>
                {details &&
                  details[0] &&
                  details[0].name &&
                  details[0].name.slice(0, 1)}
              </Avatar>{" "}
              {details && details[0] && details[0].name} */}
              <Avatar sx={{ marginRight: "8px" }} src={holder}></Avatar>{" "}
              {userdetail?.name}
              <IconButton onClick={handleClick}>
                <MoreHoriz />
              </IconButton>
            </Button>
          </Stack>
        </Grid>
      </Grid>
    </Stack>
  );
};

export default Sidebar;
































// import React from "react";
// import HomeIcon from "@mui/icons-material/Home";
// import TagIcon from "@mui/icons-material/Tag";
// import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
// import MailOutlineIcon from "@mui/icons-material/MailOutline";
// import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
// import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
// import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
// import { Grid, Avatar } from "@mui/material";
// import TwitterIcon from "@mui/icons-material/Twitter";
// import Button from "@mui/material/Button";
// import Chip from "@mui/material/Chip";
// import Stack from "@mui/material/Stack";


// const Sidebar = () => {
//   const data = [
//     {
//       icon: <HomeIcon />,
//       name: "Home",
//     },
//     {
//       icon: <TagIcon />,
//       name: "Explore",
//     },
//     {
//       icon: <NotificationsNoneIcon />,
//       name: "Notification",
//       link: "/notification",
//     },
//     {
//       icon: <MailOutlineIcon />,
//       name: "Messages",
//     },
//     {
//       icon: <BookmarkBorderIcon />,
//       name: "Bookmarks",
//     },
//     {
//       icon: <TwitterIcon />,
//       name: "Twitter Blue",
//     },
//     {
//       icon: <PersonOutlineIcon />,
//       name: "Profile",
//     },
//     {
//       icon: <MoreHorizIcon />,
//       name: "More",
//     },
//   ];

//   const twitterAvatar = { backgroundColor: "white", color: "#1da1f2" };

//   const ProfileChip = {
//     fontSize: "1rem",
//     height: "3rem",
//     width: "15rem",
//     fontWeight: "550",
//     borderRadius: "30px",
//     "&:hover": {
//       backgroundColor: "rgb(73, 71, 71)",
//       opacity: [0.9, 0.8, 0.7],
//     },
//   };

//   return (
//     <Stack direction="column" spacing={2} sx={{ padding: "30px" }}>
//       <Grid width="25%" height="100%">
//         <Grid>
//           <Avatar style={twitterAvatar}>
//             <TwitterIcon
//               sx={{
//                 fontSize: 40,
//                 "&:hover": {
//                   backgroundColor: "lightGrey",
//                 },
//               }}
//             />
//           </Avatar>
//         </Grid>
//         <Grid
//           style={{ display: "flex", flexDirection: "column", gap: "0.2rem" }}
//         >
//           {data.map((ele, index) => {
//             return (
//               <div key={index}>
//                 <span>
//                   {" "}
//                   <h3
//                     style={{
//                       borderRadius: 10,
//                       cursor: "pointer",
//                       display: "flex",
//                       alignItems: "center",
//                       padding: "11px",
//                       width: "190px",
//                       color: "black",
//                       textTransform: "none",
//                       gap: "12px",
//                       "&:hover": {
//                         backgroundColor: "rgb(231, 233, 234)",
//                         opacity: [0.9, 0.8, 0.7],
//                       },
//                       fontSize: "1.3rem",
//                       fontWeight: 550,
//                     }}
//                   >
//                     {" "}
//                     {ele.icon} {ele.name}
//                     {/* <Link to={ele.link}>{ele.icon} {ele.name}</Link> 
                    
//                     ----- we will do this when we have to add links  of respective paths */}
//                   </h3>
//                 </span>
//               </div>
//             );
//           })}
//         </Grid>
//         <Grid>
//           <Stack direction="column" spacing={10}>
//             <button
//               style={{
//                 marginRight: "20px",
//                 width: "200px",
//                 padding: "10px",
//                 borderRadius: "25px",
//                 border: "1px solid",
//                 backgroundColor: "#1da1f2",
//                 color: "white",
//                 fontSize: "15px",
//               }}
//             >
//               Tweet
//             </button>
//             <Button
//               variant="contained"
//               color="grey"
//               endIcon={<MoreHorizIcon />}
//               style={ProfileChip}
//               sx={{
//                 fontSize: 40,
//                 "&:hover": {
//                   backgroundColor: "grey",
//                 },
//               }}
//             >
//               <Avatar>T</Avatar> username
             
//             </Button>
            
           
//           </Stack>
//         </Grid>
//       </Grid>
//     </Stack>
//   );
// };

// export default Sidebar;
