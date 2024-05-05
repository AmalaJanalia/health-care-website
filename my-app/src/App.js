// App.js
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoginForm from "./components/LoginForm";
import Dashboard from "./components/Dashboard";
import HomePage from "./components/HomePage";
import { UserProvider } from "./contexts/UserContext";
import "./App.css";
import MoodForm from "./components/mood-form";
import Calendar from "./components/Calender";
import NoteForm from "./components/Noteform"; // Import the new component

const App = () => {
  return (
    <UserProvider>
      <Router>
        <div className="App">
          <Switch>
            <Route path="/calendar" component={Calendar} />
            <Route path="/mood-form" component={MoodForm} />
            <Route path="/login" component={LoginForm} />
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/notes" component={NoteForm} /> {/* New route for NotesPage */}
            <Route exact path="/" component={HomePage} /> {/* Use exact to match only the root path */}
          </Switch>
        </div>
      </Router>
    </UserProvider>
  );
};

export default App;
