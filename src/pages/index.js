import * as React from "react";
import "../styles/styles.scss";

// Import Components
import Banner from "../components/banner";
import AboutBlurb from "../components/aboutBlurb";
import VideoSection from "../components/videoSection";
import Layout from "../components/layout";

const IndexPage = () => {
  return (
    <Layout>
      <Banner />
      <AboutBlurb />
      <VideoSection />
    </Layout>
  );
};

export default IndexPage;
