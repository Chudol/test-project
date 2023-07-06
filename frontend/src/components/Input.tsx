"use client";

interface InputProps {
  onChange: (value: string) => void;
  value: string;
}

const Input = ({ onChange, value }: InputProps) => {
  return (
    <input
      type="text"
      value={value}
      onChange={(ev) => onChange(ev.target.value)}
      className="w-72 p-2 rounded-lg text-black border-2 border-gray-300 focus:outline-none focus:border-blue-500"
    />
  );
};

export default Input;
