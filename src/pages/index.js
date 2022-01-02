import * as React from "react";
import "../styles/styles.scss";
import SEO from "../components/seo";

// Import Components
import Banner from "../components/banner";
import AboutBlurb from "../components/aboutBlurb";
import VideoSection from "../components/videoSection";
import Layout from "../components/layout";

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Monés" />
      <Banner />
      <AboutBlurb />
      <VideoSection />
    </Layout>
  );
};

export default IndexPage;
