import React from "react";

type MessageType = { message?: string };

const ErrorMessage = ({ message }: MessageType) => {
  return (
    <>
      <div className="fixed z-40 p-6 bg-red-600 rounded-md top-2 right-2">
        {message}
      </div>
    </>
  );
};

export default ErrorMessage;
