import React, { Component } from "react";
import { Empty } from "antd";
import './style.scss';

interface IProps { }

interface IStates { }

class UserPortrait extends Component<IProps, IStates> {
    state = {
        isEmpty: true,
    }
    render() {
        const { isEmpty } = this.state
        return (
            <div className="user-portrait-component-box">
                {
                    isEmpty ? (
                        <Empty
                            description="您的广告展现积累用户较少，无法得出准确用户画像"
                        />
                    ): (
                        <div>用户画像信息</div>   
                    )
                }
            </div>
        )
    }
}
export default UserPortrait;