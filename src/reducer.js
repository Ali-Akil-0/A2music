export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  // just for testing
  //   token:
  //     "BQDWxaraAltIkpM53i70R7zwgClX3Rj8LJ2Iw9BpAQZSENIidM…rjWWfjEbudjum7ZRYWnKmpVfex7vEyo9FE6zGNU45MCXKF9Gv",
};

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };
    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists,
      };
    case "SET_DISCOVER_WEEKLY":
      return {
        ...state,
        discover_weekly: action.discover_weekly,
      };
    default:
      return state;
  }
};
export default reducer;
