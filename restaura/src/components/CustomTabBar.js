import React, { useContext } from 'react';
import styled from 'styled-components/native';
import { Svg } from 'react-native-svg';


import CatalogoIcon from '../assets/icons-tab/catalogo.svg';
import LocalIcon from '../assets/icons-tab/local.svg';
import TutorialIcon from '../assets/icons-tab/tutorial.svg';
import FavoritosIcon from '../assets/icons-tab/favoritos.svg';
import SobreIcon from '../assets/icons-tab/info.svg';


const TabArea = styled.View`
    height: 60px;
    background-color: #026014;
    flex-direction: row;
`;
const TabItem = styled.TouchableOpacity`
    flex: 1;
    justify-content: center;
    align-items: center;
`;
const TabItemCenter = styled.TouchableOpacity`
    width: 70px;
    height: 70px;
    justify-content: center;
    align-items: center;
    background-color: #FFF;
    border-radius: 35px;
    border: 3px solid #01791a;
    margin-top: -20px;
`;

export default ({ state, navigation }) => {


    const goTo = (screenName) => {
        navigation.navigate(screenName);
    }
    return (
        <TabArea>
            <TabItem onPress={()=>goTo('Estado')}>
                <LocalIcon style={{opacity: state.index===0? 1 : 0.5}} width="24" height="24" fill="#FFFFFF" />
            </TabItem>
            <TabItem onPress={()=>goTo('Tutorial')}>
                <TutorialIcon style={{opacity: state.index===1? 1 : 0.5}} width="24" height="24" fill="#FFFFFF" />
            </TabItem>
            <TabItemCenter onPress={()=>goTo('Catalogo')}>
                <CatalogoIcon width="32" height="32" fill="#4EADBE" />
            </TabItemCenter>
            <TabItem onPress={()=>goTo('Favoritos')}>
                <FavoritosIcon style={{opacity: state.index===3? 1 : 0.5}} width="24" height="24" fill="#FFFFFF" />
            </TabItem>
            <TabItem onPress={()=>goTo('Sobre')}>
                <SobreIcon style={{opacity: state.index===3? 1 : 0.5}} width="24" height="24" fill="#FFFFFF" />
            </TabItem>
        </TabArea>
    );
}