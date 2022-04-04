import React, { useState } from "react";

const ReadMore = ({ children }) => {
  const text = children;
  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };
  return (
    <p className="text">
      {isReadMore ? text.slice(0, 400) : text}
      <span onClick={toggleReadMore} className="read-or-hide">
        {isReadMore ? "...read more" : " show less"}
      </span>
    </p>
  );
};

const About = () => {
  return (
    <div>
    <h1 className="container">Welcome to <span> Holly Donuts </span> bakery!</h1>
    <div className="about">
    <img className="homeimage" src="https://images.unsplash.com/photo-1643909018756-bac16e7a6c23?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDE1fHxkb251dHxlbnwwfDB8MHx8&auto=format&fit=crop&w=800&q=60" alt="background" />
    
    <p className="about one">
        <ReadMore>
        We are family owned and operated bakery and have been serving the entire area of Toronto and GTA since 2015. We handle off site-catering from your favorite reception location to your own home. No matter what your special occasion, we can help make it stress free. Holly Donuts uses quality ingredients, traditional family recipes and leaving out the preservatives for our competitors. We are determined to provide you with quality and delicious donuts you can taste. Our bakery determined to keep INNOVATING as well as maintaining the QUALITY of our current products, to fulfill the ever so popular trends in the bakery industry.
        </ReadMore>
    </p>
    </div>
    </div>
);
};

export default About;