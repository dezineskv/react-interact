import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import "../App.css";

// dotenv is not needed here in client-side code
// const { YOUR_SECRET, YOUR_KEY } = process.env; // This line is incorrect for client-side

function Music() {
  // Access environment variables using import.meta.env (for Vite)
  const YOUR_KEY = import.meta.env.VITE_YOUR_KEY;
  const YOUR_SECRET = import.meta.env.VITE_YOUR_SECRET;

  const [data, setData] = useState(null); // Initialize state to hold the fetched data
  const [error, setError] = useState(null); // Initialize state to hold any errors

  useEffect(() => {
    // Check if keys are available before fetching
    if (!YOUR_KEY || !YOUR_SECRET) {
      console.error("Discogs API key or secret is missing.");
      setError("API keys are not configured.");
      return; // Exit useEffect if keys are missing
    }

    // Define the fetch operation inside useEffect
    fetch(
      `https://api.discogs.com/database/search?q=artist:"Radiohead"&type=release&per_page=10`,
      {
        headers: {
          Authorization: `Discogs key=${YOUR_KEY},secret=${YOUR_SECRET}`,
        },
      }
    )
      .then((response) => {
        if (!response.ok) {
          // Throw an error for bad responses (400s, 500s)
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setData(data); // Update state with fetched data
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setError(error); // Update state with error
      });
  }, [YOUR_KEY, YOUR_SECRET]); // Add dependencies to useEffect

  if (error) {
    return <div className="text-red-500">Error: {error.message || error}</div>;
  }

  if (!data) {
    return <div className="text-gray-500">Loading music data...</div>;
  }

  return <div className="text-red">Music Page: {data.results.master_id}</div>;
}

export default Music;
