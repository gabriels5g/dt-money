import { Slot } from "@radix-ui/react-slot";
import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean;
}

export function Button(props: ButtonProps) {
  const Component = props.asChild ? Slot : "button";

  return <Component {...props} />;
}
