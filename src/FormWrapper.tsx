import { ReactNode } from "react";

type FormWrapperProps = {
  title: string;
  paragraphe: string;
  children: ReactNode;
};

export default function FormWrapper({
  title,
  paragraphe,
  children,
}: FormWrapperProps) {
  return (
    <>
      <h1 className="text-3xl font-bold mt-2 mb-4">{title}</h1>
      <p className="text-sm min-w-[376px] text-Neutral-CoolGray mt-2 mb-4">
        {paragraphe}
      </p>
      <div>{children}</div>
    </>
  );
}
