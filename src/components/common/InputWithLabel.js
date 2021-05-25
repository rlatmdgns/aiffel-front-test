import React from 'react';
import styled from 'styled-components';

// 두개가 함께 있을땐 상단 (그 사이) 에 여백을 준다
const Wrapper = styled.div`
    & + & {
        margin-top: 20px;
    }
`;

const Label = styled.div`
    font-size: 16px;
    margin-bottom: 10px;
    font-weight: 700;
`;

const Input = styled.input`
    width: 100%;
    padding:10px 10px;
    border:1px solid #ddd;
    border-radius: 4px;
    outline: none;
`;

const InputWithLabel = ({label, ...rest}) => (
    <Wrapper>
        <Label>{label}</Label>
        <Input {...rest}/>
    </Wrapper>
);

export default InputWithLabel;