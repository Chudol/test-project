type ButtonProps = {
  children: React.ReactNode;
  disabled?: boolean;
  onClick: () => void;
};

const Button = ({ children, disabled, onClick }: ButtonProps) => {
  return (
    <button
      className="middle none center rounded-lg bg-pink-500 py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
