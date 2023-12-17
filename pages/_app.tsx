import "@/styles/globals.css";
import "../styles/index.module.css";
import type { AppProps } from "next/app";

import "primereact/resources/themes/lara-light-teal/theme.css";
import "primeicons/primeicons.css";

import "@mantine/core/styles.css";
import '@mantine/notifications/styles.css';
import { MantineProvider, createTheme } from "@mantine/core";
import { Notifications } from "@mantine/notifications";

import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Loginpage from "./loginpage";
import Home from "./home";
import Search from "./search";
import Patient from "./patient";
import Ndxform from "./Form/ndx";

import { PrimeReactProvider, PrimeReactContext } from "primereact/api";


export default function App({ Component, pageProps }: AppProps) {
  
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Loginpage/>
    },{
      path: "Home",
      element: <Home/>
    },{
      path: "Search",
      element: <Search/>
    },{
      path: "Patient",
      element: <Patient/>
    },{
      path: "Ndxform",
      element: <Ndxform/>
    },

  ]);
  
  return (
    <MantineProvider>
      <Notifications />
      <RouterProvider router={router}/>
    </MantineProvider>
  );
}
