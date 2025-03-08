import React from "react";
import Layout from "../../components/Layout";
import { Link, Navigate, Route, Routes } from "react-router-dom";
import Other from "./other";
import Company from "./company";

function About() {
  return (
    <Layout>
      <div style={{ border: "1px solid red", padding: "10px" }}>
        <h2>About</h2>

        <div>
          <div>
            <Link to="company">Company</Link>
            <br />
            <Link to="other">Other</Link>
          </div>

          <div style={{ border: "1px solid green", padding: "10px" }}>
            <Routes>
              <Route path="company" element={<Company />} />
              <Route path="other" element={<Other />} />
              <Route path="*" element={<Navigate replace to="company" />} />
            </Routes>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default About;
