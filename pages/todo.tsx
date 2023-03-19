import { useState } from "react";
import Card from "@/components/card/card";

export default function ToDo() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "shopping",
    },
    {
      id: 2,
      title: "yoga",
    },
  ]);
  return (
    <>
      {todos.map(({ id, title }) => (
        <Card title={title} type="todo" key={id} />
      ))}
    </>
  );
}
