import React, { Component } from "react";
import { MenuItemInfoType } from './types'
import './style.scss';

interface IProps { 
    isActive?: boolean;
    onClick?: (url: string) => void;
    menuItemInfo: MenuItemInfoType;
 }


class MenuItem extends Component<IProps> {
    handleMenuChilk = (url: string) => {
        const { onClick } = this.props;
        if (onClick) {
            onClick(url)
        }
    }
    render() {
        const { menuItemInfo, isActive } = this.props;
        
        return (
            <div className="index-menuItem-component-box">
                <div className="menu-item-title">
                    {menuItemInfo.name}
                    {
                        menuItemInfo.menuChildren.length > 0 && ( <span className="arrow-icon"> </span> )
                    }
                    {
                        menuItemInfo.menuChildren.length > 0 && (
                            <div className="menu-children-box">
                                {
                                    menuItemInfo.menuChildren.map((menuChild, index) => (
                                        <div
                                            className="menu-child"
                                            key={`menu-child${index.toString()}`}
                                        >
                                            <span onClick={() => { this.handleMenuChilk(menuChild.url); }}>{ menuChild.label }</span>
                                        </div>
                                    ))
                                }
                            </div>
                        )
                    }
                </div>
                <div className="bottom-line"> </div>
                {
                    isActive && (<div className="bottom-line-active"></div>)
                    
                }
            </div>
        )
    }
}
export default MenuItem;