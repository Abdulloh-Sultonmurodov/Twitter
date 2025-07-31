import DashboardRoutes from "./routes/DashboardRoutes";
import LoginRoutes from "./routes/LoginRoutes";

const App = () => {
  const token = false;
  return token ? <DashboardRoutes /> : <LoginRoutes />;
};

export default App;
