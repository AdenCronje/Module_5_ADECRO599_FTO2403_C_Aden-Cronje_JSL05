// Array of song objects. Add at least 5 songs with title, artist, and genre properties.
const songs = [
  { title: "Hooked on a Feeling", artist: "Blue Swede", genre: "Pop" },
  { title: "Moonage Daydream", artist: "David Bowie", genre: "Rock" },
  { title: "I Want You Back", artist: "The Jackson 5", genre: "Pop" },
  { title: "Spirit in the Sky", artist: "Norman Greenbaum", genre: "Rock" },
  { title: "Cherry Bomb", artist: "The Runaways", genre: "Rock" },
  {
    title: "Escape (The Piña Colada Song)",
    artist: "Rupert Holmes",
    genre: "Pop",
  },
  { title: "O-O-H Child", artist: "The Five Stairsteps", genre: "R&B" },
  {
    title: "Ain't No Mountain High Enough",
    artist: "Marvin Gaye & Tammi Terrell",
    genre: "R&B",
  },
  { title: "Come and Get Your Love", artist: "Redbone", genre: "Rock" },
  { title: "I'm Not in Love", artist: "10cc", genre: "Pop" },
  {
    title: "Fooled Around and Fell in Love",
    artist: "Elvin Bishop",
    genre: "Rock",
  },
  { title: "Mrs. Officer", artist: "Lil Wayne", genre: "R&B" },
  { title: "Lady - (Hear me tonight)", artist: "Modjo", genre: "House" },
  { title: "Get Lucky", artist: "Daft Punk", genre: "House" },
  { title: "How Do U Want It", artist: "Tupac", genre: "Hip Hop" },
  { title: "Music Sounds Better With You", artist: "Stardust", genre: "House" },
  { title: "Power", artist: "Kanye West", genre: "Hip Hop" },
  { title: "Redrum", artist: "21 Savage", genre: "Hip Hop" },
  // Feel free to add even more songs
];

// Object containing each Guardian's preferred genre
const guardians = {
  "Star-Lord": "Rock",
  Gamora: "Pop",
  Drax: "R&B",
  Rocket: "Hip Hop",
  Groot: "House",
  // Add preferences for Drax, Rocket, and Groot
};
// console.log(guardians);

// Function to generate playlist based on preferred genre
function generatePlaylist(guardians, songs) {
  // Use the map() function to create playlists for each Guardian
  // Your code here
  const guardiansNames = Object.entries(guardians);
  console.log(guardiansNames);



}
// Call generatePlaylist and display the playlists for each Guardian
generatePlaylist(guardians, songs);
