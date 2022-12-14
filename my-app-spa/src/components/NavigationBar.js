import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight, faArrowLeft, faBars, } from "@fortawesome/free-solid-svg-icons";
import "../style/NavigationBar.scss";

function NavigationBar(props) {

  const displayToggle = props.displayToggle
const navigationBarProps= props.navigationBarProps

  return (
    <div className="navigation">
      <div className="navigation-bar">
        <div className="navigation-bar-left-icon">
          <FontAwesomeIcon icon={faArrowLeft} className="icon-arrow-left" />
        </div>
        <p>{navigationBarProps.dashBoardValue}</p>
        <div className="navigation-bar-down-icon">
          <FontAwesomeIcon icon={faAngleRight} className="icon-angel-right" />
        </div>
        <p><strong>{navigationBarProps.socialFeedValue}</strong></p>
      </div>
      <a onClick={displayToggle}><FontAwesomeIcon icon={faBars} className="icon" /></a>
    </div>
  );
}

export default NavigationBar;
