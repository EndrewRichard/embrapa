import React, { useEffect } from 'react'; 
import { Text, Image } from 'react-native';
import { Container, LoadingIcon, Title } from './style';
import { useNavigation } from '@react-navigation/native';



export default () => {
    const navigation = useNavigation();


        useEffect(() => {

        setTimeout(() => {
        
            navigation.reset({
                routes:[{name:'MainTab'}]
            });
            
        }, )
        }, []);
    






    return (
        <Container>
            <Image 
                style={{width: '100%', height: 100}}
                resizeMode={'contain'}
                source={require('../../assets/icons-hd/icon_launcher.png')}
            />
            <Text>RESTAURA MATA ATLANTICA</Text>

            <LoadingIcon size="large" color="#ffffff"/>
            
            <Image 
                style={{width: '100%', height: 100}}
                resizeMode={'contain'}
                
                source={require('../../assets/icons-hd/ic_logo_embrapa_white.png')}
            />
            <Image 
                style={{width: '100%', height: 100}}
                resizeMode={'contain'}
                bottom={'0%'}
                source={require('../../assets/icons-hd/ic_logo_pet_white.png')}
            />
        </Container>


    );


}