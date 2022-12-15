import { useState } from "react";
import {
  faMicrophone,
  faCamera,
  faVideo,
  faPaperPlane,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from "../pictures/logo.png";
import "../style/RightPanelHeader.scss";
import ReactTextareaAutosize from "react-textarea-autosize";

function RightPanelHeader(props) {
  const [comment, setComment] = useState("");

  const handleComment = (e) => {
    e.preventDefault();
    if (comment.trim() === "") {
      return;
    }
    props.userInfo(comment);
    setComment("");
  };

  return (
    <div className="right-panel-header">
      <div className="right-panel-user-input">
        <img src={logo} alt="" className="user-image" />
        <form  className="right-panel-input">
          <ReactTextareaAutosize minRows={1} maxRows={6}
            type="text"
            value={comment}
            onChange={(e) => {
              setComment(e.target.value);
            }}
            placeholder="Share something here..."
            className="right-panel-input"
          />
        </form>
        <FontAwesomeIcon icon={faPaperPlane} onClick={handleComment}/>
      </div>
      <div className="right-panel-attachments">
        <div className="right-panel-attachment-file">
          <FontAwesomeIcon
            icon={faVideo}
            className="right-panel-attachemnt-icon"
          />
          <p>Any attachment</p>
        </div>
        <div className="right-panel-attachment-file">
          <FontAwesomeIcon
            icon={faCamera}
            className="right-panel-attachemnt-icon"
          />
          <p>Capture it</p>
        </div>
        <div className="right-panel-attachment-file">
          <FontAwesomeIcon
            icon={faMicrophone}
            className="right-panel-attachemnt-icon"
          />
          <p>Say it</p>
        </div>
      </div>
    </div>
  );
}

export default RightPanelHeader;
