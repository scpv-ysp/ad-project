import React, { Component } from "react";
import './style.scss';

interface IProps { }

interface IStates { }

class Account extends Component<IProps, IStates> {
    state = {}
    render(){
        return (
            <div>
                Account 组件
            </div>
        )
    }
}
export default Account;