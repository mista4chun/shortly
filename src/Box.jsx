function Box({ children, className }) {
  return (
    <div
      className={`relative w-full rounded-sm bg-white px-8 text-center md:w-1/3 md:text-left ${className}`}
    >
      {children}
    </div>
  );
}

export default Box;
