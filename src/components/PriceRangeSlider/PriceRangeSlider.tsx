import React, { useState, useEffect, useMemo } from "react";
import { Range } from "react-range";
import styles from "@/components/PriceRangeSlider/priceRangeSlider.module.scss";
import { RootState } from "@/lib/store";
import { useDispatch, useSelector } from "react-redux";
import { setPriceRange } from "@/lib/features/filters/priceRangeSlice";
import { serviceData } from "@/data/serviceData";

const PriceRangeSlider: React.FC = () => {
  const dispatch = useDispatch();
  const { min, max } = useSelector((state: RootState) => state.priceRange);

  const { sliderMin, sliderMax } = useMemo(() => {
    const prices = serviceData.map((service) => service.servicePrice);
    return {
      sliderMin: Math.min(...prices),
      sliderMax: Math.max(...prices),
    };
  }, []);

  const [values, setValues] = useState([min || sliderMin, max || sliderMax]);

  useEffect(() => {
    if (values[0] !== min || values[1] !== max) {
      dispatch(setPriceRange({ min: values[0], max: values[1] }));
    }
  }, [values, dispatch, min, max]);

  const renderTrack = ({
    props,
    children,
  }: {
    props: any;
    children: React.ReactNode;
  }) => (
    <div {...props} className={styles.track}>
      <div
        className={styles.trackHighlight}
        style={{
          left: `${((values[0] - sliderMin) / (sliderMax - sliderMin)) * 100}%`,
          width: `${((values[1] - values[0]) / (sliderMax - sliderMin)) * 100}%`,
        }}
      />
      {children}
    </div>
  );

  const renderThumb = ({ props, index }: { props: any; index: number }) => (
    <div {...props} className={styles.thumb}>
      <div className={styles.thumbLabel}>${values[index]}</div>
    </div>
  );

  return (
    <div className={styles.container}>
      <h3>Price Range</h3>
      <Range
        step={1}
        min={sliderMin}
        max={sliderMax}
        values={values}
        onChange={setValues}
        renderTrack={renderTrack}
        renderThumb={renderThumb}
      />
      <div className={styles.values}>
        <span>${Math.round(values[0])}</span> -{" "}
        <span>${Math.round(values[1])}</span>
      </div>
    </div>
  );
};

export default PriceRangeSlider;
