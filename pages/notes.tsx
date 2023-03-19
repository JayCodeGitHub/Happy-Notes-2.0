import { useState } from "react";
import Card from "@/components/card/card";
import AddNewItem from "@/components/addNewItem/addNewItem";

export default function Notes() {
  const [notes, setNotes] = useState([
    {
      id: 1,
      title: "Lorem Ipsum",
      body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum debitis fugiat soluta neque rem consequatur vel perferendis. Numquam doloribus explicabo nisi error reiciendis neque aliquam voluptas laborum at, nulla magnam.",
    },
    {
      id: 1,
      title: "Lorem Ipsum",
      body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum debitis fugiat soluta neque rem consequatur vel perferendis. Numquam doloribus explicabo nisi error reiciendis neque aliquam voluptas laborum at, nulla magnam.",
    },
  ]);
  return (
    <>
      {notes.map(({ id, title, body }) => (
        <Card title={title} body={body} type="notes" key={id} />
      ))}
      <AddNewItem items={notes} setItems={setNotes} type="notes" />
    </>
  );
}
