import Slider from "react-slick";

const BrandsSliderOne = ({ data, rtl }) => {
  const settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    autoplay: true,
    autoplaySpeed: 0,
    speed: 10000,
    cssEase: "linear",
    pauseOnHover: false,
    adaptiveHeight: false,
    rtl: rtl,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };
  return (
    <div className="zubuz-brand-slider">
      <Slider {...settings}>
        {data?.map((item, index) => (
          <div key={index} className="zubuz-brand-item">
            <div className="zubuz-brand-item-wrapper">
              <img src={item} alt="slider image" />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default BrandsSliderOne;
