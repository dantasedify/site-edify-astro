import { useState } from "react";
import ExtendedFeatureCard from "./common/ExtendedFeatureCard";

const ExtendedFeatureAccordion = ({ data }) => {
  const [openedCard, setOpenedCard] = useState(data[0]?.id);
  return (
    <div className="zubuz-accordion-wrap row" id="zubuz-accordion">
      {data.map((card) => (
        <div className="col-12 col-md-6" key={card?.id}>
          <ExtendedFeatureCard
            title={card?.data?.title}
            desc={card?.data?.desc}
            id={card?.id}
            openedCard={openedCard}
            onClick={() => setOpenedCard(card?.id)}
          />
        </div>
      ))}
    </div>
  );
};

export default ExtendedFeatureAccordion;
