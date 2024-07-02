"use client";
import React from "react";
import { Menu } from "@/components/menu";
import { Navbar } from "@/components/navbar";
import withAuth from "@/services/auth/hoc";

const Analytics = () => {
  return (
    <>
      <p>hello world</p>
    </>
  );
};

export default withAuth(Analytics);
