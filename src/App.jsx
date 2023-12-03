import { Outlet } from "react-router";
import NavBar from "./components/navBar";
import SideBar from "./components/sideBar";
const App = () =>{
    return (

        <>
        <section className="flex items-start justify-start w-screen h-screen">
        <SideBar/>
        
        <section className="w-full h-full flex flex-col items-center">
<NavBar/>
<Outlet/>

</section>
        </section>
        
        </>
    );
}

export default App;