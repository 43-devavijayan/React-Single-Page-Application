import { BrowserRouter } from "react-router-dom";
import NavigationBar from "./components/NavigationBar";
import LeftPanel from "./views/LeftPanel";
import RoutingPath from "./routes/index";
import { useState } from "react";
import { Provider } from "./LengthState";
import "./App.scss";

function App() {

  const navigationBarConstants = ({
    dashBoardValue: "Dashboard",
    socialFeedValue: "Social Feed",
  })
  const [isHamburgerEnabled, setIsHamburgerEnabled] = useState(false)

  const changeHamburgerState = () => {
    setIsHamburgerEnabled(!isHamburgerEnabled)
  }

  const isHamburgerDisabled = () => {
    setIsHamburgerEnabled(false)
  }

  return (
    <div>
        <BrowserRouter>
        <Provider>
          <NavigationBar displayToggle={changeHamburgerState} navigationBarProps={navigationBarConstants} />
          <div className="panel">
            <LeftPanel isDisplayHamburger={isHamburgerEnabled} />
            <RoutingPath functionToggleRight={isHamburgerDisabled} />
          </div>
          </Provider>
        </BrowserRouter>
    </div>
  );
}

export default App;
