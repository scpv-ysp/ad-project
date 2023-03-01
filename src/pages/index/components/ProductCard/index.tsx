import React, { Component } from "react";
import PRODUCTSERVICE_CONFIG from 'common/constants/productService';
import './style.scss';

interface IProps { }

interface IStates { }

class ProductCard extends Component<IProps, IStates> {
    state = {}

    handleClick = (url: string) => {
        window.location.href = url;
    }

    render(){
        return (
            <div className="product-service-component-box">
                <div className="title">营销服务</div>
                {
                    PRODUCTSERVICE_CONFIG.map((productItem, index) => (
                        <div
                            className="product-service-item"
                            key={`product-item-${index.toString()}`}
                            onClick={() => { this.handleClick(productItem.link) }}
                        >
                            <img src={productItem.marketToolImgUrl} alt="" />
                            <div className="name">{productItem.marketToolTitle}</div>
                        </div>
                    ))
                }
            </div>
        )
    }
}
export default ProductCard;