import { createBrowserRouter } from "react-router";
import Root from "../Root/Root";
import Home from "../Pages/Home";
import MyProfile from "../Pages/MyProfile";
import Error from "../components/Error";
import SubscriptionDetails from "../components/SubscriptionDetails";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import AuthLayout from "../Root/AuthLayout";
import Privetroute from "../Provider/Privetroute";
import ForgetPassword from "../Pages/ForgetPassword";
import Spinner from "../components/Spinner";
import Blog from "../components/Blog";

export const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <Error></Error>,
    Component: Root,
    children: [
      {
        path: "/",
        Component: Home,
        hydrateFallbackElement: <Spinner></Spinner>,
        loader: () => fetch("/subscribeData.json"),
      },
      {
        path: "/my-profile",
        element: (
          <Privetroute>
            <MyProfile></MyProfile>
          </Privetroute>
        ),
      },
      {
        path: "/blog",
        element: (
          <Privetroute>
            <Blog></Blog>
          </Privetroute>
        ),
        hydrateFallbackElement: <Spinner></Spinner>,
        loader: () => fetch("/Blog.json"),
      },

      {
        path: "/auth",
        element: <AuthLayout></AuthLayout>,
        children: [
          {
            path: "/auth/login",
            element: <Login></Login>,
          },
          {
            path: "/auth/register",
            element: <Register></Register>,
          },
          {
            path: "/auth/forget-password",
            element: <ForgetPassword></ForgetPassword>,
          },
        ],
      },
      {
        path: "/Subscription/:id",
        element: (
          <Privetroute>
            <SubscriptionDetails></SubscriptionDetails>
          </Privetroute>
        ),
        loader: () => fetch("/subscribeData.json"),
        hydrateFallbackElement: <Spinner></Spinner>,
      },
    ],
  },
]);
