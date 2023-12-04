import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Login from './Auth/login.jsx'
import Signup from './Auth/signup.jsx'
import CategoryPage from '../categoryPage.jsx'
import App from './App.jsx'
import Dashboard from './dashboard/dashboard.jsx'
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
        element:<Dashboard/>
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
