 //My favorite songs
 const songDatabase = [{
  songId: 1,
  title: 'My baby',
  artist: 'Soggy socks',
},
{
  songId: 2,
  title: '3 nails in wood',
  artist: 'The carpenters',
},
{
  songId: 3,
  title: 'Blacker than black',
  artist: 'Instant coffee',
},
{
  songId: 4,
  title: 'When is enough too little?',
  artist: 'The spies girls',
},
];

const myPlaylist = [];

//Add song to database
function addSongToDatabase(song) {
songDatabase.push(song);
}
addSongToDatabase({'songId': songDatabase.length + 1, 'title': 'Crazy', 'artist': 'Gnarls Barkley'});
addSongToDatabase({'songId': songDatabase.length + 1, 'title': 'Eyes on fire', 'artist': 'Blue foundation'});

console.log(songDatabase);

//Searching for a song
function getSongByTitle(title) {
  for (const song of songDatabase) {
    if (song.title === title) {
      return song;
    }
  }
      return false;
}
const searchedSong = getSongByTitle('When is enough too little?');
console.log(searchedSong); // returns { songId: 4, title: 'When is enough too little', artist: 'The spies girls'}

const searchedSong2 = getSongByTitle('When is enough too');
console.log(searchedSong2); // returns false

const searchedSong3 = getSongByTitle('Blacker than black');
console.log(searchedSong3); // returns { songId: 3, title: 'Blacker than black', artist: 'Instant coffee',}

//Create our own playlist
function addSong(song) {
  myPlaylist.push(song);
  }

function addSongToMyPlaylist(title) {
  const findSong = getSongByTitle(title);
    if (findSong) {
      addSong({'songId': findSong.songId, 'title': title});
    }
}

addSongToMyPlaylist('3 nails in wood');
addSongToMyPlaylist('Crazy');
addSongToMyPlaylist('random');
console.log(myPlaylist); 
