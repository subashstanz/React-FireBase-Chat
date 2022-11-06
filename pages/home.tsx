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

const Home = () => {
  const data = useAuthData();
  console.log("data", data);
  return (
    <div className="flex  w-screen h-screen bg-gray-300"><SideBar /></div>
  );
};

export default Home;
