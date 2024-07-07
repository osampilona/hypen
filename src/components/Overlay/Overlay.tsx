import React, { useEffect, useState } from "react";
import overlay from "@/components/Overlay/overlay.module.scss";

interface OverlayProps {
  show: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Overlay: React.FC<OverlayProps> = ({ show, onClose, children }) => {
  const [isVisible, setIsVisible] = useState(show);

  useEffect(() => {
    if (show) {
      setIsVisible(true);
    }
  }, [show]);

  const handleClose = () => {
    if (isVisible) {
      setIsVisible(false);
      setTimeout(() => {
        onClose();
      }, 500); // Match the duration of the slideOut animation
    }
  };

  return (
    (isVisible || show) && (
      <div
        className={`${overlay.container} ${
          show ? overlay.slideIn : overlay.slideOut
        }`}
        data-testid="overlay-container"
        onClick={handleClose}
      >
        <div
          className={overlay.content}
          data-testid="overlay-content"
          onClick={(e) => e.stopPropagation()}
        >
          {children}
        </div>
      </div>
    )
  );
};

export default Overlay;
