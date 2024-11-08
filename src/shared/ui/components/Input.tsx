import React, {
  DetailedHTMLProps,
  InputHTMLAttributes,
} from "react";
import  IError  from "@/app/interfaces";

interface IInput
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  label?: React.ReactNode;
  error?: IError[];
  val?: string;
  setVal?: React.Dispatch<React.SetStateAction<string>>;
}

const Input = React.forwardRef<HTMLInputElement, IInput>(
  ({ label, error, val, setVal, ...props }, ref) => {
    const changeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (setVal) setVal(e.target.value);
    };
    return (
      <label className="w-full text-[16px] text-white font-[700]">
        {label}
        <input
          {...props}
          ref={ref}
          value={val}
          onInput={changeInput}
          className="bg-[#21262D] w-full mt-[12px] py-[16px] px-[18px] focus:outline-none placeholder:text-white/40 font-[400] text-[16px] rounded-[8px] shadow-[inset_5px_6px_31px_0_rgb(0,0,0,0.25)]"
        />
        {Boolean(error?.length) && 
          error?.map((err) => <p key={err.id} className="text-[#dc2626] mt-[10px] font-[400]">- {err.message}</p>)
        }
      </label>
    );
  }
);

export default Input;
