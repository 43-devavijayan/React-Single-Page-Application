import React from "react";
import moment from "moment";
import RightPanelCommentCard from "../components/RightPanelCommentCard";
import RightPanelHeader from "../components/RightPanelHeader";
import { useEffect, useState } from "react";
import { rightPanelUserData } from "../data/RightPanelData";
import { v4 as uuidv4 } from 'uuid';
import { LengthUpdator } from "../LengthState";
import logo from "../pictures/logo.png";
import "../style/RightPanel.scss";

function RightPanel({ onclick }) {

  const [receivedMessage, setReceivedMessage] = useState([]);

  // Deleting an object using ID
  const deleteComment = (contentId) => {
    setReceivedMessage(receivedMessage.filter((idContent) => idContent.id !== contentId))
  }

  // Adding objects into an array
  const messageReceived = (value) => {
    setReceivedMessage([
      {
        id: uuidv4(),
        name: "Mamtha Patel",
        image: logo,
        designation: "Markerting Expert",
        comment: value,
        time: moment().format(),
      },
      ...receivedMessage,
    ]);
  };

  const { postLength, setValue } = React.useContext(LengthUpdator)

  const handleUpdate = (lengthValue) => {
    console.log(lengthValue)
    setValue('UpdateLength', lengthValue)
  }

  // updating a message using ID
  const updateMessage = (currentIndex, updatedComment) => {
    receivedMessage[currentIndex].comment = updatedComment
    setReceivedMessage([...receivedMessage])
  }

  // Setting and Getting items in local storage 
  useEffect(() => {
    let existingContent = rightPanelUserData;
    if (localStorage.getItem('content') !== 'null' && localStorage.getItem('content')?.length > 0) {
      existingContent = JSON.parse(localStorage.getItem('content'));

    } setReceivedMessage(existingContent);
  }, []);

  //Setting user comments in loca storage
  useEffect(() => {
    localStorage.setItem("content", JSON.stringify(receivedMessage));
    handleUpdate(receivedMessage.length)
  }, [receivedMessage]);

  return (
    <div className="right-panel" onClick={onclick}>
      <RightPanelHeader userInfo={messageReceived} />
      {receivedMessage.map((post, index) => (
        <RightPanelCommentCard
          deleteContents={deleteComment}
          designation={post.designation}
          name={post.name}
          time={moment(post.time).fromNow()}
          postContent={post.comment}
          image={post.image}
          id={post.id}
          updateMessage={updateMessage}
          index={index}
          key={index}
        />
      ))}

    </div>
  );

}


export default RightPanel;
