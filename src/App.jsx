
import { BrowserRouter } from "react-router-dom";
import { Myroutes } from "./routes/routes";
import Sidebar from "./components/Sidebar";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <div className="flex w-full">
          <Sidebar></Sidebar>
          <Myroutes></Myroutes>
        </div>
      </BrowserRouter>
    </>
  );
}
