import React from "react";
import { SomeChildAsFc } from "./components/props/SomeChild";
import { UserSearch } from "./components/TypeUnionsInState/UserSearch";
import SomeParent from "./pages/SomeParent";

// --------------------------------------------------------------------------

function App() {
  return (
    <div className="app">
      {/*<SomeParent />*/}
      <UserSearch />
    </div>
  );
}

export default App;