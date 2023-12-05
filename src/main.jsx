import React from "react";
import ReactDOM from "react-dom/client";
import axios from "axios";
import "./index.css";
import {
  createBrowserRouter,
  RouterProvider,
  redirect,
} from "react-router-dom";
import Login from "./Auth/login.jsx";
import Signup from "./Auth/signup.jsx";
import CategoryPage from "../categoryPage.jsx";
import App from "./App.jsx";
// import Dashboard from './dashboard/dashboard.jsx'
import Test from "./test.jsx";
// import TransactionCard from './dashboard/transactionCard.jsx'
// import TransactionChart from './dashboard/transactionChart.jsx'
import Income from "./components/income.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "dashboard",
        index: true,
        element: <Test />,
        // loader:async ()=>{
        //   const data = await axios.get('http://localhost:5000/api/user/');
        //   console.log(data);
        //   return data.users;
        // },
      },
      {
        path: "/category",
        element: <CategoryPage />,
        action: async ({ request }) => {
          const formData = await request.formData();
          const data = Object.fromEntries(formData);
          try {
            await axios.post("http://localhost:5000/api/category", {
              ...data,
              userId: 3,
            });
            return redirect("/category");
            // if (response.status == 200) {
            //   localStorage.setItem("token", response.data.token);
            //   return redirect("/dashboard");
            // } else {
            //   return redirect("/login");
            // }
          } catch (err) {
            console.log(err);
            return redirect("/category");
          }
        },
      },
      {
        path:'category/:id',
        element:<CategoryPage/>,
        loader:async ({params}) =>{
          const response = await axios.get(`http://localhost:5000/api/category/${params.id}`);
          return response.data;
          
        },
        action:async ({request,params}) =>{
          const formData= await request.formData();
          const data = Object.fromEntries(formData);
          console.log(data);
          const response= await axios.patch(`http://localhost:5000/api/category/${params.id}`,{...data});

          if(!response){
            throw response;
          }
          return redirect("/dashboard");
        }
      }  


    /*
     {
          path:'News/:id/edit',
          element:<AdminForm/>,
          loader:async ({params}) =>{
            const response = await axios.get(`https://tpll-31oj.onrender.com/api/article/${params.id}`);
            return response.data;
          },
          action:async ({request,params}) =>{
            const formData= await request.formData();
            const data = Object.fromEntries(formData);
            console.log(data);
            const response= await axios.patch(`https://tpll-31oj.onrender.com/api/article/${params.id}`,{...data},{ headers: {
              'Content-Type': 'multipart/form-data',
            },});

            if(!response){
              throw response;
            }
            return redirect("admin/dashboard/News");
          }
        }  
    */
    ],
  },
  {
    path: "/incomes",
    element: <Income />,
  },
  {
    path: "/login",
    element: <Login />,
    action: async ({ request }) => {
      const formData = await request.formData();
      const data = Object.fromEntries(formData);
      try {
        const response = await axios.post(
          "http://localhost:5000/api/auth/login",
          { ...data }
        );
        if (response.status == 200) {
          localStorage.setItem("token", response.data.token);
          return redirect("/dashboard");
        } else {
          return redirect("/login");
        }
      } catch (err) {
        console.log(err);
        return redirect("/login");
      }
    },
  },
  {
    path: "/signup",
    element: <Signup />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
