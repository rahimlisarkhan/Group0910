import React from "react";
import Layout from "../../components/Layout";

import { useNavigate } from "react-router-dom";

function Contact() {
  const navigate = useNavigate();

  return (
    <Layout>
      <h1>Contact</h1>

      <div>
        <div>
          <div>User 1</div>
          <button onClick={() => navigate("/contact/1")}>click</button>
        </div>
        <div>
          <div>User 2</div>
          <button onClick={() => navigate("/contact/2")}>click</button>
        </div>
        <div>
          <div>User 3</div>
          <button onClick={() => navigate("/contact/3")}>click</button>
        </div>
      </div>
    </Layout>
  );
}

export default Contact;
