const express = require("express");
const { totalPlay } = require("./models/Songs");
// const { title, totalPlay } = require("./models/Songs");
// const { title } = require("./models/Songs");
const app = express();
const port = 3000;
const Playlist = [];

app.use(express.json());
app.post("/songs", (req, res, next) => {
  try {
    // Cek data kosong atau tidak
    for (const key in req.body) {
      //   console.log(req.body);
      //   console.log(key);
      if (!req.body[key]) {
        throw new Error("data ada yang kosong");
      }
    }
    const { title, artists, url } = req.body;
    // bentar ada temenku dateng ke kosan sebentar
    // Handle Unique Title
    Playlist.forEach((elm) => {
      if (title === elm.title) {
        throw new Error("judul lagu harus unik");
      }
    });
    // Handle array of string artist
    const arrArtists = artists.trim().split(",");
    const trimItems = arrArtists.map((elm) => {
      return elm.trim();
    });

    const insertedData = {
      id: Playlist.length + 1,
      title,
      artist: trimItems,
      url,
      totalPlay: 0,
    };
    Playlist.push(insertedData);
    return res.status(201).json({
      message: "Berhasil menambahkan ke dalam playlist",
      data: insertedData,
    });
  } catch (error) {
    next(error);
  }
});
app.get("/playlist", (req, res, next) => {
  try {
    if (Playlist.length < 1) {
      return res.status(500).json({
        message: "data kosong",
      });
    }
    return res.status(200).json({
      message: "berhasil mengambil data playlist",
      data: Playlist,
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