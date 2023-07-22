import { ReactNode } from 'react';

export interface ITodo {
  id: string;
  title: string;
  description: string;
  isComplete: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface ITodoStore {
  allItems: ITodo[];
  activeItems: ITodo[];
  completedItems: ITodo[];
  isLoading: boolean;
}

export interface IChildren {
  children: ReactNode;
}

export interface IButton {
  children: ReactNode;
  type?: 'submit' | 'reset' | 'button' | undefined;
  onClick?: () => void;
}
