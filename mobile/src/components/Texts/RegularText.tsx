import React, { FunctionComponent } from 'react';
import styled from 'styled-components/native';

import { colors } from '../colors';

const StyledText = styled.Text`
    color: ${colors.gray};
    font-size: 15px;
    text-align: left;
    font-family: 'Lato-Bold';
`;

import { TextProps } from './types';


const regularText: FunctionComponent<TextProps> = (props) => {
    return (
        <StyledText style={props.textStyles}>{props.children}
        
        </StyledText>
    );
}

export default regularText;
