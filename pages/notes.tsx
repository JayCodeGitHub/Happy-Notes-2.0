import AddNewItem from "@/components/addNewItem/addNewItem";
import Card from "@/components/card/card";

export default function Notes() {
  return (
    <>
      <Card
        type="notes"
        title="Lorem Ipsum"
        body="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum debitis fugiat soluta neque rem consequatur vel perferendis. Numquam doloribus explicabo nisi error reiciendis neque aliquam voluptas laborum at, nulla magnam."
      />
      <AddNewItem />
    </>
  );
}
