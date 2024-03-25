"use client";

import { useState } from "react";

const Input = ({ error, label, type, ...input }) => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="grid relative text-base w-full ">
      {label ? (
        <label className=" font-medium" htmlFor={label}>
          {label}
        </label>
      ) : (
        <span className=" flex w-[2px] h-[1px] "></span>
      )}

      {type === "password" ? (
        <div
          className={` bg-white flex items-center w-full border  p-2 h-[40px] ${
            error ? "border-red-600 " : " border-[#828282]"
          }`}
        >
          <input
            type={showPassword ? "text" : type}
            className={`bg-white w-full rounded-none flex-1 focus:outline-none placeholder:text-black `}
            autoComplete="off"
            {...input}
          />
          <div
            onClick={() => setShowPassword(!showPassword)}
            className="flex items-center  gap-1"
          >
            {/* <Icon name={showPassword ? 'Eye' : 'EyeInvisible'} size={20} /> */}
          </div>
        </div>
      ) : (
        <input
          type={type}
          className={` bg-white w-full rounded-none focus:outline-none placeholder:text-black border p-2 h-[40px] ${
            error ? "border-red-600 " : " border-[#828282]"
          }`}
          {...input}
        />
      )}
      <div className=" flex relative">
        {error && (
          <span className="  top-1 text-[12px] text-red-600">{error}</span>
        )}
      </div>
    </div>
  );
};

export default Input;
