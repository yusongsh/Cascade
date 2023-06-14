import { Link } from "gatsby";
import React, { useState } from "react";

const Form = () => {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <>
      <div className="w-full bg-main-bg-service h-48 mt-16 mb-8 flex items-center justify-center">
        <form
          name="email-signup"
          method="POST"
          data-netlify="true"
          onSubmit={(e) => {
            e.preventDefault();
            setShowPopup(true);
          }}
          className="w-full lg:w-1/2 flex"
        >
          <input type="hidden" name="form-name" value="email-signup" />
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            required
            className="flex-grow border-gray-400 text-sm pl-6 py-4 lg:pr-40 focus:outline-none focus:border-main-gold bg-second-grey text-main-grey placeholder-main-grey"
          />
          <button
            className="w-auto bg-main-gold text-white px-6 py-4 text-sm "
            type="submit"
          >
            Sign up
          </button>
        </form>

        {showPopup ? (
          <div className="fixed w-2/3 lg:w-1/2 h-full mx-auto top-0 flex items-center justify-center z-50">
            <div className="bg-main-grey border border-main-gold p-5 shadow-lg text-main-gold">
              <h2 className="">
                Thank you for signing up! Click the links below to start
                exploring our amazing services!
              </h2>
              <div className="text-main-gold uppercase flex flex-row gap-6 mt-6 mb-4 underline">
                <Link to="/services">
                  <h2>Services</h2>
                </Link>
                <Link to="/packages">
                  <h2>Packages</h2>
                </Link>
              </div>
              <button
                className=" mt-4 bg-main-gold hover:bg-main-gold/50 text-white font-title py-2 px-4"
                onClick={() => setShowPopup(false)}
              >
                Close
              </button>
            </div>
          </div>
        ) : null}
      </div>
    </>
  );
};
export default Form;
