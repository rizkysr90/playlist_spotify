let songs = "         selena gomez, justin bieber";
// console.log(songs.split(","));
const arrArtists = songs.trim().split(",");
const trimItems = arrArtists.map((elm) => {
  return elm.trim();
});

console.log(trimItems);
