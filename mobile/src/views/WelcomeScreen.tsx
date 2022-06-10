import React, { FunctionComponent } from 'react';
import { View } from 'react-native';
import styled from 'styled-components/native';
import { StatusBar } from 'expo-status-bar';
import { Container } from '../components/shared';
import { colors } from '../components/colors';
import Svg, { Path } from 'react-native-svg';
import BigText from '../components/Texts/BigText';
import RegularText from '../components/Texts/RegularText';
import SmallText from '../components/Texts/SmallText';

const WelcomeContainer = styled(Container)`
    background-color: ${colors.primary};
    justify-content: center;
    width: 100%;
    height: 100%;
`;

const TopSection = styled.View`
    flex: 1;
    width: 100%;
    max-height: 55%;
`;

// export const SvgComponent = (props: any) => {
//     return (
//       <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" {...props}>
//         <Path
//           fill="#71bf45"
//           d="M0 192l80 10.7c80 10.3 240 32.3 400 16C640 203 800 149 960 144s320 37 400 58.7l80 21.3V0H0z"
//         />
//       </Svg>
//     )
//   }

const TopImage = styled.Image`
    margin-top: 30px;
    width: 60%;
    height: 100%;
    resizeMode: contain;
    align-self: center;
`;

const BottomSection = styled.View`
    flex: 1;
    width: 100%;
    padding: 0 20px;
`;

const WelcomeScreen: FunctionComponent = () => {
    return (
        <>
            <StatusBar style="light" />
            <WelcomeContainer>
                <TopSection>
                    <TopImage source={require('../../assets/ecopark-icon.png')} />
                </TopSection>
                <BottomSection>
                    <BigText textStyles={{ width: "70%", marginBottom: 25 }}>
                    Welcome
                    </BigText>
                    <RegularText textStyles={{ marginBottom: 25 }}>
                    
                    </RegularText>
                </BottomSection>
            </WelcomeContainer>
        </>
    );
}



export default WelcomeScreen;