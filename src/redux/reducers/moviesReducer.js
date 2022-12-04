import * as types from "../Actions/types";

const initialState = () => ({
  moviesList: [],
  error: null,
  loading: false,
  stat: null,
  coverMovie: {},
  popular: [],
  genres: [],
  allMovies: []
});

const moviesReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.fetchMoviesFailedType:
      return {
        ...state,
        error: action.payload,
        loading: false,
        moviesList: []
      };
    case types.fetchMoviesStartType:
      return {
        ...state,
        loading: true,
        error: null,
        moviesList: []
      };
    case types.fetchMoviesSuccessType:
      return {
        ...state,
        loading: false,
        moviesList: action.payload.data.results,
        error: null,
        stat: action.payload.status,
        coverMovie: action.payload.data.results[0]
      };

    case types.selectedMovie:
      return {
        ...state,
        coverMovie: action.payload
      };

    case types.popular:
      return {
        ...state,
        popular: action.payload
      };

    case types.fetchGenres:
      return {
        ...state,
        genres: action.payload
      };

    case types.fetchGenresMovies:
      return {
        ...state,
        allMovies: action.payload
      };

    default:
      return state;
  }
};

export default moviesReducer;
