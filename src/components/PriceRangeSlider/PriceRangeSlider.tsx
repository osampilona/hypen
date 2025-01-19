import React, { useState, useEffect, useMemo } from "react";
import { Range, getTrackBackground } from "react-range";
import styles from "@/components/PriceRangeSlider/priceRangeSlider.module.scss";
import { RootState } from "@/lib/store";
import { useDispatch, useSelector } from "react-redux";
import {
  setPriceRange,
  selectPriceRange,
} from "@/lib/features/filters/priceRangeSlice";
import { serviceData } from "@/data/serviceData";
import Histogram from "@/components/Histogram/Histogram";

interface PriceRangeSliderProps {
  categoryName: string;
}

const PriceRangeSlider: React.FC<PriceRangeSliderProps> = ({
  categoryName,
}) => {
  const dispatch = useDispatch();
  const { min, max, currentMin, currentMax } = useSelector(selectPriceRange);

  const { sliderMin, sliderMax, histogram } = useMemo(() => {
    const prices = serviceData.map((service) => service.servicePrice);
    const min = Math.min(...prices);
    const max = Math.max(...prices);
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
    const normalizedHistogram = histogramData.map((count) => count / maxCount);

    return { sliderMin: min, sliderMax: max, histogram: normalizedHistogram };
  }, []);

  const [sliderValues, setSliderValues] = useState([
    Math.max(currentMin || sliderMin, sliderMin),
    Math.min(currentMax || sliderMax, sliderMax),
  ]);
  const [inputValues, setInputValues] = useState([
    currentMin !== undefined ? currentMin.toString() : "",
    currentMax !== undefined ? currentMax.toString() : "",
  ]);
  const [minValidationMessage, setMinValidationMessage] = useState("");
  const [maxValidationMessage, setMaxValidationMessage] = useState("");

  useEffect(() => {
    setSliderValues([
      Math.max(currentMin || sliderMin, sliderMin),
      Math.min(currentMax || sliderMax, sliderMax),
    ]);
    setInputValues([
      currentMin !== undefined ? currentMin.toString() : "",
      currentMax !== undefined ? currentMax.toString() : "",
    ]);
  }, [currentMin, currentMax, sliderMin, sliderMax]);

  useEffect(() => {
    dispatch(
      setPriceRange({
        min: Number(inputValues[0]),
        max: Number(inputValues[1]),
      }),
    );
  }, [inputValues, dispatch]);

  const handleSliderChange = (newValues: number[]) => {
    setSliderValues(newValues);
    setInputValues(newValues.map(String));
    setMinValidationMessage("");
    setMaxValidationMessage("");
  };

  const handleInputChange = (index: number, value: string) => {
    const numericValue = value.replace(/[^0-9.]/g, "");

    const newInputValues = [...inputValues];
    newInputValues[index] = numericValue;
    setInputValues(newInputValues);

    const numValue =
      numericValue === ""
        ? index === 0
          ? sliderMin
          : sliderMax
        : Number(numericValue);
    if (!isNaN(numValue)) {
      const newSliderValues = [...sliderValues];
      newSliderValues[index] = Math.max(
        Math.min(numValue, sliderMax),
        sliderMin,
      );
      setSliderValues(newSliderValues);

      // Validation
      if (index === 0) {
        if (numValue < sliderMin) {
          setMinValidationMessage(`Minimum value is €${sliderMin}`);
        } else {
          setMinValidationMessage("");
        }
      } else {
        if (numValue > sliderMax) {
          setMaxValidationMessage(`Maximum value is €${sliderMax}`);
        } else {
          setMaxValidationMessage("");
        }
      }
    }
  };

  return (
    <div className={styles.container}>
      <h4 className={styles.categoryName}>{categoryName}</h4>
      <div className={styles.priceGroup}>
        <Histogram
          data={histogram}
          height={50}
          min={sliderValues[0]}
          max={sliderValues[1]}
          sliderMin={sliderMin}
          sliderMax={sliderMax}
        />
        <Range
          values={sliderValues}
          step={1}
          min={sliderMin}
          max={sliderMax}
          onChange={handleSliderChange}
          renderTrack={({ props, children }) => (
            <div
              {...props}
              className={styles.track}
              style={{
                ...props.style,
                background: getTrackBackground({
                  values: sliderValues,
                  colors: [
                    "var(--greyed-out-color)",
                    "#7acc34",
                    "var(--greyed-out-color)",
                  ],
                  min: sliderMin,
                  max: sliderMax,
                }),
              }}
            >
              {children}
            </div>
          )}
          renderThumb={({ props }) => (
            <div {...props} className={styles.thumb} />
          )}
        />
        <div className={styles.values}>
          <div className={styles.infoBox}>
            <div className={styles.valueBox}>
              <span>Minimum</span>
              <div className={styles.inputWrapper}>
                <span className={styles.currencySymbol}>€</span>
                <input
                  type="text"
                  value={inputValues[0]}
                  onChange={(e) => handleInputChange(0, e.target.value)}
                  className={styles.input}
                />
              </div>
            </div>
            {minValidationMessage && (
              <span className={styles.validationMessage}>
                <small>{minValidationMessage}</small>
              </span>
            )}
          </div>
          <div className={styles.dash}>-</div>
          <div className={styles.infoBox}>
            <div className={styles.valueBox}>
              <span>Maximum</span>
              <div className={styles.inputWrapper}>
                <span className={styles.currencySymbol}>€</span>
                <input
                  type="text"
                  value={inputValues[1]}
                  onChange={(e) => handleInputChange(1, e.target.value)}
                  className={styles.input}
                />
              </div>
            </div>
            {maxValidationMessage && (
              <span className={styles.validationMessage}>
                <small>{maxValidationMessage}</small>
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PriceRangeSlider;
