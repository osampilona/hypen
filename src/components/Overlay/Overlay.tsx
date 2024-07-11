import React, { useEffect, useState } from "react";
import overlay from "@/components/Overlay/overlay.module.scss";

interface OverlayProps {
  show: boolean;
  onClose: () => void;
  children: React.ReactNode;
  className?: string;
}

const Overlay: React.FC<OverlayProps> = ({
  show,
  onClose,
  children,
  className,
}) => {
  const [isVisible, setIsVisible] = useState(show);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (show) {
      setIsVisible(true);
      setIsAnimating(true);
    } else if (!show && isVisible) {
      setIsAnimating(false);
      setTimeout(() => {
        setIsVisible(false);
      }, 500); // Match the duration of the slideOut animation
    }
  }, [show, isVisible]);

  const handleClose = () => {
    setIsAnimating(false);
    setTimeout(() => {
      onClose();
    }, 500); // Match the duration of the slideOut animation
  };

  return (
    (isVisible || isAnimating) && (
      <div
        className={`${overlay.container} ${className} ${
          isAnimating ? overlay.slideIn : overlay.slideOut
        } ${isVisible ? "visible" : ""}`}
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
