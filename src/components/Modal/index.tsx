import React from "react";

interface Props {
  children: React.ReactNode;
  title: string;
  open: boolean;
  closeModal: () => void;
}

const Modal: React.FC<Props> = ({ children, closeModal, open, title }: Props): JSX.Element => {
  return (
    <div
      className="bg-gray-200 absolute top-0 left-0 w-full h-full flex items-center justify-center bg-opacity-45 z-30"
      style={{ display: open ? "flex" : "none" }}
    >
      <div className="bg-white relative p-4 rounded-md w-max h-min">
        <span className="text-xl">{title}</span>
        <button
          onClick={closeModal}
          className="p-1 bg-slate-50 rounded-md border-solid border-gray-300 border-2 hover:bg-gray-100 absolute top-3 right-3"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-x"
            width="25"
            height="25"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="#9e9e9e"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M18 6l-12 12" />
            <path d="M6 6l12 12" />
          </svg>
        </button>
        <div className="mt-5 text-[14px]">
          {children}
        </div>
      </div>
    </div>
  );
}

export default Modal