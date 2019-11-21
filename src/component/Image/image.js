import React from 'react';
import { ImageWrapper } from '../styles';

export default function image(props) {
    return (
        <ImageWrapper>
            <img alt="image" src={props.image}/>
        </ImageWrapper>
    )
}
