import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { ColumnType } from "../../../constants/constants";
import Column from "../../../components/UI/column/column";
import { useState } from "react";
import TaskPage from "../task/task";

const ProjectsPage = () => {

  const [openModal, setOpenModal] = useState(false);

  const closeModal = () => {
    setOpenModal(!true);
  }

  const handleOpenModal = () => {
    setOpenModal(true);
  }

  return (
    <section className="bg-white h-full rounded-md p-3">
      <div className="flex justify-between mb-2 text-2xl">
        <h2>Tablero Kanban</h2>
        <button
          onClick={handleOpenModal}
          className="border-gray-400 border-2 p-2 text-lg rounded-md hover:bg-slate-200"
        >
          crear tarea
        </button>
      </div>
      <DndProvider backend={HTML5Backend}>
        <div className="flex justify-between gap-3 h-[90%]">
          <Column column={ColumnType.TO_DO} columnName="Tareas" />
          <Column column={ColumnType.IN_PROGRESS} columnName="En proceso" />
          <Column column={ColumnType.COMPLETED} columnName="Completado" />
        </div>
      </DndProvider>

      <div
        className="bg-gray-400 absolute top-0 left-0 w-full h-full bg-opacity-35 flex justify-center items-center"
        style={{ display: openModal ? "flex" : "none" }}
      >
        <div className="bg-white p-5 rounded-lg w-max h-max relative">
          <button
            onClick={closeModal}
            className="border-gray-400 border-2 p-1 text-lg rounded-md hover:bg-slate-200 absolute top-3 right-3"
          >
            X
          </button>
          <TaskPage />
        </div>
      </div>
    </section>
  );
};

export default ProjectsPage