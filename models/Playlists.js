class Playlist {
  constructor() {
    this.songs = [];
  }
  findByTitle(title) {
    this.songs.forEach((elm) => {
      if (title === elm.title) {
        return true;
      }
    });
    return false;
  }
  add(song) {
    if (song) {
      this.songs.push(song);
      return song;
    }
    throw new Error("lagu tidak valid");
  }
}

module.exports = Playlist;
