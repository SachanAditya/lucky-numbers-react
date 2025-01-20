import React, { useState } from "react";
import axios from "axios";
import './App.css';  // Importing the CSS

function App() {
  const [country, setCountry] = useState(""); // Store the country input
  const [news, setNews] = useState([]); // Store fetched news
  const [loading, setLoading] = useState(false); // Loading state
  const [error, setError] = useState(null); // Error state

  const fetchNews = async () => {
    if (!country) return; // If no country is entered, do nothing
    setLoading(true); // Set loading to true while fetching data
    setError(null); // Reset any previous errors

    // Construct the API URL using the user-entered country
    const apiUrl = `https://newsapi.org/v2/top-headlines?country=${country}&apiKey=a23fa3f028b0437caa7354e40ae76e82`;

    try {
      const response = await axios.get(apiUrl); // Fetch the news
      setNews(response.data.articles); // Set the fetched news to state
    } catch (err) {
      setError("An error occurred while fetching news"); // Handle errors
    } finally {
      setLoading(false); // Set loading to false after the request
    }
  };

  return (
    <div className="App">
      <header className="header">
        <h1>News App</h1>
      </header>

      <div className="input-container">
        <input
          type="text"
          placeholder="Enter country code (e.g., us, in, uk)"
          value={country}
          onChange={(e) => setCountry(e.target.value)} // Update country input
        />
        <button onClick={fetchNews}>Get News</button>
      </div>

      {loading && <p>Loading...</p>} {/* Show loading message */}
      {error && <p>{error}</p>} {/* Show error message */}

      <div>
        {news.length > 0 ? (
          <ul className="news-list">
            {news.map((article, index) => (
              <li key={index} className="news-item">
                <a href={article.url} target="_blank" rel="noopener noreferrer">
                  <h3>{article.title}</h3>
                  <p>{article.description}</p>
                  <p><small>{article.publishedAt}</small></p>
                </a>
              </li>
            ))}
          </ul>
        ) : (
          <p>No news available</p>
        )}
      </div>
    </div>
  );
}

export default App;
