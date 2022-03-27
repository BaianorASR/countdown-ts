import { configureStore } from '@reduxjs/toolkit';

import countdown from './reducers/counter';
import isPlaying from './reducers/playing';
import songs from './reducers/song';

export const store = configureStore({
  reducer: { countdown, isPlaying, songs },
  devTools: true,
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
