
import { BrowserRouter } from "react-router-dom";
import { Myroutes } from "./routes/routes";
import Sidebar from "./components/Sidebar";



import Footer from "./components/Footer.jsx";


export default function App() {
  return (
    <>
      <BrowserRouter>
        <div className="flex w-full">
          <Sidebar></Sidebar>
          <Myroutes></Myroutes>
        </div>
        <Footer />
      </BrowserRouter>
    </>
  );
}
