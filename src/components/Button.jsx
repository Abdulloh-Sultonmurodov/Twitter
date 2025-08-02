const Button = ({ children, classList, type }) => {
  return (
    <button
      type={type}
      className={`w-[450px] h-[60px] bg-[#1DA1F2] rounded-[76px] text-[18px] text-white cursor-pointer ${classList}`}
    >
      {children}
    </button>
  );
};

export default Button;
