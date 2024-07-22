import React from "react";
import styles from "@/components/Histogram/histogram.module.scss";

interface HistogramProps {
  data: number[];
  height: number;
  min: number;
  max: number;
  sliderMin: number;
  sliderMax: number;
}

const Histogram: React.FC<HistogramProps> = ({
  data,
  height,
  min,
  max,
  sliderMin,
  sliderMax,
}) => {
  const bucketSize = (sliderMax - sliderMin) / data.length;

  return (
    <div className={styles.histogram} style={{ height: `${height}px` }}>
      {data.map((value, index) => {
        const bucketStart = sliderMin + index * bucketSize;
        const bucketEnd = bucketStart + bucketSize;
        const isInSelectedRange = bucketEnd >= min && bucketStart <= max;

        return (
          <div
            key={index}
            className={`${styles.bar} ${
              isInSelectedRange ? styles.inRange : styles.outOfRange
            }`}
            style={{
              height: `${value * 100}%`,
              width: `${100 / data.length}%`,
            }}
          />
        );
      })}
    </div>
  );
};

export default Histogram;
