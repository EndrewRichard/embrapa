import React from 'react';
import styled from 'styled-components/native';

const Area = styled.TouchableOpacity`
    background-color: #02971f;
    margin-bottom: 20px;
    border-radius: 20px;
    padding: 15px;
    flex-direction: row;
`;

const Avatar = styled.Image`
    width: 88px;
    height: 88px;
    border-radius: 20px;
`;

const InfoArea = styled.View`
    margin-right: 20px;
    justify-content: space-between;
`;

const UserName = styled.Text`
    font-size: 17px;
    font-weight: bold;
    color: #ffffff;
`;

const SeeProfileButton = styled.View`
    width: 85px;
    margin-left: 250px;

    height: 26px;
    border-left: 0;
    border: 1px solid #ffffff;
    border-radius: 10px;
    justify-content: center;
    align-items: center;
`;

const SeeProfileButtonText = styled.Text`
    font-size: 13px;
    color: #ffffff;
    margin-right: 0px;
`;
const Infos = styled.Text`
    font-size: 14px;
    color: #ffffff;
  
`;


export default ({data}) => {
    return (
        <Area>
            <InfoArea>
                <UserName>{data.ESPECIE}</UserName>
                <Infos>Nome: {data.NOME_VULGAR}</Infos>
                <Infos>Familia: {data.FAMILIA}</Infos>
                <Infos>Tipo: {data.FORMA_BIOLOGICA}</Infos>

                <SeeProfileButton>
                    <SeeProfileButtonText>Ver mais</SeeProfileButtonText>
                </SeeProfileButton>
            </InfoArea>
        </Area>
    );
}