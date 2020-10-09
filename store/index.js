import { books } from "../data/books";

export const state = () => ({
  books: books,
  domain: "https://thesekidsread.jaredpendergraft.com",
  theme: "light",
});

export const actions = {
  setTheme({ state }, value) {
    state.theme = value;
  },
};

export const strict = false;
