import React from "react";
import Income from "./Components/income.jsx";
import Expense from "./Components/expense.jsx";


import NavBar from "./components/navBar";
import SideBar from "./components/sideBar";
const App = () =>{
    return (
        <>
        {/* <Income/> */}
        <Expense/>
        <NavBar/>
        <SideBar/>
        </>
    );
}

export default App;