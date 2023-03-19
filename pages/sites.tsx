import { useState } from "react";
import AddNewItem from "@/components/addNewItem/addNewItem";
import Card from "@/components/card/card";

export default function Sites() {
  const [sites, setSites] = useState([
    {
      id: 1,
      title: "https://www.facebook.com/",
    },
    {
      id: 2,
      title: "https://www.instagram.com/",
    },
  ]);
  return (
    <>
      {sites.map(({ id, title }) => (
        <Card title={title} type="site" key={id} />
      ))}
      <AddNewItem />
    </>
  );
}
