import { useState } from "react";
import Card from "@/components/card/card";
import AddNewItem from "@/components/addNewItem/addNewItem";

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
      <AddNewItem items={todos} setItems={setTodos} type="todos" />
    </>
  );
}
