import React from "react";

type SlideProps = {
  slideId: string;
  children: React.ReactNode;
};

const Slide: React.FC<SlideProps> = ({
  slideId,
  children,
}) => {
  const handleSlide = () => {
    const slide = document.getElementById(slideId);
    if (slide) {
      slide.scrollIntoView({ behavior: "smooth" });
      // const yOffset = -1500; 
      // const y = slide.getBoundingClientRect().top + window.pageYOffset + yOffset;

      // window.scrollTo({top: y, behavior: 'smooth'});
      // console.log(y, 'test')
    }
  };

  return (
    <div className="slide" onClick={handleSlide}>
      {children}
    </div>
  );
};

export default Slide;
