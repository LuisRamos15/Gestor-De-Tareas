import { useLocalStorage } from 'usehooks-ts';

import { v4 as uuidv4 } from 'uuid';
import { ColumnType } from '../constants/constants';
import { TaskModel } from '../utilities/models';

function useTaskCollection() {
  return useLocalStorage<{
    [key in ColumnType]: TaskModel[];
  }>('tasks', {
    Todo: [],
    'In Progress': [],
    Completed: [],
  });
}

export default useTaskCollection;