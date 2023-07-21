const express = require("express");
// const { totalPlay } = require("./models/Songs");
const Songs = require("./models/Songs");
const Playlist = require("./models/Playlists");
const playlistController = require("./controllers/playlist.controller");
// const { title, totalPlay } = require("./models/Songs");
// const { title } = require("./models/Songs");
const app = express();
const port = 3000;
// const Playlist = [];
const PlaylistsClass = new Playlist();

app.use(express.json());
app.post("/playlist", playlistController.addSongToPlaylist);
app.get("/playlist", playlistController.getSongs);
app.patch("/playlist", playlistController.playSong);
app.get("/playlist/mostplayed", playlistController.mostPlayed);
app.use((err, req, res, next) => {
  //   console.error(err.stack);
  res.status(500).json({
    message: err.message,
  });
});
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
