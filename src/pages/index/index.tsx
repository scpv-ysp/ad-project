import React, { Component } from "react";
import { Select, Button, DatePicker } from 'antd';
import Header from "@components/Header";
import Footer from "@components/Footer";
import { SettingOutlined } from '@ant-design/icons';
import { RouteComponentProps } from 'react-router-dom';
import { ThemeContext, ThemeType } from 'context/theme';
import Account from "./components/Account";
import IndexBanner from "./components/IndexBanner";
import ProductNews from "./components/ProductNews";
import PromotionCard from "./components/PromotionCard";
import ProductCard from "./components/ProductCard";
import DataTrend from "@components/DataTrend";
// import axios from "axios";
import './style.scss';
const { Option } = Select;

interface Props extends RouteComponentProps { }

interface States {
    theme: ThemeType
}
class IndexPage extends Component<Props> {
    state = {
        theme: {
            buttonType: 'primary'
        }
    }
    componentDidMount() {
        // axios.get('./ad/index/gray').then((res) => {
        //     console.log('res',res.data)
        // }).catch((error) => {
        //     console.log(error)
        // })
    }
    hanleContextChange = () => {
        const { theme } = this.state;
        const newButtonType = theme.buttonType === 'primary' ? 'default' : 'primary';
        this.setState({
            theme: {
                buttonType:newButtonType
            }
        })
    }
    render() {
        const { history } = this.props;
        const { theme } = this.state;
        return (
            <ThemeContext.Provider value={theme}>
                <div className="index-page">
                <div className="head-box">
                    <Header
                        history={history}
                    />
                </div>
                <div className="content-box">
                    <div className="left-content">
                        <div className="chart-area">
                            <div className="header-box">
                                    <div className="title">数据趋势</div>
                                    <div className="select-area">
                                        <Select
                                            defaultValue="0"
                                            style={{ width: 120 }}
                                            // onChange={this.handlePromotionChange}
                                            size="small"
                                        >
                                            <Option value="0">全部推广产品</Option>
                                            <Option value="1">搜索推广</Option>
                                            <Option value="2">一站式推广</Option>
                                            <Option value="3">合约推广</Option>
                                            <Option value="4">知识营销</Option>
                                        </Select>
                                        <DatePicker
                                            // onChange={this.handalDateChange}
                                            size="small"
                                            style={{ marginLeft: 10 }}
                                            placeholder="请选择日期"
                                        />
                                    </div>
                            </div>
                            <DataTrend />
                        </div>
                        <div className="promotion-card-area">
                            <PromotionCard
                                history={history}
                            />
                        </div>
                        <div className="product-card-area">
                            <ProductCard />
                        </div>
                    </div>
                    <div className="right-content">
                        <div className="account-area">
                            <Account />
                        </div>
                        <div className="index-banner-area">
                            <IndexBanner />
                        </div>
                        <div className="product-news-area">
                            <ProductNews />
                        </div>
                    </div>
                </div>
                <div className="footer-box">
                    <Footer />
                </div>
                    <div className="setting-btn">
                        <SettingOutlined
                            style={{ fontSize: 36, color: '#326fff' }}
                            onClick={this.hanleContextChange}
                        />
                    </div>   
                </div>
            </ThemeContext.Provider>
            
        )
    }
}
export default IndexPage;