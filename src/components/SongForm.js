"use client"


import { useState } from 'react';
import H2 from './Text/H2';
const genres = ["Pop", "Rock", "Jazz", "Classical", "Hip-hop", "Country", "Electronic", "Reggae", "Blues", "Metal"];

function SongForm () {
  const [songData, setSongData] = useState({
    artistName: '',
    songTitle: '',
    released: null,
    releaseDate: '',
    genre: '',
    cover: null,
    hasFeaturedArtist: null,
    featuredArtistName: '',
    songFile: null,
    lyrics: ''
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setSongData({
      ...songData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setSongData({ ...songData, [name]: files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(songData);
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl mx-auto p-6">
      <H2><span className='text-secondary'>Add a New Song</span></H2>
      <div className="mb-4 mt-6">
        <label className="block text-sm font-medium text-teritary">Artist Name</label>
        <input type="text" name="artistName" required onChange={handleInputChange} className="mt-1 p-2 block w-full border-gray-300 rounded-md" />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-teritary">Song Title</label>
        <input type="text" name="songTitle" required onChange={handleInputChange} className="mt-1 p-2 block w-full border-gray-300 rounded-md" />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-teritary">Song Released?</label>
        <div className="flex items-center mt-1">
          <label className="mr-4 text-secondary">
            <input type="radio" name="released" value="yes" onChange={() => setSongData({ ...songData, released: true })} className="mr-2" />
            Yes
          </label>
          <label className='text-secondary'>
            <input type="radio" name="released" value="no" onChange={() => setSongData({ ...songData, released: false })} className="mr-2" />
            No
          </label>
        </div>
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
        <label className="block text-sm font-medium text-teritary">Song Cover</label>
        <input type="file" name="cover" required onChange={handleFileChange} className="mt-1" />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-teritary">Has Featured Artists?</label>
        <div className="flex items-center mt-1">
          <label className="mr-4 text-secondary">
            <input type="radio" name="hasFeaturedArtist" value="yes" onChange={() => setSongData({ ...songData, hasFeaturedArtist: true })} className="mr-2" />
            Yes
          </label>
          <label className='text-secondary'>
            <input type="radio" name="hasFeaturedArtist" value="no" onChange={() => setSongData({ ...songData, hasFeaturedArtist: false })} className="mr-2" />
            No
          </label>
        </div>
        {songData.hasFeaturedArtist && (
          <div className="mt-2">
            <label className="block text-sm font-medium text-gray-700">Featured Artist Name</label>
            <input type="text" name="featuredArtistName" required onChange={handleInputChange} className="mt-1 p-2 block w-full border-gray-300 rounded-md" />
          </div>
        )}
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-teritary">Song File</label>
        <input type="file" name="songFile" required onChange={handleFileChange} className="mt-1" />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-teritary">Lyrics</label>
        <textarea name="lyrics" onChange={handleInputChange} className="mt-1 p-2 block w-full border-gray-300 rounded-md" />
      </div>
      <div className="p-4 border rounded bg-gray-100 mb-4">
        <h4 className="font-medium">Song Preview</h4>
        <p>Title: {songData.songTitle}</p>
        <p>Artist: {songData.artistName}</p>
        {songData.hasFeaturedArtist && <p>Featured Artist: {songData.featuredArtistName}</p>}
      </div>
      <button type="submit" className="w-full bg-secondary font-semibold text-primary py-2 rounded-md">Submit Song</button>
    </form>
  );
};

export default SongForm;
