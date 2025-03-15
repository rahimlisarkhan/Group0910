import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
// import Home from "./home";
// import About from "./about";
import { ROUTE } from "../constants/routes";
import Loading from "../components/Loading";
// import NotFound from "./not-found";
// import Contact from "./contact";
// import ContactDetail from "./contact/detail";
// import ChatMessageContent from "./Math";
// import Product from "./product";
// import ProductDetail from "./product/detail";

const Home = React.lazy(() => import("./home"));
const About = React.lazy(() => import("./about"));
const NotFound = React.lazy(() => import("./not-found"));
const Contact = React.lazy(() => import("./contact"));
const ContactDetail = React.lazy(() => import("./contact/detail"));
const ChatMessageContent = React.lazy(() => import("./Math"));
const Product = React.lazy(() => import("./product"));
const ProductDetail = React.lazy(() => import("./product/detail"));

function Router() {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route path={ROUTE.HOME} element={<Home />} />

        {/* // Add Nested router */}
        <Route path={ROUTE.ABOUT + "/*"} element={<About />} />

        {/* Contact */}
        <Route path={ROUTE.CONTACT} element={<Contact />} />
        <Route path={ROUTE.CONTACT_DETAIL} element={<ContactDetail />} />

        {/* Product */}
        <Route path={"/product"} element={<Product />} />
        <Route path="/product/:sukur_id" element={<ProductDetail />} />

        <Route
          path="/chat/:channel_id/:user_id/:room_id"
          element={<ChatMessageContent />}
        />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
}

export default Router;
