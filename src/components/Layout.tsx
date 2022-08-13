import Footer from "./footer";
import Authentication from "./authentication";
import React from "react";
import {ReactChildren, ReactChild,ReactNode } from "react";

interface AuxProps {
    children: ReactNode | ReactChild | ReactChildren;
  }
export default function Layout({ children }: AuxProps) {
   
    return (
        <>
        <head>
        <title>GG Package App </title>
        <meta name="description" content="Alito next app" />
        <link rel="icon" href="/favicon.ico" />
        </head>
       <Authentication />
        { children }
       <Footer />
        </>
    );
}
