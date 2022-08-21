// @flow
import { useState } from "react";
import * as React from "react";

type Props = {};

export const GuestList: React.FC = (props: Props) => {
  const [name, setname] = useState("");
  const [guests, setGuests] = useState<string[]>([]);

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setname(e.target.value);
  };

  const handleGuest = () => {
    setname("");
    setGuests([...guests, name]);
  };

  return (
    <div>
      <h3>Guest List</h3>
      <input value={name} onChange={handleOnChange} />
      <button onClick={handleGuest}>Add Guest</button>
      {guests &&
        guests.map((data, index) => <li key={index + data}>{data}</li>)}
    </div>
  );
};