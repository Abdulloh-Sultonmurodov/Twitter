import { Route, Routes } from "react-router-dom";
import { RoutesList } from "../components";
import { Navbar, Sidebar } from "../modules";

const DashboardRoutes = () => {
  return (
    <>
      <div className="containers flex">
        <Navbar />
        <div className="w-[910px] relative h-[100vh] overflow-y-auto border-x-[1px] border-[#D8D8D8]">
          <Routes>
            {RoutesList.map((item) => (
              <Route key={item.id} path={item.path} element={item.element} />
            ))}
          </Routes>
        </div>
        <Sidebar />
      </div>
    </>
  );
};

export default DashboardRoutes;
