// MoodForm.js
import React, { useState } from "react";
import axios from "axios";

const MoodForm = () => {
  const [mood, setMood] = useState("");
  const [activities, setActivities] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [showColoredPaper, setShowColoredPaper] = useState(false);

  const handleMoodChange = (event) => {
    setMood(event.target.value);
  };

  const fetchActivities = async () => {
    setLoading(true);
    setError(null);
    try {
      let response;
      if (mood === "sad") {
        response = await axios.get("https://www.boredapi.com/api/activity?type=recreational");
        if (response.data.activity) {
          setActivities([response.data.activity]);
        } else {
          setActivities(["No activity found"]);
        }
      } else if (mood === "happy") {
        setActivities(["Happy Showers Paper"]); // Display a message for happy mood
        setShowColoredPaper(true); // Show colored paper animation
      } else {
        setError("Please select a mood.");
      }
    } catch (error) {
      setError("Error fetching activities. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    fetchActivities();
  };

  return (
    <div>
      <h2>How do you feel today?</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Select your mood:
            <select value={mood} onChange={handleMoodChange}>
              <option value="">Select</option>
              <option value="happy">Happy</option>
              <option value="sad">Sad</option>
            </select>
          </label>
        </div>
        <button type="submit" disabled={!mood || loading}>
          Submit
        </button>
      </form>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {activities.length > 0 && (
        <div>
          {mood === "sad" && (
            <>
              <h3>Activity to Cheer Up:</h3>
              <p>{activities[0]}</p>
            </>
          )}
          {mood === "happy" && (
            <>
              <h3>Message:</h3>
              <p>hey great!</p>
            </>
          )}
        </div>
      )}
      {showColoredPaper && (
        <div className="paper-container">
          {[...Array(50)].map((_, index) => (
            <div key={index} className="colored-paper"></div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MoodForm;

