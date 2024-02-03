import { ComponentProps, forwardRef } from "react";

type InputProps = {} & ComponentProps<"input">;

const Input = forwardRef<HTMLInputElement, InputProps>(({ ...props }, ref) => {
  return <input ref={ref} {...props} />;
});

export default Input;
