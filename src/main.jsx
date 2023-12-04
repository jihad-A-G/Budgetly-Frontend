import React from 'react'
import ReactDOM from 'react-dom/client'
import axios from 'axios'
import './index.css'
import { createBrowserRouter,RouterProvider,redirect } from 'react-router-dom'
import Login from './Auth/login.jsx'
import Signup from './Auth/signup.jsx'
import CategoryPage from '../categoryPage.jsx'
import App from './App.jsx'
// import Dashboard from './dashboard/dashboard.jsx'
import Test from './test.jsx'
// import TransactionCard from './dashboard/transactionCard.jsx'
// import TransactionChart from './dashboard/transactionChart.jsx'
// import Income from './components/income.jsx'

const router =createBrowserRouter([
  {
    path:'/',
    element:<App/>,
    children:[
      {
        path:'dashboard',
        index:true,
        element:<Test/>,
        loader:async ()=>{
          const data = await axios.get('http://localhost:5000/api/user/');
          console.log(data);
          return data.users;
        },
      },
      {
        path:'category',
        element:<CategoryPage/>
      },
    ]
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
