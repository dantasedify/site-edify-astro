import { useState } from "react";
import ExtendedFeatureCard from "./common/ExtendedFeatureCard";

const ExtendedFeatureAccordion = ({ data }) => {
  const [openedCard, setOpenedCard] = useState(data[0]?.id);
  return (
    <div className="zubuz-accordion-wrap" id="zubuz-accordion">
      {data.map((card) => (
        <ExtendedFeatureCard
          key={card?.id}
          title={card?.data?.title}
          desc={card?.data?.desc}
          id={card?.id}
          openedCard={openedCard}
          onClick={() => setOpenedCard(card?.id)}
        />
      ))}
    </div>
  );
};

export default ExtendedFeatureAccordion;
