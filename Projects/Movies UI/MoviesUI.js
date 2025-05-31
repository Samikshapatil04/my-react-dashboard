
import React, { useState } from "react";
import "./MoviesUI.css";

const MoviesUI = () => {
  const [movies, setMovies] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    image: "",
    releaseDate: "",
    duration: "",
  });

  const toggleForm = () => setShowForm(!showForm);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setMovies([...movies, formData]);
    setFormData({ name: "", image: "", releaseDate: "", duration: "" });
    setShowForm(false);
  };

  return (
    <div className="container">
      <header className="header">
        <div className="left-section">
          <button className="logo">IMDb</button>
          <button className="menu-btn">☰ Menu</button>
          <select className="dropdown">
            <option>All</option>
          </select>
          <input
            className="search-input"
            type="text"
            placeholder="Search IMDb"
          />
          <button className="search-icon">🔍</button>
        </div>
        <div className="right-section">
          <a href="#" className="pro">
            IMDbPro
          </a>
          <a href="#" className="watchlist">
            ➕ Watchlist
          </a>
          <a href="#" className="signin">
            Sign In
          </a>
          <select className="lang-dropdown">
            <option value="en">English</option>
            <option value="hi">हिंदी</option>
            <option value="mr">मराठी</option>
          </select>

          <button className="add-btn" onClick={toggleForm}>
            ⭐ Add Movie
          </button>
        </div>
      </header>

      {showForm && (
        <form className="form" onSubmit={handleSubmit}>
          <h2>Movie Details</h2>
          <input
            type="text"
            placeholder="Enter Movie Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            placeholder="Enter Image URL"
            name="image"
            value={formData.image}
            onChange={handleChange}
            required
          />
          <input
            type="date"
            name="releaseDate"
            value={formData.releaseDate}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            placeholder="Enter Duration"
            name="duration"
            value={formData.duration}
            onChange={handleChange}
            required
          />
          <button type="submit">Submit</button>
        </form>
      )}

      <main className="movie-list">
        {movies.length === 0 ? (
          <p className="no-movies">
            No movies added yet. Click "Add Movie" to get started.
          </p>
        ) : (
          movies.map((movie, index) => (
            <div className="movie-card" key={index}>
              <img src={movie.image} alt={movie.name} />
              <div className="movie-info">
                <h3>{movie.name}</h3>
                <p>{movie.releaseDate}</p>
                <p>{movie.duration}</p>
                <p>⭐ 9.3 (3M) · Rate</p>
              </div>
            </div>
          ))
        )}
      </main>
    </div>
  );
};

export default MoviesUI;
