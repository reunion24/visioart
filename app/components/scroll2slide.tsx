import React from "react";

type ScrollToSlideProps = {
  slideId: string;
  disableScroll: boolean;
  children: React.ReactNode;
};

const ScrollToSlide: React.FC<ScrollToSlideProps> = ({
  slideId,
  disableScroll,
  children,
}) => {
  const handleScrollToSlide = () => {
    if (disableScroll) {
      return;
    }

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
