import React, {useState, useEffect} from 'react'; 
import { Text } from 'react-native';
import { Container } from './style';
import { useNavigation, useRoute } from '@react-navigation/native';
import Swiper from 'react-native-swiper';
import { Nomes, NomeArea, FakeSwiper, Scroller, PageBody, InfoArea, CarrosselArea, SwipeDotActive, SwipeDot } from '../Data/style';


export default () => {
    const navigation = useNavigation();
    const route = useRoute();

    const [userInfo, setUserInfo] = useState({
        nome: route.params.nome,
        especie: route.params.especie,
        link: route.params.link,
        autor: route.params.autor
        
    });


    return (
        <Container>
            
        <Scroller>
        <FakeSwiper></FakeSwiper>

        <PageBody>
            <NomeArea>
                <Nomes>
                modal{userInfo.nome}

                </Nomes>


            </NomeArea>
            <InfoArea></InfoArea>
            <CarrosselArea></CarrosselArea>

        </PageBody>

      </Scroller>

 
        </Container>
    );
}

