import logo from "../pictures/logo.png";
import "../style/UserInfo.scss";

function UserInfo() {

  return (
    <div className="user-info-image">
      <img src={logo} alt="Userimage" className="user-image" />
      <p>
        <strong>Mamtha Patel</strong>
      </p>
    </div>
  );
}

export default UserInfo;
