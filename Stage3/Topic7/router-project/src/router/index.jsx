import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./home";
import About from "./about";
import { ROUTE } from "../constants/routes";
import NotFound from "./not-found";
import Contact from "./contact";
import ContactDetail from "./contact/detail";

function Router() {
  return (
    <Routes>
      <Route path={ROUTE.HOME} element={<Home />} />

      {/* // Add Nested router */}
      <Route path={ROUTE.ABOUT + "/*"} element={<About />} />

      {/* Contact */}
      <Route path={ROUTE.CONTACT} element={<Contact />} />
      <Route path={ROUTE.CONTACT_DETAIL} element={<ContactDetail />} />

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default Router;
