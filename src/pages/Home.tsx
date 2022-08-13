import CssBaseline from "@mui/material/CssBaseline";

import { createTheme, ThemeProvider } from "@mui/material/styles";
import Findnpackage from "../components/findpackage";
import BrowserCollectionSection from "../components/browercollectionsection";
import Logosbrand from "../components/logosbrand";

import "bootstrap/dist/css/bootstrap.css";
import Footer from "../components/footer";
import Authentication from "../components/authentication";
import { useState } from "react";
const theme = createTheme();

export default function Home() {
 const [loginOpen, setLoginOpen] = useState(false)
 const [openPackage, setOpenPackage] = useState(false)
 const [profileOpen, setProfileOpen] = useState(false)
 
  return (
    <>
    <Authentication setLoginOpen={setLoginOpen} setOpenPackage={setOpenPackage}  setProfileOpen={setProfileOpen} /> 
      <CssBaseline />
      <Findnpackage loginOpen={loginOpen} setLoginOpen={setLoginOpen} openPackage={openPackage} setOpenPackage={setOpenPackage} profileOpen={profileOpen} setProfileOpen={setProfileOpen} />
      <BrowserCollectionSection />
      <Logosbrand />
      <Footer  /> 
    </>
  );
}
