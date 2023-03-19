import React from "react";

interface CardProps {
  type: string;
  title: string;
  body?: string;
}

export default function Card({ type, title, body }: CardProps) {
  return (
    <>
      {type === "notes" ? (
        <div>
          <div className="w-4/5 m-auto my-5 text-black bg-white border-2 border-green-500 rounded-lg h-96 dark:bg-gray-700 dark:text-white">
            <div className="w-full p-4 text-2xl bg-green-500 h-1/5">
              <h1 className="overflow-hidden h-2/3">{title}</h1>
            </div>
            <div className="flex flex-col justify-between w-full p-4 h-4/5 items-left">
              <div className="w-full h-full overflow-hidden">
                <h2>{body}</h2>
              </div>
              <button className="w-24 p-2 text-xs transition-all duration-100 ease-in-out bg-gray-400 rounded-xl hover:bg-gray-500">
                REMOVE
              </button>
            </div>
          </div>
        </div>
      ) : (
        <>
          <div className="w-4/5 h-24 m-auto my-5 text-black bg-white border-2 border-green-500 rounded-lg dark:text-white dark:bg-transparent">
            <div className="flex items-center p-2 h-1/2 justify-content">
              <h1 className="overflow-hidden h-2/3">{title}</h1>
            </div>
            <div className="flex items-center justify-around p-1 h-1/2">
              <button className="w-24 p-2 text-xs transition-all duration-100 ease-in-out bg-gray-400 rounded-xl hover:bg-gray-500">
                REMOVE
              </button>
              {type === "sites" ? (
                <a target="_blank" href={body} rel="noopener noreferrer">
                  <button className="w-40 p-2 text-xs transition-all duration-100 ease-in-out bg-green-500 rounded-xl hover:bg-green-600">
                    Go to site
                  </button>
                </a>
              ) : null}
            </div>
          </div>
        </>
      )}
    </>
  );
}
