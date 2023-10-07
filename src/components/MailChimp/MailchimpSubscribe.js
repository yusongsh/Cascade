// src/components/MailchimpSubscribe.js

import React from "react";
//import "../../styles/MailchimpSubscribe.css"; // Importing the stylesheet

const MailchimpSubscribe = () => {
  return (
    <div id="mc_embed_signup">
      <form
        action="https://gmail.us9.list-manage.com/subscribe/post?u=aa7902a8603f67ee59b1a8a60&amp;id=d0d86ac04e&amp;f_id=004814e1f0"
        method="post"
        id="mc-embedded-subscribe-form"
        name="mc-embedded-subscribe-form"
        className="validate"
      >
        <div id="mc_embed_signup_scroll">
          <h2>Subscribe</h2>
          <div>
            <span>*</span> indicates required
          </div>
          <div>
            <label for="mce-EMAIL">
              Email Address <span className="asterisk">*</span>
            </label>
            <input
              type="email"
              name="EMAIL"
              class="required email"
              id="mce-EMAIL"
              required=""
              value=""
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default MailchimpSubscribe;
