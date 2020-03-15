import {extend} from "./utils.js";
import films from "./mocks/films.js";
import {ALL_GENRES} from "./const.js";

const genresList = Array.from(
    new Set(films.map((film) => film.genre))
);


const initialState = {
  films,
  filteredGenre: ALL_GENRES,
};

const ActionType = {
  FILTER_UPDATE: `FILTER_UPDATE`,
  GET_FILTERED_FILMS: `GET_FILTERED_FILMS`,
};

const ActionCreator = {
  filterUpdate: (genre) => ({
    type: ActionType.FILTER_UPDATE,
    genre,
  }),

  getFilteredFilms: () => ({
    type: ActionType.GET_FILTERED_FILMS,
  }),
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.FILTER_UPDATE:
      const newFilteredGenre = action.genre ? action.genre : state.filteredGenre;

      return extend(state, {
        filteredGenre: newFilteredGenre,
      });

    case ActionType.GET_FILTERED_FILMS:
      let filteredFilms = films.filter((film) => {
        return film.genre === state.filteredGenre;
      });

      if (state.filteredGenre === initialState.filteredGenre) {
        return extend({}, initialState);
      }

      return extend(state, {
        films: filteredFilms,
      });
  }

  return state;
};

export {reducer, ActionCreator, ActionType, genresList, ALL_GENRES};
