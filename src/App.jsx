import { Outlet } from "react-router";
import NavBar from "./components/navBar";
import SideBar from "./components/sideBar";
import { ToastContainer,toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import './App.css'
const App = () =>{ 
    return (
      <>
        <ToastContainer
          position="top-left"
          autoClose={4000}
          limit={4}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
        <section className="flex items-start justify-start w-screen h-screen">
          <SideBar />

          <section className="w-full h-full flex flex-col">
            <NavBar />
            <Outlet />
          </section>
        </section>
      </>
    );
}

export default App;