import { useEffect, useState } from "react";
import "./App.css";
import Login from "./Login";
import { getTokenFromUrl } from "./spotify";
import SpotifyWebApi from "spotify-web-api-node";
import Player from "./Player";
import { useDataLayerValue } from "./DataLayer";

function App() {
  const [{ user, token }, dispatch] = useDataLayerValue();

  const spotifyApi = new SpotifyWebApi();
  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;
    if (_token) {
      dispatch({
        type: "SET_TOKEN",
        token: _token,
      });

      spotifyApi.setAccessToken(_token);
      spotifyApi.getMe().then((user) => {
        dispatch({
          type: "SET_USER",
          user: user,
        });
      });
      spotifyApi.getUserPlaylists().then((playlists) => {
        dispatch({
          type: "SET_PLAYLISTS",
          playlists: playlists,
        });
      });
      spotifyApi.getPlaylist("3cEYpjA9oz9GiPac4AsH4n").then((response) => {
        dispatch({
          type: "SET_DISCOVER_WEEKLY",
          discover_weekly: response,
        });
      });
    }
  }, []);
  return (
    <div className="app">
      {token ? <Player spotify={spotifyApi} /> : <Login />}
      {/* Logo */}
      {/* Login */}
    </div>
  );
}

export default App;
