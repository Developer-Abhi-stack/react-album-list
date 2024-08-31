import { useEffect, useState } from "react";
import axios from "axios";

const API_URL = "https://jsonplaceholder.typicode.com/albums";

const App = () => {
  const [albums, setAlbums] = useState([]);
  const [newAlbumTitle, setNewAlbumTitle] = useState("");

  useEffect(() => {
    fetchAlbums();
  }, []);

  const fetchAlbums = async () => {
    try {
      const response = await axios.get(API_URL);
      setAlbums(response.data);
    } catch (error) {
      console.error("Error fetching albums:", error);
    }
  };

  const addAlbum = async () => {
    try {
      const response = await axios.post(API_URL, {
        title: newAlbumTitle,
      });
      setAlbums([...albums, response.data]);
      setNewAlbumTitle("");
    } catch (error) {
      console.error("Error adding album:", error);
    }
  };

  const updateAlbum = async (id, title) => {
    try {
      const response = await axios.put(`${API_URL}/${id}`, {
        title,
      });
      setAlbums(
        albums.map((album) => (album.id === id ? response.data : album))
      );
    } catch (error) {
      console.error("Error updating album:", error);
    }
  };

  const deleteAlbum = async (id) => {
    try {
      await axios.delete(`${API_URL}/${id}`);
      setAlbums(albums.filter((album) => album.id !== id));
    } catch (error) {
      console.error("Error deleting album:", error);
    }
  };

  return (
    <div className="p-8 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Album List</h1>

      <div className="mb-6">
        <input
          type="text"
          placeholder="New album title"
          value={newAlbumTitle}
          onChange={(e) => setNewAlbumTitle(e.target.value)}
          className="border p-2 mr-2"
        />
        <button
          onClick={addAlbum}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Add Album
        </button>
      </div>

      <ul>
        {albums.map((album) => (
          <li key={album.id} className="mb-4 p-4 border rounded">
            <input
              type="text"
              value={album.title}
              onChange={(e) => updateAlbum(album.id, e.target.value)}
              className="border p-2 mr-2 w-full"
            />
            <button
              onClick={() => deleteAlbum(album.id)}
              className="bg-red-500 text-white px-4 py-2 rounded mt-2"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
