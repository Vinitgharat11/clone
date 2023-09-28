import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  boards: [
    {
      id: 1,
      title: "Board",
      lists: [
        {
          id: 1,
          text: "List 1",
          cards: [
            { id: 1, text: "Card 1" },
            { id: 2, text: "Card 2" },
          ],
        },
        // ...
      ],
    },
    // ...
  ],
};

const boardSlice = createSlice({
  name: "boards",
  initialState,
  reducers: {
    addBoard: (state, action) => {
      state.boards.push(action.payload);
    },
    addList: (state, action) => {
      const { boardId, list } = action.payload;
      const board = state.boards.find((board) => board.BoardId === boardId);
      console.log(board)
      if (board) {
        board.lists.push(list);
      }
    },
  },
});

export const { addBoard, addList } = boardSlice.actions;
export default boardSlice.reducer;
