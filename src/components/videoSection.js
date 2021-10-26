import React from "react";
import tapa from "../images/tapa.png";

const VideoSection = () => {
  return (
    <div className="video-section">
      <div className="container">
        <div className="video-player">
          <video
            poster={tapa}
            controls
            type="video/mp4"
            src="https://vod-progressive.akamaized.net/exp=1634777747~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F3684%2F22%2F568420344%2F2687161588.mp4~hmac=9684009c62759d61c8fb0926ee0a975017d4c21157aee5901d595da0e1d2a870/vimeo-prod-skyfire-std-us/01/3684/22/568420344/2687161588.mp4"
          />
        </div>
        <div className="video-content">
          <div className="title">
            <h3>Let’s Talk About It Now</h3>
          </div>
          <div className="content">
            <p>
              I’m so happy to present the 1st trailer of the film. “Let’s Talk
              About It Now” is a film that focuses on Mental health in the
              African community, and the black race as a whole, as this is a
              topic we tend to shy away from in our community . With this film,
              we hope to reduce/eradicate the stigma surrounding Mental Health
              In our community, making it a topic that is freely discussed as
              opposed to leaving it on the back burner.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoSection;
