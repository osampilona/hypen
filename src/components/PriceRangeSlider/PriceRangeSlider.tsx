import React, { useState } from "react";
import Rheostat, { PublicState } from "rheostat";
import "rheostat/initialize";
import "rheostat/css/rheostat.css";
import priceRangeSlider from "@/components/PriceRangeSlider/priceRangeSlider.module.scss";

interface PriceRangeSliderProps {
  // Add your component props here
}

const PriceRangeSlider = () => {
  const [values, setValues] = useState<[number, number]>([20, 80]);

  const handleChange = (publicState: PublicState) => {
    setValues([publicState.values[0], publicState.values[1]]);
  };

  return (
    <div className={priceRangeSlider.container}>
      <h3>Price Range</h3>
      <Rheostat
        min={0}
        max={100}
        values={values}
        onValuesUpdated={handleChange}
        snap
        className={priceRangeSlider.slider}
      />
      <div className={priceRangeSlider.values}>
        <span>${values[0]}</span> - <span>${values[1]}</span>
      </div>
    </div>
  );
};

export default PriceRangeSlider;
