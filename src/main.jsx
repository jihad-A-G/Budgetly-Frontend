import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Login from './Auth/login.jsx'
import Signup from './Auth/signup.jsx'
import CategoryPage from '../categoryPage.jsx'
import SideBar from './components/sideBar.jsx'
import NavBar from './components/navBar.jsx'
import Income from './components/income.jsx'
// import App from './App.jsx'
import TransactionCard from './dashboard/transactionCard.jsx'

const Dashboard = () => {
  return (
  <div>
  <SideBar/>
  <NavBar/>
  <Income/>
  </div>
  )
}

const router =createBrowserRouter([
  {
    path:'/',
    element:<App/>,
    children:[
      {
        path:'dashboard',
        index:true,
        element:<Dashboard/>
      },
      {
        path:'category',
        element:<CategoryPage/>
      },
    ]
  },
  {
    path:'/incomes',
    element: <Income/>
  },
  {
    path:'/login',
    element:<Login/>,
  },
  {
    path:'/signup',
    element:<Signup/>
  },
  
])

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
