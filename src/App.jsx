import { useEffect, useState } from "react";
import axios from "axios";

// Define the base API URL for the albums endpoint
const API_URL = "https://jsonplaceholder.typicode.com/albums";

const App = () => {
  // State to store the list of albums fetched from the API
  const [albums, setAlbums] = useState([]);
  
  // State to store the title of the new album to be added
  const [newAlbumTitle, setNewAlbumTitle] = useState("");

  // useEffect hook to fetch the albums when the component mounts
  useEffect(() => {
    fetchAlbums();
  }, []);

  // Function to fetch the list of albums from the API
  const fetchAlbums = async () => {
    try {
      // Make a GET request to fetch the albums
      const response = await axios.get(API_URL);
      
      // Update the albums state with the fetched data
      setAlbums(response.data);
    } catch (error) {
      console.error("Error fetching albums:", error);
    }
  };

  // Function to add a new album to the list
  const addAlbum = async () => {
    try {
      // Make a POST request to add the new album
      const response = await axios.post(API_URL, {
        title: newAlbumTitle, // Send the new album title in the request body
      });
      
      // Update the albums state by adding the new album to the list
      setAlbums([...albums, response.data]);
      
      // Clear the input field after adding the album
      setNewAlbumTitle("");
    } catch (error) {
      console.error("Error adding album:", error);
    }
  };

  // Function to update the title of an existing album
  const updateAlbum = async (id, title) => {
    try {
      // Make a PUT request to update the album title
      const response = await axios.put(`${API_URL}/${id}`, {
        title, // Send the updated title in the request body
      });
      
      // Update the albums state with the modified album data
      setAlbums(
        albums.map((album) => (album.id === id ? response.data : album))
      );
    } catch (error) {
      console.error("Error updating album:", error);
    }
  };

  // Function to delete an album from the list
  const deleteAlbum = async (id) => {
    try {
      // Make a DELETE request to remove the album
      await axios.delete(`${API_URL}/${id}`);
      
      // Update the albums state by filtering out the deleted album
      setAlbums(albums.filter((album) => album.id !== id));
    } catch (error) {
      console.error("Error deleting album:", error);
    }
  };

  return (
    <div className="p-8 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Album List</h1>

      {/* Section to add a new album */}
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

      {/* List of albums with update and delete functionality */}
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
