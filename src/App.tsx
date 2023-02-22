import React, { Component } from "react";
import './style.scss';

interface Props { }

class App extends Component<Props> {
    render(){
        return (
            <div className="box">hello,React<span>123441111</span></div>
        )
    }
}
export default App;