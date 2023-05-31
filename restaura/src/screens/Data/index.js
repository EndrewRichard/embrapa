import React from 'react'; 
import { Text } from 'react-native';
import { Container } from './style';

export default () => {
    return (
        <Container>
            <Text>
                Data
            </Text>
        </Container>
    );
}


const styles = StyleSheet.create ({
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
    textShadow: {
       textShadowColor: 'black',
       textShadowOffset: { width: 2, height: 2 },
       textShadowRadius : 5
    }
 })