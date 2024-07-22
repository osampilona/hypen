import React, { useState, useEffect, useMemo } from "react";
import { Range, getTrackBackground } from "react-range";
import styles from "@/components/PriceRangeSlider/priceRangeSlider.module.scss";
import { RootState } from "@/lib/store";
import { useDispatch, useSelector } from "react-redux";
import { setPriceRange } from "@/lib/features/filters/priceRangeSlice";
import { serviceData } from "@/data/serviceData";
import Histogram from "@/components/Histogram/Histogram";

const PriceRangeSlider: React.FC = () => {
  const dispatch = useDispatch();
  const { min, max } = useSelector((state: RootState) => state.priceRange);

  const { sliderMin, sliderMax } = useMemo(() => {
    const prices = serviceData.map((service) => service.servicePrice);
    const min = Math.min(...prices);
    const max = Math.max(...prices);
    return { sliderMin: min, sliderMax: max };
  }, []);

  const [values, setValues] = useState([min || sliderMin, max || sliderMax]);
  const [histogram, setHistogram] = useState<number[]>([]);

  useEffect(() => {
    const calculateHistogram = () => {
      const prices = serviceData
        .map((service) => service.servicePrice)
        .filter((price) => price >= values[0] && price <= values[1]);
      const min = values[0];
      const max = values[1];
      const buckets = 50;
      const bucketSize = (max - min) / buckets;
      const histogramData = new Array(buckets).fill(0);

      prices.forEach((price) => {
        const index = Math.min(
          Math.floor((price - min) / bucketSize),
          buckets - 1,
        );
        histogramData[index]++;
      });

      const maxCount = Math.max(...histogramData);
      const normalizedHistogram = histogramData.map(
        (count) => count / maxCount,
      );

      setHistogram(normalizedHistogram);
    };

    calculateHistogram();
  }, [values]);

  useEffect(() => {
    if (values[0] !== min || values[1] !== max) {
      dispatch(setPriceRange({ min: values[0], max: values[1] }));
    }
  }, [values, dispatch, min, max]);

  return (
    <div className={styles.container}>
      <h3>Price Range</h3>
      <Histogram
        data={histogram}
        height={50} // Increased height for better visibility
      />
      <Range
        values={values}
        step={1}
        min={sliderMin}
        max={sliderMax}
        onChange={setValues}
        renderTrack={({ props, children }) => (
          <div
            {...props}
            className={styles.track}
            style={{
              ...props.style,
              background: getTrackBackground({
                values,
                colors: ["#ccc", "#4caf50", "#ccc"],
                min: sliderMin,
                max: sliderMax,
              }),
            }}
          >
            {children}
          </div>
        )}
        renderThumb={({ props }) => <div {...props} className={styles.thumb} />}
      />
      <div className={styles.values}>
        <div className={styles.valueBox}>
          <span>Minimum</span>
          <span>€ {Math.round(values[0])}</span>
        </div>
        <div className={styles.valueBox}>
          <span>Maximum</span>
          <span>
            €{" "}
            {values[1] === sliderMax
              ? `${Math.round(values[1])}+`
              : Math.round(values[1])}
          </span>
        </div>
      </div>
    </div>
  );
};

export default PriceRangeSlider;
