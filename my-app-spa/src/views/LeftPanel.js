import MenuMoreOptions from "../components/MenuMoreOptions";
import UserInfo from "../components/UserInfo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { firstMenuData } from "../data/FirstMenuData";
import { userSecondData } from "../data/MenuData";
import "../style/LeftPanel.scss";

function LeftPanel({isDisplayHamburger}) {
  
  return (
    <div className={isDisplayHamburger?"left-panel responsive": "left-panel"}>
      <UserInfo />
      <MenuMoreOptions menuList={firstMenuData} limit={7} />
      <p className="recently-added">Recently Added:</p>
      <MenuMoreOptions menuList={userSecondData} limit={3} />
      <div className="hamburger-icon"><FontAwesomeIcon icon /></div>
    </div>
  );
}

export default LeftPanel;
