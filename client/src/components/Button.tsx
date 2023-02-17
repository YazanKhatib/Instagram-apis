interface ButtonProps {
  text: string;
  onClick?: () => void;
}

export const Button: React.FC<ButtonProps> = ({ text, onClick }) => {
  return (
    <button
      className="bg-secondary px-12 py-3 font-sen font-bold text-primary hover:bg-btnHover"
      onClick={onClick}
    >
      {text}
    </button>
  );
};
