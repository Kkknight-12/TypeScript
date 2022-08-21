import React from "react";

interface ChildProps {
  color: string;
  children: React.ReactNode;
}

interface FcChildProps {
  color: string;
  children: React.ReactNode;
}

// 1
export const SimpleChildren = ({ color, children }: ChildProps) => {
  return <div> {children}</div>;
};

// 2
/* from react 18 we need to specify the type of children prop to be declared
 below react component also */
export const FcWithChildren: React.FC<FcChildProps> = ({ color, children }) => {
  return (
    <>
      {color}
      {children}
    </>
  );
};