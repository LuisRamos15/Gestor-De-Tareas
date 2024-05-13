import React from 'react';
import {
  Heading,
} from '@chakra-ui/react';
import useColumnDrop from '../../../hooks/useColumnDrop';
import useColumnTasks from '../../../hooks/useColumnTask';
import { ColumnType } from '../../../constants/constants';
import Task from '../Task/task';

function Column({ column, columnName }: { column: ColumnType, columnName: string }) {
  const {
    tasks,
    deleteTask,
    dropTaskFrom,
    swapTasks,
    updateTask,
  } = useColumnTasks(column);

  const { dropRef, isOver } = useColumnDrop(column, dropTaskFrom);

  const ColumnTasks = tasks.map((task, index) => (
    <Task
      key={task.id}
      task={task}
      index={index}
      onDropHover={swapTasks}
      onUpdate={updateTask}
      onDelete={deleteTask}
    />
  ));

  return (
    <div className='bg-gray-200 bg-opacity-45 w-full p-3 rounded-md'>
      <Heading fontSize="md" mb={4} letterSpacing="wide">
        <h2 className='text-2xl'>
          {columnName}
        </h2>
      </Heading>
      <div ref={dropRef} className='flex flex-col p-2 mt-4 rounded-lg overflow-auto h-[450px]'
        style={{ opacity: isOver ? '0.85' : '1' }}
      >
        {ColumnTasks}
      </div>
    </div>
  );
}

export default Column;