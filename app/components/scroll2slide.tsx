import React from "react";

type ScrollToSlideProps = {
  slideId: string;
  children: React.ReactNode;
};

const ScrollToSlide: React.FC<ScrollToSlideProps> = ({
  slideId,
  children,
}) => {
  const handleScrollToSlide = () => {
    const slide = document.getElementById(slideId);
    if (slide) {
      slide.scrollIntoView({ behavior: "smooth" });
// const yOffset = -150; 
// const y = slide.getBoundingClientRect().top + window.pageYOffset + yOffset;

// window.scrollTo({top: y, behavior: 'smooth'});
    }
  };

  return (
    <div className="slide" onClick={handleScrollToSlide}>
      {children}
    </div>
  );
};

export default ScrollToSlide;
