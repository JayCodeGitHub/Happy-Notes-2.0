import { useState } from "react";
import { Form, Field } from "react-final-form";
import { useAuth } from "@/hooks/useAuth";
import { useLoading } from "@/hooks/useLoading";

export default function UnauthenticatedApp() {
  const [newUser, setNewUser] = useState(false);
  const newUserToggle = () => setNewUser(!newUser);
  const { logIn, register } = useAuth();
  const { isLoading } = useLoading();
  return (
    <div className="absolute flex items-center justify-center w-full min-h-screen bg-gradient-to-r from-gray-900 via-gray-700 to-green-900 auto-rows-min 2xl:grid-cols-4 xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
      {isLoading ? (
        <div
          className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite] text-white"
          role="status"
        >
          <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
            Loading...
          </span>
        </div>
      ) : (
        <>
          {newUser ? (
            <div className="border-2 border-green-500 rounded-lg w-72 h-96 bg-blue-50">
              <div className="flex flex-col items-center justify-around w-full h-full ">
                <Form
                  onSubmit={(formObj) => {
                    register(formObj.email, formObj.password);
                  }}
                  render={({ handleSubmit }) => (
                    <form
                      onSubmit={handleSubmit}
                      className="flex flex-col items-center justify-around w-full h-1/3"
                    >
                      <div className="flex flex-col items-center justify-center w-full">
                        <Field name="email">
                          {({ input }) => (
                            <input
                              placeholder="email"
                              type="text"
                              className="w-4/5 mb-2"
                              {...input}
                            />
                          )}
                        </Field>
                        <Field name="password">
                          {({ input }) => (
                            <input
                              placeholder="password"
                              type="password"
                              className="w-4/5 mb-2"
                              {...input}
                            />
                          )}
                        </Field>
                      </div>
                      <button
                        type="submit"
                        className="flex items-center justify-center h-8 text-white transition-all duration-100 ease-in-out bg-green-500 rounded-lg hover:bg-green-600 w-36 md:w-20"
                      >
                        Register
                      </button>
                    </form>
                  )}
                />
                <button
                  onClick={newUserToggle}
                  className="pt-4 transition-all duration-100 hover:text-gray-600 ease-in-ou"
                >
                  I want to Login
                </button>
              </div>
            </div>
          ) : (
            <div className="border-2 border-green-500 rounded-lg w-72 h-96 bg-blue-50">
              <div className="flex flex-col items-center justify-around w-full h-full ">
                <Form
                  onSubmit={(formObj) => {
                    logIn(formObj.email, formObj.password);
                  }}
                  render={({ handleSubmit }) => (
                    <form
                      onSubmit={handleSubmit}
                      className="flex flex-col items-center justify-around w-full h-1/3"
                    >
                      <div className="flex flex-col items-center justify-center w-full">
                        <Field name="email">
                          {({ input }) => (
                            <input
                              placeholder="email"
                              type="text"
                              className="w-4/5 mb-2"
                              {...input}
                            />
                          )}
                        </Field>
                        <Field name="password">
                          {({ input }) => (
                            <input
                              placeholder="password"
                              type="password"
                              className="w-4/5 mb-2"
                              {...input}
                            />
                          )}
                        </Field>
                      </div>
                      <button
                        type="submit"
                        className="flex items-center justify-center h-8 text-white transition-all duration-100 ease-in-out bg-green-500 rounded-lg hover:bg-green-600 w-36 md:w-20"
                      >
                        Login
                      </button>
                    </form>
                  )}
                />
                <button
                  onClick={newUserToggle}
                  className="pt-4 transition-all duration-100 ease-in-out hover:text-gray-600"
                >
                  I want to Register
                </button>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
}
