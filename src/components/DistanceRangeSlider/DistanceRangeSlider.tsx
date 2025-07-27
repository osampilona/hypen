import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/lib/store";
import { Range, getTrackBackground } from "react-range";
import { setValue } from "@/lib/features/filters/distanceRangeSlice";
import { serviceData } from "@/data/serviceData";
import styles from "@/components/DistanceRangeSlider/distanceRangeSlider.module.scss";

interface DistanceRangeSliderProps {
  categoryName: string;
}

const DistanceRangeSlider: React.FC<DistanceRangeSliderProps> = ({
  categoryName,
}) => {
  const dispatch = useDispatch();
  // Initialize slider value to 10 km
  const value =
    useSelector((state: RootState) => state.distanceRange.value) || 10;

  const handleChange = (values: number[]) => {
    dispatch(setValue(values[0])); // Dispatch the action to update the slider value
  };

  // Filter services based on the selected distance value
  const filteredServices = serviceData.filter((service) => {
    const serviceDistance = Number(
      service.serviceDistance.toString().replace(" km", ""),
    ); // Adjust for unit
    return serviceDistance <= value;
  });

  return (
    <div className={styles.container} data-testid="distanceRangeSlider">
      <h4 className={styles.categoryName}>{categoryName}</h4>
      <div className={styles.priceGroup}>
        <Range
          step={1}
          min={10} // Minimum slider value set to 10 km
          max={100}
          values={[value]}
          onChange={handleChange}
          renderTrack={({ props, children }) => (
            <div
              {...props}
              className={styles.track}
              style={{
                ...props.style,
                background: getTrackBackground({
                  values: [value],
                  colors: ["#7acc34", "var(--greyed-out-color)"], // Green from 0 to handle, grey elsewhere
                  min: 10, // Reflecting the minimum value
                  max: 100,
                }),
              }}
            >
              {children}
            </div>
          )}
          renderThumb={({ props }) => {
            const { key, ...restProps } = props;
            return <div key={key} {...restProps} className={styles.thumb} />;
          }}
        />
        <div className={styles.sliderLabels}>
          <span>10 km</span>
          <span>100 km</span>
        </div>
        <div className={styles.serviceList}>
          {filteredServices.length > 0 ? (
            <p>
              {filteredServices.length} service
              {filteredServices.length > 1 ? "s" : ""} found within {value} km.
            </p>
          ) : (
            <p>No services found within {value} km.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default DistanceRangeSlider;
