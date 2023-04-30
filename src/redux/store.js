import { createStore } from 'redux';
import { nanoid } from 'nanoid';

const initialState = {
  tasks: [
    { id: 0, text: 'Learn HTML and CSS', completed: true },
    { id: 1, text: 'Get good at JavaScript', completed: true },
    { id: 2, text: 'Master React', completed: false },
    { id: 3, text: 'Discover Redux', completed: false },
    { id: 4, text: 'Build amazing apps', completed: false },
  ],
  filters: {
    status: 'all',
  },
};

export const toggleCompleted = taskId => {
  return {
    type: 'tasks/toggleCompleted',
    payload: taskId,
  };
};

export const deleteTask = taskId => {
  return {
    type: 'tasks/deleteTask',
    payload: taskId,
  };
};

export const addTask = text => {
  return {
    type: 'tasks/addTask',
    payload: { id: nanoid(), completed: false, text },
  };
};

export const changeFilter = value => {
  console.log(value);
  return {
    type: 'filter/changeFilter',
    payload: value,
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'tasks/addTask':
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
      };
    case 'tasks/toggleCompleted':
      return {
        ...state,
        tasks: state.tasks.map(task => {
          return task.id === action.payload
            ? { ...task, completed: !task.completed }
            : task;
        }),
      };
    case 'tasks/deleteTask':
      return {
        ...state,
        tasks: state.tasks.filter(task => task.id !== action.payload),
      };
    case 'filter/changeFilter':
      return {
        ...state,
        filters: {
          status: action.payload,
        },
      };

    default:
      return state;
  }
};
export const store = createStore(reducer);
