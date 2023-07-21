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
app.post("/songs", playlistController.addSongToPlaylist);
app.get("/playlist", (req, res, next) => {
  try {
    if (PlaylistsClass.songs.length < 1) {
      return res.status(500).json({
        message: "data kosong",
      });
    }
    return res.status(200).json({
      message: "berhasil mengambil data playlist",
      data: PlaylistsClass.songs,
    });
  } catch (error) {}
});

app.get("/playSongs", (req, res, next) => {
  //   console.log("masukkk gess");
  try {
    let trackPosition;
    const { title } = req.body;
    // cek ada gak lagunya
    if (Playlist.length < 1) {
      throw new Error("playlist kosong");
    }
    Playlist.forEach((elm, idx) => {
      if (title !== elm.title) {
        throw new Error("judul lagu tidak ditemukan");
      } else if (title === elm.title) {
        // increment total play
        trackPosition = idx;
        elm.totalPlay++;
      }
    });
    return res.status(200).json({
      message: "memutar lagu",
      data: Playlist[trackPosition],
    });
  } catch (error) {
    next(error);
  }
});
app.use((err, req, res, next) => {
  //   console.error(err.stack);
  res.status(500).json({
    message: err.message,
  });
});
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
