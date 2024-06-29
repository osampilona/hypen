import overlay from "@/components/Overlay/overlay.module.scss";

interface OverlayProps {
  show: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Overlay: React.FC<OverlayProps> = ({ show, onClose, children }) => {
  return (
    show && (
      <div
        className={overlay.container}
        data-testid="overlay-container"
        onClick={onClose}
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
