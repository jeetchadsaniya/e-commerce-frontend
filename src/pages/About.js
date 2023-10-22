import React from "react";
import Layout from "./../components/Layout/Layout";

const About = () => {
  return (
    <Layout title={"About Us"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/about.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <p className="text-justify mt-2">
            At Umiya Provision Store, we are more than just a convenience store
            – we are your trusted partner in meeting your everyday needs with
            convenience, quality, and care. Our journey began with a simple
            vision: to create a shopping destination where each visit is an
            experience worth cherishing.
            <br />
            <br />
            Customer satisfaction is at the heart of our philosophy. Our
            friendly and knowledgeable staff is always ready to assist you,
            guiding you through our aisles and answering any questions you may
            have.
            <br />
            <br />
            Thank you for choosing Umiya Provision Store as your shopping
            destination.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;
