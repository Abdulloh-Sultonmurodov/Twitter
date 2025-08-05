const Input = ({ placeholder, type, name, value, onChange, classList }) => {
  return (
    <input
      className={`w-[450px] h-[70px] border-[1px] border-[#00000033] placeholder:text-[#00000099] placeholder:text-[18px] rounded-[6px] pl-[20px] ${classList}`}
      type={type}
      placeholder={placeholder}
      name={name}
      value={value}
      onChange={onChange}
      required
      autoComplete="off"
    />
  );
};

export default Input;
