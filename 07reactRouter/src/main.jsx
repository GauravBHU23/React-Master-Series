import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import Layout from "./Layout.jsx";
import Home from "./componenets/Home/Home.jsx";
import About from "./componenets/About/About.jsx";
import Contact from "./componenets/Contact/Contact.jsx";
import User from "./componenets/User/User.jsx";
import Github, { githubInfoLoader } from "./componenets/Github/Github.jsx";

// const router = createBrowserRouter([
//   {
//     path : '/',
//     element: <Layout/>,
//     children:[
//       {
//         path: "home",
//         element: <Home/>
//       },
//       {
//         path: "about",
//         element: <About/>
//       },
//       {
//         path: "contact",
//         element: <Contact us/>
//       },
//       {
//         path : "github",
//         element : <Github/>
//       }

//     ]
//   }
// ])

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path="user/:userid" element={<User />} />
      <Route loader={githubInfoLoader} path="github" element={<Github />} />
    </Route>
  )
);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
