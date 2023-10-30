const songList = document.getElementById('song-list');

function fetchSongs() {
  fetch('/api/songs')
    .then((response) => response.json())
    .then((data) => {
      data.forEach((song) => {
        const listItem = document.createElement('li');
        listItem.textContent = `${song.title} by ${song.artist}`;
        songList.appendChild(listItem);
      });
    })
    .catch((error) => console.error('Error:', error));
}

fetchSongs();
