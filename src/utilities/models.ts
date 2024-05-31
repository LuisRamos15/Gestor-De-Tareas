import { ColumnType } from '../constants/constants';

export interface TaskModel {
  id: string;
  titulo: string;
  descripcion: string;
  categoria: string;
  prioridad: string;
  fechaVencimiento: string;
  estado: string;
  userId: number;
  column: ColumnType;
}

export interface DragItem {
  index: number;
  id: TaskModel['id'];
  from: ColumnType;
}