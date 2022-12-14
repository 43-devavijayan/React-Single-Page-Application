import { useState } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons"
import LeftNavigationPost from './LeftNavigationPost';
import "../style/MenuMoreOptions.scss";

function MenuMoreOptions(props) {

    const menuListData = props.menuList;
    const limit = (props.limit);
    const [seeMoreButton, setSeeMoreButton] = useState(false)

    const SeeMoreButton = () => {
        setSeeMoreButton(!seeMoreButton)
    }

    return (
        <div>
            {(seeMoreButton ?
                menuListData : menuListData.slice(0, limit)).map((menu,index) => {
                    return (<LeftNavigationPost key = {index} list={menu}  />)
                })
            }
            <button onClick={SeeMoreButton} className="button-on-click">{seeMoreButton ? "See less" : "See more"}
                {seeMoreButton ? <FontAwesomeIcon icon={faChevronUp} className="button-icon" /> :
                    <FontAwesomeIcon icon={faChevronDown} className="button-icon" />}</button>
        </div>
    )
}

export default MenuMoreOptions;
