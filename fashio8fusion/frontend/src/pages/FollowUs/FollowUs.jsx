import React from "react";
import { Link } from "react-router-dom";
import styles from "./Followus.module.css";
function FollowUs() {
  return (
    <div className={styles["follow-us-container"]}>
      <h2>Follow Us on Our Fashion Journey</h2>
      <p>
        Welcome to our fashion paradise! While we may not have social media
        accounts to follow, we're thrilled to have you with us on this exciting
        journey. Our webshop is all about bringing the latest trends and styles
        right to your fingertips. Here's what you can expect as you follow
        along:
      </p>

      <h3 className={styles["subheading"]}>Stay Ahead of the Fashion Curve</h3>
      <p>
        Our team is constantly on the lookout for the latest fashion trends and
        designs. By following us, you'll always be one step ahead in the fashion
        game. Whether it's the hottest streetwear, elegant formal wear, or comfy
        loungewear, we've got you covered.
      </p>

      <h3 className={styles["subheading"]}>Exclusive Deals and Discounts</h3>
      <p>
        Being a part of our online fashion community has its perks. We
        frequently offer exclusive discounts and special promotions to our loyal
        customers. By following us, you'll be the first to know about these
        exciting opportunities to save on your favorite styles.
      </p>

      <h3 className={styles["subheading"]}>Style Inspiration</h3>
      <p>
        Looking for inspiration for your next outfit? We've got you! Our blog
        and fashion tips section are here to help you put together stunning
        looks. Whether it's the perfect outfit for a night out or ideas for a
        cozy day at home, we'll provide you with the inspiration you need.
      </p>

      <h3 className={styles["subheading"]}>Customer-Centric Approach</h3>
      <p>
        Your satisfaction is our top priority. We're here to assist you with any
        questions or concerns you may have. As you follow us, you'll get to know
        our commitment to excellent customer service and our passion for
        fashion.
      </p>

      <h3 className={styles["subheading"]}>Join the Conversation</h3>
      <p>
        While we might not have official social media accounts, we encourage you
        to join the conversation on our website. Leave comments, reviews, and
        share your favorite products with your friends. Your feedback helps us
        improve and continue offering the best fashion experience.
      </p>

      <p>
        Thank you for following us on our fashion journey. We're excited to have
        you as a part of our webshop community. Your support means the world to
        us, and we can't wait to provide you with the latest and greatest in
        fashion.
      </p>

      <p className={styles["closing-remark"]}>Happy shopping!</p>
    </div>
  );
}

export default FollowUs;
