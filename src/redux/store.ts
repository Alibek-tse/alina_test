import { configureStore } from '@reduxjs/toolkit';
import { ApplicationApi } from './ApplicationApi/ApplicationApi';

export const store = configureStore({
  reducer: {
    [ApplicationApi.reducerPath]: ApplicationApi.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(ApplicationApi.middleware),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
