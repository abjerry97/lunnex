import React from "react";
import "./intro.css";
const delay = 2500;

function Intro() {
  const images = [
    {
      url: "/images/pexels-freestocksorg.png",
      text: "Shop for MORE with less on Lunnex",
    },
    { url: "/images/sale-intro.png", text: 11 },
    { url: "/images/sale-intro.png", text: 12 },
  ];

  const [index, setIndex] = React.useState(0);
  const timeoutRef = React.useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  React.useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index]);

  const ImageSliderWithText = (props) => {
    return (
      <div
        className="row mt-30 slideshowSlider"
        // style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
      >
        <div className="col-7 col-md-6 position-relative">
          <img src={props.url} height="150px" width="100%" alt="shop more" />
        </div>
        <div className="col-5 col-md-6">
          <h4 className="text-white">{props.text}</h4>
        </div>
      </div>
    );
  };
  const ImageSliderWithOutText = (props) => {
    return (
      <img
        src="/images/sale-intro.png"
        height="100%"
        width="100%"
        alt="shop more"
      />
    );
  };
  return (
    <div className="slideshow row justify-content-between gap-4 text-center ">
      {/* intro-card-grid */}
      <div
        className="col-12 bg-wine intro-card overflow-hidden  position-relative  p-0 "
        // style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
      >
        {images.map(({ url, text }, index) => {
          return <ImageSliderWithText text={text} url={url} />;
        })}

        <div className="slideshowDots position-absolute m-auto">
          {images.map((slideImage, idx) => (
            <div
              key={slideImage.id}
              className={`slideshowDot${index === idx ? " active" : ""}`}
              onClick={() => {
                setIndex(0);
              }}
            ></div>
          ))}
        </div>
      </div>
      <div className="col-12 d-none d-md-block col-md   intro-card overflow-hidden p-0">
        {" "}
        <img src="/images/sale-intro.png" alt="" height="100%" width="100%" />
      </div>
      <div className="col-12 d-none d-md-block col-md   intro-card  overflow-hidden p-0">
        <img src="/images/sale-intro.png" alt="" height="100%" width="100%" />
      </div>
    </div>
  );
}

export default Intro;
