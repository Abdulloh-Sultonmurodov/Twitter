import LoginRoutes from "./routes/LoginRoutes";
import DashboardRoutes from "./routes/DashboardRoutes";
import { useCookies } from "react-cookie";

const App = () => {
  const [cookies] = useCookies(["token"]);

  return cookies?.token ? <DashboardRoutes /> : <LoginRoutes />;
};

export default App;
