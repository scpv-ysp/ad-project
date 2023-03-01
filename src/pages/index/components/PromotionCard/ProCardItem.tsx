import React, { Component } from "react";
import { Button, Modal, Radio, InputNumber } from 'antd';
import { ThemeContext } from "context/theme";
import { EditOutlined } from '@ant-design/icons';
import './style.scss';


interface IProps {
    name: string;
    cost: number;
    desc: string;
    btnStatus: boolean;
    budget: number;
    type: number;
    onEnter: () => void;
}

interface IStates { 
    editModalShow: boolean;
    budgetOption: number;
    budgetValue: number | null;
}


class ProCardItem extends Component<IProps, IStates> {
    state = {
        editModalShow: false,
        budgetOption: 1,
        budgetValue: 0,
    }
    
    openEditModalShow = () => {
        this.setState({
            editModalShow: true
        })
    }
    handleBudgetOk = () => {
        this.setState({
            editModalShow: false
        })
    }
    handleBudgetCancel = () => {
        this.setState({
            editModalShow: false
        })
    }
    handleClick = () => {
        const { onEnter } = this.props;
        if(onEnter) {
            onEnter()
        }
    }

    handleBudgetChange = (newBudgetNumber: number | null) => {
        this.setState({
            budgetValue:newBudgetNumber,
        })
    }
    handleRadioChange = (optionValue: number) => {
        this.setState({
            budgetOption:optionValue,
        })
    }
    render() {
        const { name, desc, btnStatus, type, cost = 0, budget = 0 } = this.props;
        const { editModalShow, budgetOption, budgetValue } = this.state;

        const radioStyle = {
            display: 'block',
            height: '35px',
            lineHeight: ' 35px'
        }



        return (
            <div className="pro-card-item-component-box">
                <div className="name">{name}</div>
                {
                    type === 1 ? (
                        <div>
                            <div className="wrap">
                                <div className="label">消费（元）</div>
                                <div className="value">{ cost }</div>
                            </div>
                            <div className="wrap">
                                <div className="label">日预算（元）</div>
                                <div className="value">
                                    {budgetValue}
                                    {
                                        <EditOutlined
                                            onClick={this.openEditModalShow}
                                            style={{marginLeft: 5}}
                                        />
                                    }
                                </div>
                            </div>
                        </div>    
                    ) : (
                            <div className="desc">{desc}</div> 
                    )
                }
                {
                    btnStatus ? (
                        <div className="btn-wrap">
                            <Button
                                type={this.context.buttonType}
                                onClick={this.handleClick}
                            >
                                进入
                            </Button>
                        </div>
                    ) : (
                            <div className="btn-wrap">
                                <Button type="primary" size="small" disabled>不可编辑</Button>
                            </div>
                    )
                }

                <Modal
                    title={`${name}预算设置`}
                    visible={editModalShow}
                    onOk={this.handleBudgetOk}
                    onCancel={this.handleBudgetCancel}
                    okText="确定"
                    cancelText="取消"
                    className="budget-modal"
                    width={700}
                >
                    <Radio.Group onChange={(e) => { this.handleRadioChange(e.target.value)} } value={budgetOption}>
                        <Radio value={1} style={radioStyle}>不限定预算</Radio>
                        <Radio value={2} style={radioStyle}>
                            <span>预算</span>
                            <span className="radio-hint">当您预算范围内出现余额不足，则可能产生透支消费，欠款将在下次充值价款后自动扣除</span>
                        </Radio>
                    </Radio.Group>
                    {
                        budgetOption === 2 && (
                            <div className="input-number">
                                <InputNumber min={1} max={100000} defaultValue={budgetValue} onChange={(newBudgetNumber: number | null)=>{this.handleBudgetChange(newBudgetNumber)}}  />
                                <span className="unit">元</span>   
                                <span className="hint">为了保证您的推广效果，每日预算需≥50元</span>   
                            </div>
                        )
                    }
                    <div className="bugget-hint">到达预算下线时间：最近30天内，您的账户没有因超出账户预算而下线</div>
                </Modal>
            </div>
        )
    }
}

ProCardItem.contextType = ThemeContext;
export default ProCardItem;