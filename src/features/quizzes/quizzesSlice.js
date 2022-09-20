import { createSlice } from "@reduxjs/toolkit";

export const quizzesSlice = createSlice({
  name: 'quizzes',
  initialState: {quizzes: {}},
  reducers: {
    addQuiz: (state, action) => {
      const { id, topicId, name, cardIds } = action.payload;
      state.quizzes[id] = {
        id: id,
        topicId: topicId,
        name: name,
        cardIds: cardIds
      }
    }
  }
});

export const addQuizForTopicId = (quiz) => {
  const { topicId, id } = quiz;
  return (dispatch) => {
    dispatch(quizzesSlice.actions.addQuiz(quiz));
    dispatch(addQuizForTopicId({ topicId: topicId, quizId: id }));
  };
};

export const { addQuiz } = quizzesSlice.actions;
export const selectQuizzes = (state) => state.quizzes.quizzes;
export default quizzesSlice.reducer;