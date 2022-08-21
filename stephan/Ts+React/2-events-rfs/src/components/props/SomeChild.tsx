import React from "react";

interface ChildProps {
  color: string;
}

// many ways to apply interface

// 1
export const SomeChild = ({ color }: ChildProps) => {
  return (
    <div>
      {" "}
      <p>{color}</p>{" "}
    </div>
  );
};

// 2
export const SomeChildAsFc: React.FC<ChildProps> = ({ color }) => {
  return <>{color} </>;
};