import React from "react";

const Column4 = (props) => {
  return (
    <div className="flex flex-col gap-3">
      <h1 className="text-white font-medium text-lg sm:text-xl">Support</h1>
      <ul className="list-none flex flex-col gap-2 text-gray-300 text-sm sm:text-base">
        {props.support.map(function (elems, indx) {
          return (
            <li key={indx}>
              <a
                href="#"
                onClick={(e) => e.preventDefault()}
                className="hover:text-blue-600 transition"
              >
                {elems}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Column4;
