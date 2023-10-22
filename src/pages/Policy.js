import React from "react";
import Layout from "./../components/Layout/Layout";

const Policy = () => {
  return (
    <Layout title={"Privacy Policy"}>
      <div className="row contactus ">
        {/* <div className="col-md-6 ">
          <img
            src="/images/contactus.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div> */}
        <div className="col-md-4">
          <div>
            <h4>Information We Collect:</h4>
            <p>
              <strong>Personal Information:</strong> We may collect personal
              information such as your name, contact details, and address when
              you place an order, sign up for our newsletter, or create an
              account on our website.
            </p>
            <p>
              <strong>Transaction Information:</strong> When you make a
              purchase, we collect transaction details, including the products
              you ordered and payment information.
            </p>
            <p>
              <strong>Website Usage Data:</strong> We gather non-personal
              information like IP addresses, browser type, and device
              information to improve our website's functionality and your
              browsing experience.
            </p>
            <p>
              If you have any questions or concerns about our privacy policy,
              please contact us at{" "}
              <a href="mailto:contact@email.com">contact@email.com</a>.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Policy;
