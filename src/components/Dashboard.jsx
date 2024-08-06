import { useUserContext } from "../context/UserContext";

const Dashboard = () => {
  const [user, setUser] = useUserContext();

  return <div>DASHBOARD</div>
}

export default Dashboard;