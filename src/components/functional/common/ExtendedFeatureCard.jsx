const ExtendedFeatureCard = ({ title, desc, id, openedCard, ...rest }) => {
  return (
    <div
      className={`zubuz-accordion-item ${openedCard === id ? "open" : ""}`}
      {...rest}
    >
      <div className="zubuz-accordion-header">
        <h3>{title}</h3>
        <div className="zubuz-active-icon">
          <svg
            width="22"
            height="13"
            viewBox="0 0 22 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19.75 2.25L11 11L2.25 2.25"
              stroke="#111827"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </svg>
        </div>
      </div>
      <div className="zubuz-accordion-body">
        <p>{desc}</p>
      </div>
    </div>
  );
};

export default ExtendedFeatureCard;
