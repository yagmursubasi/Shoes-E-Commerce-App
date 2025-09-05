import type { FC, ReactNode } from "react";

interface InputProps {
  label: string;
  name: string;
  type?: string;
  extra?: ReactNode;
  defaultValue?: string;
}

const Input: FC<InputProps> = ({
  label,
  name,
  type = "text",
  extra,
  defaultValue,
}) => {
  return (
    <div>
      {/* Label ve extra aynı satırda */}
      <div className="flex items-center justify-between">
        <label
          htmlFor={name}
          className="block text-sm font-medium text-gray-900"
        >
          {label}
        </label>
        {extra && <div>{extra}</div>}
      </div>

      {/* Input her zaman altta */}
      <div className="mt-2">
        <input
          id={name}
          name={name}
          type={type}
          defaultValue={defaultValue}
          required
          autoComplete={type === "password" ? "current-password" : "email"}
          className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 
                     outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 
                     focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm"
        />
      </div>
    </div>
  );
};

export default Input;
