const Button = ({ type, className, children, onClick, disabled }) => (
  <button
    type={type}
    onClick={onClick}
    disabled={disabled}
    className={`relative flex items-center rounded-lg bg-secondary px-5 py-2 hover:bg-backgroundHover ${className} ${disabled ? "cursor-not-allowed opacity-50" : ""}`}
  >
    {children}
  </button>
);

export default Button;
