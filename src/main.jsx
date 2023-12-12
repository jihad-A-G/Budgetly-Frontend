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
// import Test from './test.jsx'
import Income from './components/income.jsx'
import Dashboard from './dashboard/dashboard.jsx'
import Expense from './components/expense.jsx'

import store,{setUserCredentials,persistor} from './redux.js';
import { PersistGate } from 'redux-persist/integration/react'; 
import { Provider } from 'react-redux';
import socket from '../socket-io.js';
import { toast } from 'react-toastify';
import Expense from './components/expense.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    redirect:'dashboard',
    element: <App />,
    children: [
      {
        path: "dashboard",
        index: true,
        element: <Dashboard />,
        loader: async () => {
          try {
            const data = await axios.get(
              "http://localhost:5000/api/user/dashboard",
              {
                headers: {
                  authorization: `Bearer: ${localStorage.getItem("token")}`,
                },
              }
            );
            if (data.status === 403) {
              return redirect("/login");
            }

            return data.data;
          } catch (err) {
            console.log(err);
            return redirect("/login");
          }
        },
      },
      {
        path:'incomes',
        element:<Income/>
      },
      {
        path:'expenses',
        element:<Expense/>
      },
      
      {
        path: "category",
        element: <CategoryPage />,
        loader: async () => {
          try {
            const response = await fetch("http://localhost:5000/api/category", {
              headers: {
                authorization: `Bearer: ${localStorage.getItem("token")}`,
              },
            });
            console.log(response);
            return response;
          } catch (error) {
            console.error("Error fetching categories:", error);
          }
        },
        action: async ({ request }) => {
          const formData = await request.formData();
          const data = Object.fromEntries(formData);
          try {
            const response = await axios.post(
              "http://localhost:5000/api/category",
              {
                ...data,
              }
            );
            if (response.status == 200) {
              return redirect("/category");
            } else {
              return redirect("/login");
            }
          } catch (err) {
            console.log(err);
            return redirect("/login");
            category;
          }
        },
      },
      {
        path: "category/edit/:id",
        element: <CategoryPage />,
        action: async ({ request, params }) => {
          const formData = await request.formData();
          const data = Object.fromEntries(formData);
          console.log(data);
          const response = await axios.patch(
            `http://localhost:5000/api/category/${params.id}`,
            { ...data, userId: 6 },
            {
              headers: {
                authorization: `Bearer: ${localStorage.getItem("token")}`,
              },
            }
          );

          if (!response) {
            throw response;
          }
          return redirect("/category");
        },
      },
      {
        path: "category/destroy/:id",
        action: async ({ params }) => {
          const response = await axios.delete(
            `http://localhost:5000/api/category/${params.id}`,
            {
              headers: {
                authorization: `Bearer: ${localStorage.getItem("token")}`,
              },
            }
          );

          if (!response) {
            throw response;
          }
          return redirect("/category");
        },
      },
    ],
  },
  {
    path: "/income",
    element: <Income />,
  },
  {
    path: "/expense",
    element: <Expense />,
  },

  {
    path: "/login",
    element: <Login />,
    action: async ({ request }) => {
      const formData = await request.formData();
      const data = Object.fromEntries(formData);
      let response;
      try {
        response = await axios.post("http://localhost:5000/api/auth/login", {
          ...data,
        });
        if (response.status == 200) {
          socket.emit("joinAdminRoom", response.data.user);

          localStorage.setItem("token", response.data.token);

          store.dispatch(setUserCredentials(response.data.user));
          return redirect("/dashboard");
        }
        return redirect("/login");
      } catch (err) {
        console.log(err);

        toast.error("Invalid username or password!", {
          position: "top-left",
          autoClose: 4000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          theme: "light",
        });

        return redirect("/login");
      }
    },
  },
  {
    path: "/signup",
    element: <Signup />,
    action: async ({ request }) => {
      const formData = await request.formData();
      const data = Object.fromEntries(formData);

      const response = await axios.post(
        "http://localhost:5000/api/auth/signup",
        { ...data }
      );
      return redirect("/login");
    },
  },
  {
    path: "/user/edit/:id",
    action: async ({ params }) => {
      const userId = params.id;
      const response = await axios.put(
        `http://localhost:5000/api/user/${userId}`,
        { authorized: true },
        {
          headers: {
            authorization: `Bearer: ${localStorage.getItem("token")}`,
          },
        }
      );
      return redirect("/dashboard");
    },
  },
  {
    path: "/user/delete/:id",
    action: async ({ params }) => {
      const userId = params.id;
      const response = await axios.delete(
        `http://localhost:5000/api/user/${userId}`,
        {
          headers: {
            authorization: `Bearer: ${localStorage.getItem("token")}`,
          },
        }
      );
      return redirect("/dashboard");
    },
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <RouterProvider router={router} />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
