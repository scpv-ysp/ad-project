import React, { Component } from "react";
import { Button } from 'antd';
import './style.scss';

interface IProps {
    // fetchUserBalance: (params: any) => void;
    // userBalance: any;
 }

interface IStates { }

class Account extends Component<IProps, IStates> {
    state = {
        status: 0,  // 0 账户金未到，1账户金已到
        balance: 0,
        creditValue: 0,
    }
    render() {
        const {
            status, balance, creditValue
        } = this.state

        return (
            <div className="account-component-box">
                <div>
                    你好，ysp
                </div>
                <div className="example">
                    {
                        status === 0 ? (
                        <div className="status">开户金未到</div>
                        ) : (
                        <div className="status">开户金已到</div> 
                        )                    }
                </div>
                <div className="balance">
                    <div>
                        <div className="text">推广余额</div>
                    </div>
                    <div className="value">{balance}</div>
                    <Button type="primary" size="small">充值</Button>
                </div>
                <div className="credit">
                    <div>
                        <div className="text">合规信用值</div>
                        <div className="value">{creditValue}</div>
                    </div>
                    <div className="detail-text">详情</div>
                </div>
            </div>
        )
    }
}
export default Account;