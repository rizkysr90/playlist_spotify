const PlaylistClass = require("./../models/Playlists");
const Song = require("./../models/Songs");
const Playlist = new PlaylistClass();
const addSongToPlaylist = (req) => {
  const { title, artists, url } = req.body;

  // Find song by id
  if (Playlist.findByTitle(title)) {
    throw new Error("judul lagu harus unik");
  }
  const newSong = new Song(Playlist.songs.length + 1, title, artists, url);
  const result = Playlist.add(newSong);
  return result;
};

const getSongs = () => {
  return Playlist.findAll();
};
const playSong = (req) => {
  if (Playlist.songs.length < 1) {
    throw new Error("playlist kosong");
  }
  const { title } = req.body;
  const findSong = Playlist.findByTitle(title);
  if (!findSong) {
    throw new Error("judul lagu tidak ditemukan didalam playlist");
  }
  Playlist.playSong(findSong.title);
  return findSong;
};
const mostPlayedSong = (req) => {
  if (Playlist.songs.length < 1) {
    throw new Error("Playlist kosong");
  }
  return Playlist.mostPlayed();
};
module.exports = {
  addSongToPlaylist,
  getSongs,
  mostPlayedSong,
  playSong,
};
