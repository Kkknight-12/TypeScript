import React from "react";
import { SomeChild, SomeChildAsFc } from "../components/props/SomeChild";
import {
  FcWithChildren,
  SimpleChildren,
} from "../components/props/SomeChildWithChidlren";
import { GuestList } from "../components/States/GuestList";

function SomeParent() {
  return (
    <div>
      {" "}
      <SomeChild color={"red"} />
      <SomeChildAsFc color={"blue"} />
      {/*  Children */}
      <SimpleChildren color={"red"}>asdasdads</SimpleChildren>
      <FcWithChildren color={"blue"}>asdasdasd</FcWithChildren>
      {/*  State */}
      <GuestList />
    </div>
  );
}

export default SomeParent;