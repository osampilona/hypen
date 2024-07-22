import React from "react";
import styles from "./histogram.module.scss";

interface HistogramProps {
  data: number[];
  height: number;
}

const Histogram: React.FC<HistogramProps> = ({ data, height }) => {
  const maxCount = Math.max(...data);

  return (
    <div className={styles.histogramContainer}>
      {data.map((count, index) => (
        <div
          key={index}
          className={styles.histogramBar}
          style={{
            height: `${(count / maxCount) * height}px`,
            width: `${100 / data.length}%`,
          }}
        />
      ))}
    </div>
  );
};

export default Histogram;
