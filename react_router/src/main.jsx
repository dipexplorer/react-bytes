import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./tailwind.css";
import App from "./App.jsx";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import Layouts from "./Layouts.jsx";
import Home from "./components/Home/Home.jsx";
import About from "./components/About/About.jsx";
import Contact from "./components/Contact/Contact.jsx";
import { User } from "./components/User/User.jsx";
import { Github, githubInfoLoaders } from "./components/Github/Github.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layouts />}>
      <Route path="" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/user/" element={<User />}>
        <Route path=":userId" element={<User />} />
      </Route>
      <Route loader={githubInfoLoaders} path="/github" element={<Github />} />
      {/* <Route path="/github" element={<Github />} /> */}
      <Route
        path="*"
        element={<div className="text-center text-red-400">Page not found</div>}
      />
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
