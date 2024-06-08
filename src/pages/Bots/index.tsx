import React from "react";
import Modal from "../../components/Modal";
import useModal from "../../hooks/useModal";
import FormBots from "./components/Form";

const BotsPage = () => {

  const { open, handleOpenModal, handleCloseModal } = useModal()

  return (
    <section className="h-full rounded-md mt-4 text-[14px]">
      <div className="flex justify-between items-center">
        <h2 className="text-xl">Bots</h2>
        <button
          className="px-4 py-2 bg-slate-50 rounded-md border-solid border-gray-300 border-2 hover:bg-gray-100 flex items-center gap-3"
          onClick={handleOpenModal}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-circle-plus"
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
            <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" />
            <path d="M9 12h6" />
            <path d="M12 9v6" />
          </svg>
          <p>Nuevo Bot</p>
        </button>
      </div>
      <div className="bg-red-200 mt-4 h-[78%] p-2">
        <h2>bots list</h2>

        <Modal closeModal={handleCloseModal} open={open} title="Nuevo bot">
          <FormBots />
        </Modal>
      </div>
    </section>
  );
}

export default BotsPage