"use client"
import { useState } from 'react';
import H2 from '../Text/H2';

const genres = ["Pop", "Rock", "Jazz", "Classical", "Hip-hop", "Country", "Electronic", "Reggae", "Blues", "Metal"];
const songNumbers = Array.from({ length: 20 }, (_, i) => i + 1);

const AlbumForm = () => {
  const [numSongs, setNumSongs] = useState(1);
  const [albumData, setAlbumData] = useState({
    artistName: '',
    releaseDate: '',
    genre: '',
    cover: null,
    released: null,
    songs: []
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setAlbumData({
      ...albumData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSongChange = (index, e) => {
    const { name, value, type, checked } = e.target;
    const songs = [...albumData.songs];
    songs[index] = {
      ...songs[index],
      [name]: type === 'checkbox' ? checked : value,
    };
    setAlbumData({ ...albumData, songs });
  };

  const handleFileChange = (index, e) => {
    const { name, files } = e.target;
    const songs = [...albumData.songs];
    songs[index] = {
      ...songs[index],
      [name]: files[0],
    };
    setAlbumData({ ...albumData, songs });
  };

  const addSongsInputs = () => {
    return Array.from({ length: numSongs }, (_, i) => (
      <div key={i} className="border p-4 rounded mb-4">
        <h3 className="font-bold mb-2 text-teritary">Track {i + 1}</h3>
        <div className="mb-4">
          <label className="block text-sm font-medium text-teritary">Song Title</label>
          <input type="text" name="title" required onChange={(e) => handleSongChange(i, e)} className="mt-1 p-2 block w-full border-gray-300 rounded-md" />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-teritary">Has Featured Artists?</label>
          <input type="checkbox" name="hasFeaturedArtist" onChange={(e) => handleSongChange(i, e)} className="mt-1" />
          {albumData.songs[i]?.hasFeaturedArtist && (
            <div className="mt-2">
              <label className="block text-sm font-medium text-teritary">Featured Artist Name</label>
              <input type="text" name="featuredArtistName" required onChange={(e) => handleSongChange(i, e)} className="mt-1 p-2 block w-full border-gray-300 rounded-md" />
            </div>
          )}
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-teritary">Song File</label>
          <input type="file" name="songFile" required onChange={(e) => handleFileChange(i, e)} className="mt-1" />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-teritary">Lyrics</label>
          <textarea name="lyrics" onChange={(e) => handleSongChange(i, e)} className="mt-1 p-2 block w-full border-gray-300 rounded-md" />
        </div>
        <div className="p-4 border rounded bg-gray-100">
          <h4 className="font-medium">Preview</h4>
          <p>Title: {albumData.songs[i]?.title}</p>
          <p>Artist: {albumData.artistName}</p>
          {albumData.songs[i]?.hasFeaturedArtist && <p>Featured Artist: {albumData.songs[i]?.featuredArtistName}</p>}
        </div>
      </div>
    ));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(albumData);
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl mx-auto">
      <H2><span className='text-secondary'>Add New Album</span></H2>
      <div className="mt-6">
        <label className="block text-sm font-medium text-teritary">Number of Songs</label>
        <select name="numSongs" onChange={(e) => setNumSongs(e.target.value)} className="mt-1 mb-4 p-2 block w-full border-gray-300 rounded-md">
          {songNumbers.map(num => (
            <option key={num} value={num}>{num}</option>
          ))}
        </select>
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-teritary">Album Released?</label>
        <div className="flex items-center mt-1">
          <label className="mr-4 text-secondary font-bold">
            <input type="radio" name="released" value="yes" onChange={() => setAlbumData({ ...albumData, released: true })} className="mr-2" />
            Yes
          </label>
          <label className="mr-4 text-secondary font-bold">
            <input type="radio" name="released" value="no" onChange={() => setAlbumData({ ...albumData, released: false })} className="mr-2" />
            No
          </label>
        </div>
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-teritary">Artist Name</label>
        <input type="text" name="artistName" required onChange={handleInputChange} className="mt-1 p-2 block w-full border-gray-300 rounded-md" />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-teritary">Release Date</label>
        <input type="date" name="releaseDate" required onChange={handleInputChange} className="mt-1 p-2 block w-full border-gray-300 rounded-md" />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-teritary">Genre</label>
        <select name="genre" required onChange={handleInputChange} className="mt-1 p-2 block w-full border-gray-300 rounded-md">
          {genres.map(genre => (
            <option key={genre} value={genre}>{genre}</option>
          ))}
        </select>
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-teritary">Album Cover</label>
        <input type="file" name="cover" required onChange={(e) => setAlbumData({ ...albumData, cover: e.target.files[0] })} className="mt-1" />
      </div>

      {addSongsInputs()}

      <div className="p-4 border rounded bg-gray-100 mb-4">
        <h4 className="font-medium">Album Preview</h4>
        <p>Artist: {albumData.artistName}</p>
        <p>Release Date: {albumData.releaseDate}</p>
        <p>Genre: {albumData.genre}</p>
        <p>Released: {albumData.released ? 'Yes' : 'No'}</p>
      </div>

      <button type="submit" className="w-full bg-secondary font-semibold text-primary py-2 rounded-md">Submit Album</button>
    </form>
  );
};

export default AlbumForm;
