function Buttons({ children, className, onClick }) {
  return (
    <button
      className={`rounded-full bg-cyan px-4 py-2 text-white hover:bg-cyanLight ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Buttons;
