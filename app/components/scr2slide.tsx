import React from "react";

type ScrollToSlideProps = {
  slideId: string;
  children: React.ReactNode;
};

const ScrollToSlide: React.FC<ScrollToSlideProps> = ({ slideId, children }) => {
  const handleScrollToSlide = () => {
    const slide = document.getElementById(slideId);
    if (slide) {
      slide.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="slide" onClick={handleScrollToSlide}>
      {children}
    </div>
  );
};

export default ScrollToSlide;
