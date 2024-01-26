import React from "react";
import {createBrowserRouter,RouterProvider} from 'react-router-dom';
import Errorjs from "./ErrorHandling/Errorjs";
import DashBoard from "./components/Dashboard/DashBoard";
import Display from "./components/Display/Display";

const App=()=>{
  const routes=createBrowserRouter([
    {path:'/',element:<DashBoard />,errorElement:<Errorjs />},
    {path:'/post',element:<Display />,errorElement:<Errorjs />},
  ])
  return(
      <RouterProvider router={routes} />
  )
}

export default App;
