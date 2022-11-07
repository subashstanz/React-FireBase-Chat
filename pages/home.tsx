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
import SideBar from "../components/sideBar";
import { useAuthData } from "../redux/selector/authSelector";
import { RootState } from "../redux/store";

const Home = () => {
  const count = useSelector((state: RootState) => state)
  console.log("data", count);
  return (
    <div className="flex  w-screen h-screen bg-gray-300"><SideBar /></div>
  );
};

export default Home;
