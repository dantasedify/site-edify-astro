import SlotCounter from "react-slot-counter";

const Counter = ({ data }) => {
  return (
    <div className="zubuz-counter-data primary-color">
      <h2 className="zubuz-counter-number">
        <span data-percentage={data.count} className="zubuz-counter">
          <SlotCounter
            value={data.count}
            animateOnVisible={{
              triggerOnce: false,
              rootMargin: "0px 0px -100px 0px",
            }}
          />
        </span>
        <em>{data.unit}</em>
      </h2>
      <p>{data.stat}</p>
    </div>
  );
};

export default Counter;
