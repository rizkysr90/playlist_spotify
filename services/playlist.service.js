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

module.exports = {
  addSongToPlaylist,
};
