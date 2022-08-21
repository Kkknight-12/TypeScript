// @flow
import * as React from "react";

// ------------------------------------------------------------------------------------------

type Props = {};

export const EventComponents = (props: Props) => {
  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };

  const onDragStart = (event: React.DragEvent<HTMLDivElement>) => {
    console.log(event.clientX);
  };

  return (
    <div>
      <input type="text" onChange={handleOnChange} />
      <div className="" draggable onDragStart={onDragStart}>
        You can Drag..!
      </div>
      ;
    </div>
  );
};