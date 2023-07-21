class Playlist {
  constructor() {
    this.songs = [];
  }
  findAll() {
    if (this.songs.length < 1) {
      return 0;
    }
    return this.songs;
  }
  findByTitle(title) {
    let track = 0,
      currentData = null;
    this.songs.forEach((elm) => {
      if (title === elm.title) {
        currentData = elm;
      } else {
        track++;
      }
    });
    if (!currentData) {
      return false;
    }
    return currentData;
  }
  add(song) {
    if (song) {
      this.songs.push(song);
      return song;
    }
    throw new Error("lagu tidak valid");
  }
  playSong(title) {
    this.songs.forEach((elm) => {
      if (elm.title === title) {
        elm.totalPlay++;
      }
    });
  }
  mostPlayed() {
    return this.songs.sort((a, b) => b.totalPlay - a.totalPlay);
  }
}

module.exports = Playlist;
