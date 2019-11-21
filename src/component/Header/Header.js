
import React from 'react';
import { HeaderWrapper } from '../styles';


export default function Header(props) {
    return (
        <HeaderWrapper>
            <h1 className={props.className}>{props.text}</h1>
        </HeaderWrapper>
    )
}
