import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
  followings: [],
};

const followingsSlice = createSlice({
  name: 'followings',
  initialState,
  reducers: {
    addFollowing(state, { payload }) {
      state.followings.push(payload);
    },

    removeFollowing(state, { payload }) {
      state.followings = state.followings.filter(item => item !== payload);
    },
  },
});

export const { addFollowing, removeFollowing } = followingsSlice.actions;
export const followings = followingsSlice.reducer;
