import React from "react";
import "./intro.css";
const delay = 2500;

function Intro() {
  const images = [
    {
      url: "/images/pexels-freestocksorg.png",
      text: "Shop for MORE with less on Lunnex",
    },
    { url: "/images/sale-intro.png", text: null },
    { url: "/images/comfort.png", text: "Shopping from the comfort of your home", overlay: true },
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
  }, [ index]);

  const ImageSliderWithText = (props) => {
    return (
      <div
        className=" row m-0 p-0 mt-30 slideshowSlider col-12 bg-wine br-24 overflow-hidden intro-card"
        // style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
      >
        <div className="col-7 col-md-6 position-relative p-0 m-0">
          <img src={props.url} height="100%"
           width="100%"
            alt="shop more" />
        </div>
        <div className="col-5 col-md-6 p-0 m-0">
          <h4 className="text-white mt-4 p-2 intro-text">{props.text}</h4>
        </div>
      </div>
    );
  };
  const ImageSliderWithOutText = (props) => {
    return (
      <div
        className=" row m-0 p-0 mt-30 slideshowSlider col-12 bg-wine br-24 overflow-hidden intro-card"
        // style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
      >
        {/* <img src={props.url} height="100%" width="100%" alt="shop more" />  */}

        <img
          src={props.url}
          height="100%"
          // width="100%"
          alt="shop more"
          className=" p-0 m-0 "
        />
      </div>
    );
  };
  const ImageSliderWithTextOverlay = (props) => {
    return (
      <div
        className=" row m-0 p-0 mt-30 slideshowSlider col-12 bg-wine br-24 overflow-hidden intro-card position-relative"
        // style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
      >
        {/* <img src={props.url} height="100%" width="100%" alt="shop more" />  */}

        <img
          src={props.url}
          height="100%"
          // width="100%"
          alt="shop more"
          className=" p-0 m-0 "
        />
  <div className="position-absolute intro-overlay-bg  m-auto text-white top-0 bottom-0"> <p className="   intro-overlay-text px-5 ">{props.text}</p>
    </div>
         </div>
    );
  };
  return (
    <div className="slideshow row justify-content-between gap-0 gap-md-4 text-center overflow-hidden ">
      <div
        className="col-12     position-relative  p-0 d-flex "
        style={{ transform: `translate3d( ${-index * 100}%,0, 0)` }}
      >
        {images.map(({ url, text ,overlay}, index) => {
          return !text ? (
            <ImageSliderWithOutText text={text} url={url} />
          ):  overlay ? (
            <ImageSliderWithTextOverlay text={text} url={url} />
          ): (
            <ImageSliderWithText text={text} url={url} />
          );
        })}


<div className="slideshowDots position-absolute m-auto d-none d-md-block">
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
 

      <div className="col-12 d-block d-md-none">
        {" "}
        <div className="slideshowDots   m-auto">
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
