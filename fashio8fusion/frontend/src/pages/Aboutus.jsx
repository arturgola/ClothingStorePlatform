import React, { useState } from "react";
import { Link } from "react-router-dom";

function AboutUs() {
  // State to manage the visibility of additional text
  const [showText, setShowText] = useState(false);

  const toggleText = () => {
    setShowText(!showText);
  };

  return (
    <div>
      <h1>About Us</h1>
      <p>Welcome to our hilarious journey!</p>

      <button onClick={toggleText}>See more ! </button>

      {showText && (
        <p>
          Once upon a time, in the hallowed halls of a web development
          classroom, we embarked on a journey that was supposed to be nothing
          more than a simple student project. Armed with caffeine and a
          questionable sense of humor, we set out to create a website that would
          make our professor proud. Little did we know that our humble project
          would take on a life of its own. Like a snowball rolling down a hill,
          our tiny webshop project gained momentum. We didn't just learn to
          code; we learned to dream big. Fast forward to today, and here we are,
          the proud founders of a multi-million-dollar webshop! Yep, you read
          that right. We went from struggling students to the rulers of an
          e-commerce empire, all thanks to our love for web development and a
          few happy accidents along the way. Our journey has been a
          rollercoaster of coding mishaps, late-night pizza deliveries, and more
          "404 Not Found" errors than we care to admit. But through it all,
          we've laughed, learned, and grown together. Our secret? We don't take
          ourselves too seriously. After all, it's hard to be stuffy when you've
          debugged code while wearing a unicorn onesie or held a team meeting in
          a blanket fort. We believe that creativity thrives in an environment
          of fun and spontaneity, and that's the spirit we've infused into our
          webshop. We may be famous now (our moms are really proud!), but we're
          still the same quirky folks who started this adventure. We're on a
          mission to share laughter, amazing products, and great customer
          experiences with the world. So, whether you stumbled upon us by
          accident or heard about our wild journey through the grapevine, we're
          thrilled to have you here. Join us in celebrating the unexpected and
          embracing the joy of online shopping, one giggle at a time. Thanks for
          being a part of our story! Warmest laughs, Kiran, Pham, Artur & Elias
          {/* Additional content goes here */}
        </p>
      )}
    </div>
  );
}

export default AboutUs;
