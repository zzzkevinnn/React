// App.js

// import React Router
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";

// import layout
import LayoutRoot from "./layouts/LayoutRoot";

// import pages
import Home from "./pages/Home";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import React from "react";
import Testing from "./pages/Testing";


// router settings
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={ <LayoutRoot/> }>
      
      <Route index element={ <Home/> } />
      <Route path="about" element={ <About/> } />
      <Route path="testing" element={ <Testing/>} />
      <Route path="*" element={ <NotFound/> } />

    </Route>
  )
)



export default function App() {
  return (
    <RouterProvider router={router}/>
  )
}