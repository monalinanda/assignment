import React from 'react';
import { ButtonWrapper } from '../styles';



export default function Button(props) {
    return (

        <ButtonWrapper className={props.className} type={props.type} onClick={props.onClick}>
        {props.name}
    </ButtonWrapper>
    
    )
}
