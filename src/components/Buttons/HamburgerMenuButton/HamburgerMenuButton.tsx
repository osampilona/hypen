import hamburgerMenuButton from "@/components/Buttons/HamburgerMenuButton/hamburgerMenuButton.module.scss";

interface HamburgerMenuButtonProps {
  isOpen: boolean;
  onClick: () => void;
}

const HamburgerMenuButton: React.FC<HamburgerMenuButtonProps> = ({
  isOpen,
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      className={`${hamburgerMenuButton.hamburger} ${isOpen ? hamburgerMenuButton.open : ""}`}
      aria-label="Toggle menu"
    >
      <div className={hamburgerMenuButton.lines}>
        <div />
        <div />
        <div />
      </div>
    </button>
  );
};

export default HamburgerMenuButton;
