import React, { Component } from "react";
import './style.scss';

interface IProps { 
    
 }

interface IStates { }

class MenuItem extends Component<IProps, IStates> {
    state = {}
    render(){
        return (
            <div className="header-box">
                header 组件
            </div>
        )
    }
}
export default MenuItem;