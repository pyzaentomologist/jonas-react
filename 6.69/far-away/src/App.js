import React from "react";
import { Logo } from "./components/Logo";
import { Form } from "./components/Form";
import { PackingList } from "./components/PackingList";
import { Stats } from "./components/Stats";

export default function App() {
  return (
    <>
      <Logo />
      <Form />
      <PackingList />
      <Stats />
    </>
  );
}