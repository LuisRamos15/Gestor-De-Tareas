import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { ColumnType } from "../../../constants/constants";
import Column from "../../../components/UI/column/column";
import { IconButton, useColorModeValue } from "@chakra-ui/react";
import useColumnTasks from "../../../hooks/useColumnTask";
import { AddIcon } from "@chakra-ui/icons";

const ProjectsPage = () => {

    const { addEmptyTask } = useColumnTasks(ColumnType.TO_DO);

  return (
    <section className="bg-white h-full rounded-md p-3">
      <div className="flex justify-between mb-2 text-2xl">
        <h2>Tablero Kanban</h2>
        <IconButton
          size="xs"
          w="full"
          color={useColorModeValue("gray.500", "gray.400")}
          bgColor={useColorModeValue("gray.100", "gray.700")}
          _hover={{ bgColor: useColorModeValue("gray.200", "gray.600") }}
          py={2}
          variant="solid"
          onClick={addEmptyTask}
          colorScheme="black"
          aria-label="add-task"
          icon={<AddIcon />}
        />
      </div>
      <DndProvider backend={HTML5Backend}>
        <div className="flex justify-between gap-3 h-[90%]">
          <Column column={ColumnType.TO_DO} columnName="Tareas" />
          <Column column={ColumnType.IN_PROGRESS} columnName="En proceso" />
          <Column column={ColumnType.COMPLETED} columnName="Completado" />
        </div>
      </DndProvider>
    </section>
  );
};

export default ProjectsPage