const playlistService = require("./../services/playlist.service");
const addSongToPlaylist = (req, res, next) => {
  try {
    // Cek data kosong atau tidak
    for (const key in req.body) {
      //   console.log(req.body);
      //   console.log(key);
      if (!req.body[key]) {
        throw new Error("data ada yang kosong");
      }
    }
    const { artists } = req.body;
    // Handle array of string artist

    const arrArtists = artists.trim().split(",");

    req.body.artists = arrArtists.map((elm) => {
      return elm.trim();
    });
    // Get into the service layer
    const data = playlistService.addSongToPlaylist(req);
    return res.status(201).json({
      code: 201,
      message: "berhasil menambahkan lagu kedalam playlist",
      data,
    });
  } catch (error) {
    next(error);
  }
};
const getSongs = (req, res, next) => {
  try {
    const data = playlistService.getSongs();
    return res.status(200).json({
      code: 200,
      message: "berhasil",
      data,
    });
  } catch (error) {
    next(error);
  }
};
const playSong = (req, res, next) => {
  try {
    req.title = req.body.title.trim();
    const data = playlistService.playSong(req);
    return res.status(200).json({
      code: 200,
      message: "berhasil",
      data,
    });
  } catch (error) {
    next(error);
  }
};
const mostPlayed = (req, res, next) => {
  try {
    const data = playlistService.mostPlayedSong();
    return res.status(200).json({
      code: 200,
      message: "berhasil",
      data,
    });
  } catch (error) {
    next(error);
  }
};
module.exports = {
  addSongToPlaylist,
  getSongs,
  mostPlayed,
  playSong,
};
