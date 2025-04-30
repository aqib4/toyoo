import React from "react";
import { Helmet } from "react-helmet-async";

const PageHead = ({ title, metaDes }) => {
  return (
    <Helmet>
      <title>{title || "Tuyyoo - Property Listings & Management"}</title>
      <meta 
        name="description" 
        content={metaDes || "Tuyyoo is a smart property listing and management platform that connects property owners, tenants, and real estate agents. Easily list, manage, and rent properties with our intuitive dashboard."} 
      />
      <link rel="icon" href="/favicon.png" />
    </Helmet>
  );
};

export default PageHead;
