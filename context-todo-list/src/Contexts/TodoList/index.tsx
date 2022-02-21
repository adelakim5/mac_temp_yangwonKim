import React, { createContext, useState, useEffect } from 'react';

interface Context {
  readonly toDoList: string[];
  readonly addToDo: (toDo: string) => void;
  readonly deleteToDo: (index: number) => void;
}

export const TodoListContext = createContext<Context>({
  toDoList: [],
  addToDo: (): void => {},
  deleteToDo: (): void => {},
});

interface Props {
  children: JSX.Element | JSX.Element[];
}

export const TodoListProvider = ({ children }: Props): JSX.Element => {
  const [toDoList, setToDoList] = useState<string[]>([]);

  useEffect(() => {
    const list = localStorage.getItem('ToDoList');
    if (list) {
      setToDoList(JSON.parse(list));
    }
  }, []);

  const addToDo = (toDo: string): void => {
    if (toDo) {
      const newList = [...toDoList, toDo];
      localStorage.setItem('ToDoList', JSON.stringify(newList));
      setToDoList([...toDoList, toDo]);
    }
  };

  const deleteToDo = (index: number): void => {
    let list = [...toDoList];
    list.splice(index, 1);
    localStorage.setItem('ToDoList', JSON.stringify(list));
    setToDoList(list);
  };

  return (
    <TodoListContext.Provider value={{ toDoList, addToDo, deleteToDo }}>
      {children}
    </TodoListContext.Provider>
  );
};
