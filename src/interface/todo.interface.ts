import { ReactNode } from 'react';

export interface ITodo {
  _id: string;
  title: string;
  description: string;
  isComplete: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface ITodoProps {
  items: ITodo[];
}

export interface ITodoStore {
  allItems: ITodo[];
  activeItems: ITodo[];
  completedItems: ITodo[];
  searchValue?: string;
  oneTodo: object;
  isLoading: boolean;
  isAdding: boolean;
}

export interface IChildren {
  children: ReactNode;
}

export interface IButton {
  children: ReactNode;
  width?: number;
  type?: 'submit' | 'reset' | 'button' | undefined;
  onClick?: () => void;
}

export interface IButtonStyleProps {
  width: number;
}

export interface ICreateTodo {
  title: string;
  description: string;
}

export interface IModalProps {
  children: ReactNode;
  onClick: () => void;
}

export interface IComplete {
  id: string;
  isComplete: boolean;
}

export interface IStyleFilterProp {
  active: boolean;
}
