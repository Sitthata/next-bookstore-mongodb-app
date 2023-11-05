import clsx from "clsx";
import React, { ButtonHTMLAttributes } from "react";

type ButtonProps = {
    onClick?: () => void,
    title: string
} & ButtonHTMLAttributes<HTMLButtonElement>

export default function Button({onClick, title, className}: ButtonProps) {
  return (
    <button className={clsx("text-bold py-[0.5rem] px-[0.75rem] rounded-lg font-semibold text-neutral-200", className)}>
      {title}
    </button>
  );
}
