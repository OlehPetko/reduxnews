import React from 'react'
import './App.css'
import {connect} from 'react-redux'
import DashBoard from "./DashBoard";

function App() {
    return (
        <div className="App">
            <span>{(new Date()).toLocaleTimeString()}</span>
            <DashBoard/>

        </div>
    );
}

export default App
