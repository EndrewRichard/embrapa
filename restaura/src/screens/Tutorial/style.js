import React from 'react';
import styled from 'styled-components/native';
import { View, Text, Image, StyleSheet } from 'react-native'


export const Container = styled.SafeAreaView`
    flex: 1;
    background-color: #ffffff;
`;

export const Scroller = styled.ScrollView`
    flex: 1;
    padding: 20px;
`;

export const HeaderArea = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;
export const HeaderTitle = styled.Text`
    width: 250px;
    font-size: 23px;
    font-weight: bold;
    color: #01791a;
`;

export const styles = StyleSheet.create ({
   container: {
      alignItems: 'center',
      marginTop: 100,
      padding: 20
   },
   text: {
      color: '#41cdf4',
   },
   capitalLetter: {
      color: 'black',
      fontSize: 20
   },
   wordBold: {
      fontWeight: 'bold',
      color: 'black'
   },
   italicText: {
      color: 'black',
      fontStyle: 'italic'
   },
   hyperlinkStyle: {
      color: 'blue',
    },
   textShadow: {
      textShadowColor: 'black',
      textShadowOffset: { width: 2, height: 2 },
      textShadowRadius : 5
   }
})