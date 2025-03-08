import React from "react";
import { useParams } from "react-router-dom";
import Layout from "../../components/Layout";

function ContactDetail() {
  const { contact_id } = useParams();

  return (
    <Layout>
      <div>ContactDetail: {contact_id}</div>;
    </Layout>
  );
}

export default ContactDetail;
