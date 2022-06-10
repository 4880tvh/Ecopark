import React from 'react';
import styled from 'styled-components/native';

import { colors } from '../colors';
import RegularText from '../../components/Texts/RegularText';

import {
  GestureResponderEvent,
  StyleProp,
  TextStyle,
  ViewStyle,
} from 'react-native';  

export const ButtonView = styled.TouchableOpacity`
  align-items: center;
  background-color: ${colors.kiwi};
  width: 100%;
  padding: 20px;
  justify-content: center;
  border-radius: 20px;
`;

interface ButtonProps {
  btnStyle?: StyleProp<ViewStyle>;
  onPress: (event: GestureResponderEvent) => void | undefined;
  textStyle?: StyleProp<TextStyle>;
  children: React.ReactNode;
}

const RegularButton = (props: any) => {
  return (
    <ButtonView onPress={props.onPress} {...props}>
      <RegularText textStyles={[{ color: colors.white, fontSize: 18 }, { ...props?.textStyle }]}>
        {props.children}
      </RegularText>
    </ButtonView>
  );
};

export default RegularButton;