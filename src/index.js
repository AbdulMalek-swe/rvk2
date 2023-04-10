import React from "react";
import Size from './components/Size';
import Navbarnew from './components/Navbarnew';
import Footer from './components/Footer/Footer';
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,

} from "react-router-dom";
import NavbarD from "./components/NavbarD";
import Header from './components/Header';

import Contacticon from "./components/Contacticon";

import "./App.css";
import Home from "./routes/Home";
import News from "./routes/News/News";
import Humanitarian from "./routes/Humanitarian/Humanitarian";
import PEP from "./routes/PEP/PEP";
import PEK from "./routes/PEK/PEK";
import RVK from "./routes/RVK/RVK";
import PR1 from "./routes/PR/PR1";
import Volunteer from "./routes/Volunteer/Volunteer";
import Contact from "./routes/Contact/Contact";
import Career from "./routes/Career/Career";
import Gallery from "./routes/Gallery/Gallery";
import Login from "./routes/Login/Login";
import Donation from "./routes/Donation/Donation";
import Detail from "./routes/Donation/Detail";
import Signup from "./routes/Signup/Signup";
import EventsAll from "./routes/EventsAll/EventsAll";
import BookEvent from "./routes/BookEvent/BookEvent";
import NewsBlog from "./routes/NewsBlog/NewsBlog";
import Profile from "./routes/Profile/Profile";
import EditProfile from "./routes/EditProfile/EditProfile";
import Openimage from "./routes/Openimage/Openimage";
import ErrorPage from "./routes/ErrorPage";
import VerifyUser from './routes/VerifyUser/index.jsx';
import { ProtectedRoute } from "./components/ProtectedRoute";
import { AuthContextProvider } from "./contexts/AuthContext";
import ForgatePassword from "./routes/Login/ForgatePassword";
import First from "./routes/PEP/PEP";
import { useEffect } from "react";
import { Toaster } from "react-hot-toast";
import NewPassword from "./routes/Login/NewPassword";

const AppLayout = () => {

  return (
    <>
      <Size />
      <Outlet />
      <Contacticon />
      <Footer />
    </>
  );
};

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "news",
        element: <News />,
      },
      {
        path: "humanitarian",
        element: <Humanitarian />,
      },
      {
        path: "pep",
        element: <First />,
      },
      {
        path: "pek",
        element: <PEK />,
      },
      {
        path: "rvk",
        element: <RVK />,
      },
      {
        path: "pr",
        element: <PR1 />,
      },
      {
        path: "volunteer",
        element: <Volunteer />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "career",
        element: <Career />,
      },
      {
        path: "gallery",
        element: <Gallery />,
      },
      {
        path: "login",
        element: <Login />,
      },

      {
        path: "login/signup/login",
        element: <Login />,
      },
      {
        path: "forgatepassword",
        element: <ForgatePassword />
      },
      {
        path: "newpassword",
        element: < NewPassword />
      },
      {
        path: "donation",
        element: <Donation />,
      },
      {
        path: "detail",
        element: <Detail />,
      },
      {
        path: "signup",
        element: <Signup />,
      },
      {
        path: "login/signup",
        element: <Signup />,
      },
      {
        path: "eventsall",
        element: <EventsAll />,
      },
      {
        path: "event/:id/details",
        element: <ProtectedRoute><BookEvent /></ProtectedRoute>,
      },
      {
        path: "newsblog",
        element: <NewsBlog />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
      {
        path: "profile/editprofile",
        element: <EditProfile />,
      },
      {
        path: "openimage",
        element: <Openimage />,
      },
      {
        path: "verify-user",
        element: <VerifyUser />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <AuthContextProvider>
    <Toaster
      position="top-center"
      reverseOrder={false}
    />
    <RouterProvider router={router} />
  </AuthContextProvider>
);
