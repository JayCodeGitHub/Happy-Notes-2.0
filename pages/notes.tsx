import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { State } from "@/state";
import { actionCreators } from "@/state";
import Card from "@/components/card/card";
import AddNewItem from "@/components/addNewItem/addNewItem";

export default function Notes() {
  const dispatch = useDispatch();
  const state = useSelector((state: State) => state);
  const { additem } = bindActionCreators(actionCreators, dispatch);
  return (
    <>
      {state.notes.map(({ title, body, _id, itemType }) => (
        <Card title={title} body={body} type={itemType} _id={_id} key={title} />
      ))}
      <AddNewItem setItems={additem} type="notes" />
    </>
  );
}
