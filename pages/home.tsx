import { useSelector } from "react-redux";
import {
  VictoryArea,
  VictoryAxis,
  VictoryChart,
  VictoryHistogram,
  VictoryLine,
  VictoryScatter,
  VictoryTooltip,
  VictoryVoronoiContainer,
  VictoryZoomContainer,
} from "victory";
import Message from "../components/message/message";
import SideBar from "../components/sideBar";
import { useAuthData } from "../redux/selector/authSelector";
import { RootState } from "../redux/store";

const Home = () => {
  
  return (
    <>
      <div className="flex  w-screen h-screen bg-gray-300">
        <SideBar />
        <Message />
      </div>
      
    </>
  );
};

export default Home;
