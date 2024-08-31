


# Album Management App

This is a simple React application that allows users to manage a list of albums. Users can fetch albums from an API, add new albums, update album titles, and delete albums. The application uses `axios` for making HTTP requests to a dummy API provided by `jsonplaceholder.typicode.com`.

## Features

- **Fetch Albums:** Retrieves a list of albums from the API and displays them.
- **Add Album:** Allows users to add a new album by entering a title.
- **Update Album:** Enables users to update the title of an existing album.
- **Delete Album:** Allows users to delete an album from the list.

## Technologies Used

- **React:** A JavaScript library for building user interfaces.
- **Axios:** A promise-based HTTP client for making requests to the API.
- **Tailwind CSS:** A utility-first CSS framework for styling the components.

## Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:

- Node.js (version 12 or higher)
- npm or yarn

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/Developer-Abhi-stack/react-album-list.git
   ```

2. **Navigate to the project directory:**

   ```bash
   cd react-album-list
   ```

3. **Install dependencies:**

   ```bash
   npm install
   ```

  

### Running the Application

1. **Start the development server:**

   ```bash
   npm run dev
   ```

2. **Open the application in your browser:**

   The application should now be running on [http://localhost:5173](http://localhost:5173).

### Build for Production

To create a production build of the application:

```bash
npm run build
```

The build output will be located in the `dist` directory.

## Code Overview

### `App.js`

- **State Management:**
  - `albums`: Stores the list of albums fetched from the API.
  - `newAlbumTitle`: Stores the title of the new album to be added.
  
- **Functions:**
  - `fetchAlbums`: Fetches albums from the API when the component mounts.
  - `addAlbum`: Adds a new album to the list by sending a POST request to the API.
  - `updateAlbum`: Updates the title of an existing album by sending a PUT request to the API.
  - `deleteAlbum`: Deletes an album from the list by sending a DELETE request to the API.

- **Rendering:**
  - The component renders an input field for adding a new album, along with a list of albums that can be updated or deleted.

## API

This application interacts with the [JSONPlaceholder](https://jsonplaceholder.typicode.com/) API, which is a free online REST API for testing and prototyping.

- **Base URL:** `https://jsonplaceholder.typicode.com/albums`
- **GET /albums:** Fetches a list of albums.
- **POST /albums:** Adds a new album.
- **PUT /albums/:id:** Updates an existing album by its ID.
- **DELETE /albums/:id:** Deletes an album by its ID.

## Contributing

Contributions are welcome! If you have any ideas, suggestions, or bug fixes, feel free to open an issue or submit a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

---

This README provides a detailed overview of the project, including setup instructions, code structure, and key functionalities. You can adjust any section based on your project's specific needs or add more details if necessary.