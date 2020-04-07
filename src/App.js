import React from "react";
import {
    BrowserRouter as Router,
    Link
} from "react-router-dom";

function App() {
    return (
        <Router>
            <div>
                <h2>React app 2 is mounted!</h2>
                <Link to="/app1">Link to app 1</Link>
            </div>
        </Router>
    )
}

export default App;