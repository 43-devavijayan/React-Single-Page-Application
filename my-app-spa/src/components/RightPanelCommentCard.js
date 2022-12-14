import React, { useState } from "react";
import ModalApp from "./ModalApp";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import 'react-edit-text/dist/index.css';
import 'reactjs-popup/dist/index.css';
import "../style/RightPanelCommentCard.scss";
import { useEffect } from "react";

 //Creating a new post everytime user enters a new message.
function RightPanelCommentCard(props) {

  const deleteOptionsVariable = ({
    deleteRequestCommand : "Are you sure you want to delete?",
    buttonOnDelete : "Delete",
    buttonOnCancel: "Cancel"
  })
  const [isEditEnabled, setIsEditEnabled] = useState(false)
  const [updateComment, setUpdateComment] = useState("")

  useEffect(() => {
    if(isEditEnabled){
      setUpdateComment(props.postContent);
    }
  }, [isEditEnabled])

  // sending object ID for delete to RightPanel(parent)
  const onDelete = () => {
    props.deleteContents(props.id)
  }

  // 
  const onEditEnter = (event) => {
    event.preventDefault()
    props.updateMessage(props.index, updateComment)
    setIsEditEnabled(!isEditEnabled)
  }

  const editFunction = () => {
    setIsEditEnabled(!isEditEnabled);
  }

  const EditIcon = () => {
    if (props.name === "Mamtha Patel") {
      return (<FontAwesomeIcon icon={faPen} className="edit-icon" onClick={editFunction} />)
    }
  }

  return (
    <div className="right-panel-card-container">
      <div className="right-panel-card-user">
        <div className="right-panel-card-user-image">
          <img src={props.image} alt="" className="user-image" />
          <div className="right-panel-card-user-info">
            <p>
              <strong>{props.name}</strong>
            </p>
            <p>{props.designation}</p>
            <p>{props.time}</p>
          </div>
        </div>
        <ModalApp onDelete={ onDelete } deleteContents={deleteOptionsVariable} />
      </div>
      <div className="right-panel-card-edit">
        {!isEditEnabled ? <div className="right-panel-card-content">{ props.postContent }</div>
          : <form onSubmit={ onEditEnter } className="update-form-field"><input type="text" value={ updateComment } onChange={( event ) => { setUpdateComment(event.target.value) }} className="update-input-field"></input></form>
        }
        <EditIcon />
      </div>
    </div>
  );
}

export default RightPanelCommentCard;
