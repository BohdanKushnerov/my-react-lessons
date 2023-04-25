//======================COUNTER===========================
// import { configureStore } from '@reduxjs/toolkit';
// import { createAction, createReducer } from '@reduxjs/toolkit';

// export const increment = createAction('myValue/increment');
// export const decrement = createAction('myValue/decrement');

// const myReducer = createReducer(0, {
//   [increment]: (state, action) => state + action.payload,
//   [decrement]: (state, action) => state - action.payload,
// });

// export const store = configureStore({
//   reducer: {
//     myValue: myReducer,
//   },
// });

//=======================================================

// import { createStore } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
// import { devToolsEnhancer } from '@redux-devtools/extension';
import { rootReducer } from './reducer';

// Початкове значення стану Redux для кореневого редюсера,
// якщо не передати параметр preloadedState.
// const initialState = {
//   tasks: [
//     { id: 0, text: 'Learn HTML and CSS', completed: true },
//     { id: 1, text: 'Get good at JavaScript', completed: true },
//     { id: 2, text: 'Master React', completed: false },
//     { id: 3, text: 'Discover Redux', completed: false },
//     { id: 4, text: 'Build amazing apps', completed: false },
//   ],
//   filters: {
//     status: 'all',
//   },
// };

// Поки що використовуємо редюсер який
// тільки повертає отриманий стан
// const rootReducer = (state = initialState, action) => {
//   return state;
// };

// Створюємо розширення стора, щоб додати інструменти розробника
// const enhancer = devToolsEnhancer();
// export const store = createStore(rootReducer, enhancer);

export const store = configureStore({
  reducer: rootReducer,
  devTools: true,
});
