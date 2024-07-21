import React, { useState, useEffect } from "react";
import Rheostat, { PublicState } from "rheostat";
import "rheostat/initialize";
import "rheostat/css/rheostat.css";
import priceRangeSlider from "@/components/PriceRangeSlider/priceRangeSlider.module.scss";
import { RootState } from "@/lib/store";
import { useDispatch, useSelector } from "react-redux";
import { setPriceRange } from "@/lib/features/filters/priceRangeSlice";

const PriceRangeSlider = () => {
  const dispatch = useDispatch();
  const { min, max } = useSelector((state: RootState) => state.priceRange);

  // Initialize local state with Redux state values
  const [values, setValues] = useState<[number, number]>([min, max]);

  // Update local state when Redux state changes
  useEffect(() => {
    setValues([min, max]);
  }, [min, max]);

  // Dispatch action to update Redux state whenever local values change
  useEffect(() => {
    dispatch(setPriceRange({ min: values[0], max: values[1] }));
  }, [values, dispatch]);

  // Handle slider value changes
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
