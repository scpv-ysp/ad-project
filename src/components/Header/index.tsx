import React, { Component } from "react";
import { MENU_CONFIG } from 'common/constants/menu'; 
import './style.scss';

interface IProps { }

interface IStates { }

class Header extends Component<IProps, IStates> {
    state = {}
    render(){
        return (
            <div className="header-box">
                header 组件
            </div>
        )
    }
}
export default Header;