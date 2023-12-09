import { ComponentProps } from "react";

type InputProps = {} & ComponentProps<"input">;

function Input({ ...props }: InputProps) {
  return <input {...props} />;
}

export default Input;
