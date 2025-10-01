import Slider from "react-slick";

const Slider02 = ({ data }) => {
  const settings = {
    rtl: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    autoplay: true,
    autoplaySpeed: 0,
    speed: 10000,
    cssEase: "linear",
    pauseOnHover: false,
    adaptiveHeight: false,
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
    <div className="zubuz-brand-slider3">
      <Slider {...settings}>
        {data?.map((item, index) => {
          return (
            <div key={index + 1} className="zubuz-brand-item">
              <img src={item} alt="brands image" />
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default Slider02;
