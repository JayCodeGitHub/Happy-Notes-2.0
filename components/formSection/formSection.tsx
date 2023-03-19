import React from "react";
import { Form, Field } from "react-final-form";

interface FormProps {
  items: any;
  setItems: any;
  type: string;
}

function FormSection({ items, setItems, type }: FormProps) {
  return (
    <Form
      onSubmit={(formObj) => {
        const newNote = {
          id: formObj.title,
          title: formObj.title,
          body: formObj.body,
        };
        setItems([...items, newNote]);
        formObj.title = "";
        formObj.body = "";
      }}
      render={({ handleSubmit }) => (
        <form onSubmit={handleSubmit}>
          <Field name="title">
            {({ input }) => (
              <input placeholder="title" type="text" {...input} />
            )}
          </Field>
          {type === "note" ? (
            <Field name="body">
              {({ input }) => (
                <input placeholder="body" type="text" {...input} />
              )}
            </Field>
          ) : null}
          {type === "site" ? (
            <Field name="body">
              {({ input }) => (
                <input placeholder="URL" type="text" {...input} />
              )}
            </Field>
          ) : null}
          <button type="submit">Submit</button>
        </form>
      )}
    />
  );
}

export default FormSection;
