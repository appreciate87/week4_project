import React, { useState } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import InputSample  from "./InputSample";


// onChange.~
// event.target.value


const Detail = () => {



    return (
        <>
            <Wrap>            
                <Title>단어 추가하기</Title>
            </Wrap>
                <InputSample />

        </>
    )
};


const Wrap = styled.div`
    width: 100%;
    height: 100%;
    margin: auto;
`;



const Title = styled.p`
    text-align: left;
    font-size: 25px;
`;




export default Detail;