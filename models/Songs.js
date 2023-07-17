class Songs {
  constructor(id, title, artists, url, totalPlay = 0) {
    this.id = id;
    this.title = title;
    this.artists = artists;
    this.url = url;
    this.totalPlay = totalPlay;
  }
}

module.exports = Songs;
