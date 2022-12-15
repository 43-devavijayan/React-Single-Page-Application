import React from "react";
import { NavLink } from "react-router-dom";
import { LengthUpdator } from "../LengthState";
import "../style/LeftNavigationPost.scss";

function LeftNavigationPost(props) {

  const data = props.list;
  const { postLength, setValue } = React.useContext(LengthUpdator)

  console.log(postLength);
  
  return (
    <NavLink to={data.link} className={({ isActive }) =>
      isActive ? 'nav-link' : 'routing-style'
    }>
      <div className="left-navigation-post-container">
        <div className="left-navigation-post-initial">
          <div className="left-navigation-post-image">{data.image}</div>
          <div className="left-navigation-post-post">{data.post}</div>
        </div>
        <div className="left-navigation-post-value">{data.post === "Buzz home" ? postLength : data.numberOfPosts}</div>
      </div>
    </NavLink>
  );
}

export default LeftNavigationPost;
