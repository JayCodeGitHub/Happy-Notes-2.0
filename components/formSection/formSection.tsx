import { Form, Field } from "react-final-form";

interface FormProps {
  items: any;
  setItems: any;
  type: string;
  isVisible: boolean;
  setIsVisible: any;
}

export default function FormSection({
  items,
  setItems,
  type,
  isVisible,
  setIsVisible,
}: FormProps) {
  return (
    <>
      {isVisible ? (
        <div className="fixed flex flex-col items-center justify-center w-3/4 p-4 transform -translate-x-1/2 -translate-y-1/2 bg-gray-200 border-2 border-green-500 rounded-lg md:w-2/5 top-1/3 md:top-1/2 left-1/2 dark:bg-gray-800">
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
              setIsVisible(false);
            }}
            render={({ handleSubmit }) => (
              <form
                onSubmit={handleSubmit}
                className="flex flex-col items-center justify-center w-full"
              >
                <Field name="title">
                  {({ input }) => (
                    <input
                      placeholder="title"
                      type="text"
                      className="w-full rounded-md my-2.5"
                      {...input}
                    />
                  )}
                </Field>
                {type === "note" ? (
                  <Field name="body">
                    {({ input }) => (
                      <textarea
                        placeholder="body"
                        type="text"
                        className="w-full h-72 rounded-md my-2.5"
                        {...input}
                      />
                    )}
                  </Field>
                ) : null}
                {type === "site" ? (
                  <Field name="body">
                    {({ input }) => (
                      <input
                        placeholder="URL"
                        type="text"
                        className="w-full rounded-md my-2.5"
                        {...input}
                      />
                    )}
                  </Field>
                ) : null}
                <div className="w-full flex justify-around items-center my-2.5">
                  <button
                    type="submit"
                    className="flex items-center justify-center h-8 text-black transition-all duration-100 ease-in-out border-2 border-green-700 rounded-lg w-36 md:w-20 dark:text-white hover:bg-green-600"
                  >
                    Submit
                  </button>
                  <button
                    type="reset"
                    onClick={() => setIsVisible(false)}
                    className="flex items-center justify-center h-8 text-black transition-all duration-100 ease-in-out border-2 border-green-700 rounded-lg w-36 md:w-20 dark:text-white hover:bg-green-600"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            )}
          />
        </div>
      ) : null}
    </>
  );
}
