import Slider from "react-slick";

const TestimonialSlider02 = ({ data }) => {
  const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    autoplay: false,
  };
  return (
    <div className="zubuz-testimonial-slider">
      <Slider {...settings}>
        {data?.map((item, index) => {
          return (
            <div className="zubuz-testimonial-slider-item" key={index}>
              <div className="zubuz-testimonial-slider-data">
                <div className="zubuz-testimonial-slider-rating">
                  <ul>
                    {Array.from({ length: item?.data?.rating }).map(() => (
                      <li>
                        <img src="assets/images/v2/rating2.png" alt="" />
                      </li>
                    ))}
                  </ul>
                </div>
                <h3>"{item?.data?.title}"</h3>
                <p>{item?.data?.desc}</p>
              </div>
              <div className="zubuz-testimonial-slider-author">
                <div className="zubuz-testimonial-slider-author-thumb">
                  <img src={item?.data?.user?.img} alt="user image" />
                </div>
                <div className="zubuz-testimonial-slider-author-data">
                  <span>{item?.data?.user?.name}</span>
                  <p>{item?.data?.user?.occupation}</p>
                </div>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default TestimonialSlider02;
