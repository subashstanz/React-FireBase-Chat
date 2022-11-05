import { useAuthData } from "../redux/selector/authSelector";

const Home = () => {
    const data = useAuthData()
    console.log('data',data)
  return <div>Home</div>;
};

export default Home;
