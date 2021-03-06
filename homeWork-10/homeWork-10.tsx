import React, { FC, useCallback, useEffect, useRef } from "react";
import { fetchProjects, fetchTotos } from "./mocks/mockFetcher";
import { IProject, ITodo } from "./types";

// Реализуйте хук для получения проектов, используя
// асинхронную функцию fetchProjects. Дайте пользователю
// знать, что происходит загрузка

type loadedData<T> = {
  isLoading: boolean;
  content: T;
};

const useProjects = (): loadedData<IProject[]> => {
  const [projects, setProjects] = React.useState<IProject[]>([]);

  fetchProjects().then((projects: IProject[]) => setProjects(projects));

  return {
    isLoading: projects.length ? false : true,
    content: projects
  };
};

// Реализуйте хук для получения todo проектов, используя
// асинхронную функцию fetchTotos. Дайте пользователю
// знать, что происходит загрузка. Реализуйте функцию
// удаления записи todo. Избегайте повторной загрузки
// данных — это сбросит удалённые элементы списка

type deletableLoadedTata<T> = loadedData<T> & {
  remove: (todoId: number) => void;
};

const useTodos = (projectId: number | null): deletableLoadedTata<ITodo[]> => {
  const [todos, setTodos] = React.useState<ITodo[]>([]);
  useEffect(() => {
    if (projectId !== null) {
      fetchTotos(projectId).then((todos: ITodo[]) => setTodos(todos));
    }
  }, [projectId])
  return {
    isLoading: todos.length ? false : true,
    content: todos,
    remove: (todoId) => {
      if (projectId !== null) {
        setTodos(todos.filter(todo => todo.id !== todoId))
      }
    }
  };
};

// Допишите компонент фильтра. При нажатии на кнопку "поиск"
// необходимо вызвать onFilter из свойств компонента.
// Дополнительной задачей является минимизация количества
// обновлений компонента (вывод "FilterComponent render" в
// консоль должен быть минимальным)

type FilterProps = {
  onFilter: (search: string) => void;
};

const FilterComponent: FC<FilterProps> = ({ onFilter }) => {
  console.log("FilterComponent render");

  const input = useRef<HTMLInputElement>(null);
  const handlePress = () => {
    onFilter((input.current?.value.length) ? input.current.value : "")
  }
  return (
    <div>
      Фильтр:&nbsp;
      <input ref={input} />
      <button onClick={handlePress}>поиск</button>
    </div>
  );
};

export { useProjects, useTodos, FilterComponent };
