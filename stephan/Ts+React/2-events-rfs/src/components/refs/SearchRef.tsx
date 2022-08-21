// @flow
import { useEffect, useRef, useState } from "react";
import * as React from "react";

const users = [
  { name: "Babban", age: 10 },
  { name: "Chaman", age: 5 },
  { name: "lallan", age: 2 },
];

type UserProps = {
  name: string;
  age: number;
};

export const SearchRef: React.FC = () => {
  const [name, setName] = useState("");
  const [user, setUser] = useState<UserProps | undefined>();
  const inputRef = useRef<HTMLInputElement | null>(null);

  const onClick = () => {
    const userFound = users.find(
      (data) => data.name.toLowerCase() === name.toLowerCase()
    );
    setUser(userFound);
  };

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, [inputRef]);

  return (
    <div>
      User Search
      <input
        ref={inputRef}
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button style={{ marginLeft: "10px" }} onClick={onClick}>
        Find User
      </button>
      <h1
        style={{ display: "block", marginTop: "100px" }}
      >{`Mil Gya ${user?.name}`}</h1>
    </div>
  );
};