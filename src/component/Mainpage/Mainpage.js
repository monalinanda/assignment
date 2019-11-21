import React, { Component } from 'react';
import Content from "../Content";
import Image from "../Image/image";
import { MainpageWrapper } from '../styles';



export default class Mainpage extends Component {
   
    render() {
        //const post = {this.props}
        return (
            <MainpageWrapper>
                <Image  image={this.props.image}/>
                <Content text={this.props.title}/>
            </MainpageWrapper>
        )
    }
}
