import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import styles from "./Follow.module.css";

const FollowComponent = () => {
  const [user, setUser] = useState([]);

  const [followed, setFollowed] = useState(
    JSON.parse(localStorage.getItem("followed")) || []
  );
  const getUsers = async () => {
    const response = await axios.get(`https://reqres.in/api/users`);
    // console.log(response);
    setUser(response.data.data);
  };

  const clickHnadler = (id) => {
    // setIsFollwed(!isFollowed);
    if (followed.includes(id)) {
      setFollowed(followed.filter((item) => item !== id));
    } else {
      setFollowed([...followed, id]);
    }
  };

  useEffect(() => {
    localStorage.setItem("followed", JSON.stringify(followed));
  }, [followed]);

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <>
      <div className={styles.mainContainer}>
        <div>
          <h1>Who to Follow</h1>
        </div>
        {/* <div>
        <div>image</div>
      </div> */}
        <div>
          {user.map((elem) => {
            return (
              <div className={styles.contentSection} key={elem.id}>
                <div className={styles.Img}>
                  <img src={elem.avatar} alt="userImg" />
                  <div className={styles.nameSection}>
                    <h3>
                      {elem.first_name} {elem.last_name}
                    </h3>
                    <p>{elem.email}</p>
                  </div>
                </div>

                <div>
                  <button
                    className={styles.Btn}
                    onClick={() => clickHnadler(elem.id)}
                  >
                    {followed.includes(elem.id) ? "Unfollow" : "Follow"}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
        <Link to="#" className={styles.Link}>
          Show more
        </Link>
      </div>
      <div className={styles.paraContent}>
        <p>Terms of Service Privacy Policy Cookie Policy</p>
        <p>Accessibility Ads info More... © 2023 x crop</p>
      </div>
    </>
  );
};
export default FollowComponent;
