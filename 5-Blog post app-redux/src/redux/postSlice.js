import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = [
  {
    id: 1,
    title:
      'The Ultimate Guide to planning a Wedding or Elopement at Snow Canyon State Park, Utah',
    content:
      'Snow Canyon State Park is known for its stunning views with easy accessibility and is one of my favorite, not so hidden gems in Southern Utah. Snow Canyon has 33 trailheads and can be a quiet park even during Southern Utah’s peak season. ',
  },
  {
    id: 2,
    title: "It's All in Your He...Mindset",
    content:
      "I posted a YouTube video the other day where I talked about three things I wish I knew when I started running. In true me fashion, I didn't plan them out ahead of time and knew the most important ones would come to me as I went along. ",
  },
  {
    id: 3,
    title: "Time Flies When You're...?",
    content:
      "How did a month fly by since my last post?? It's been just over a month since I crossed the finish line of the NYC Marathon. In that time, I had my first speaking engagement at a women's conference, made another trip to NYC to see Mrs. Doubtfire on Broadway, and traveled to Austin TX for The Running Event! Oh and apparently Thanksgiving happened at some point in there. ",
  },
];

const todoSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    postAdded: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(title, content) {
        return {
          payload: {
            id: nanoid(),
            title,
            content,
          },
        };
      },
    },
  },
});

export const selectAllPosts = (state) => state.posts;

export const { postAdded } = todoSlice.actions;

export default todoSlice.reducer;
