import { Route, Routes } from "react-router-dom";
// import { firstMenuData } from "../data/FirstMenuData";
// import { userSecondData } from "../data/MenuData"
import RightPanel from "../views/RightPanel";
import BuzzPost from "../views/BuzzPost";
import DraftPost from "../views/DraftPost";
import MyFollowers from "../views/MyFollowers";
import FollowingDetails from "../views/Following";
import MyReporters from "../views/MyReporters";
import MyTeams from "../views/MyTeams";
import Group from "../views/Group";
import UserLinksDetails from "../views/Links";
import SavedDetails from "../views/Saved";

function RoutingPath({functionToggleRight}) {
    return (
        <div className="overall-container">
            <Routes>
                <Route path="/" element={<RightPanel onclick={functionToggleRight} />}/>
                <Route path="/BuzzPost" element={<BuzzPost/>}/>
                <Route path="/DraftPost" element={<DraftPost/>}/>
                <Route path="/MyFollowers" element={<MyFollowers/>}/>
                <Route path="/FollowingDetails" element={<FollowingDetails/>}/>
                <Route path="/MyTeams" element={<MyTeams/>}/>
                <Route path="/Group" element={<Group/>}/>
                <Route path="/MyReporters" element={<MyReporters/>}/>
                <Route path="/Links" element={<UserLinksDetails/>}/>
                <Route path="/Saved" element={<SavedDetails/>}/>
            
            </Routes>
        </div>
    )
}
export default RoutingPath