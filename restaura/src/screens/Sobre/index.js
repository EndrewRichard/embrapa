import React, {Component} from 'react'; 
import { View, Text, Image, StyleSheet, Linking, TouchableOpacity, Modal, Pressable } from 'react-native'
import { Container, LoadingIcon, Title, Scroller, styles } from './style';
import { useNavigation } from '@react-navigation/native';



export default () => {
    const navigation = useNavigation();
    const handleClick = (nome, linkedin, orkut) =>{
        navigation.navigate('Modal',{
            nome,
            linkedin,
            orkut
            
        });}


      return(
        <Container>
            <Scroller>
            <Text style = {styles.wordBold}>Realização</Text>

            <Image 
                style={{width: '100%', height: 100}}
                resizeMode={'contain'}
                source={require('../../assets/tecnologia_embrapa.png')}
            />
            <Text><Text style = {styles.wordBold}>Restaura </Text>
                 é um aplicativo movel que permite recuperar informações sobre espécies nativas da Mata Atlântica. Seu intuito é facilmente ser utilizado.
                 Ele foi concebido e organizado para ser utilizado por leigos ou especialistas em Agropecuaria.
            </Text>
            <Text>{'\n'}
                 As informações fornecidas pelo <Text style = {styles.wordBold}>Restaura </Text> são públicas e podem facilmente
                 ser utilizadas por pessoas ou organizações que tenham interesse em contribuir na recuperação desse importante bioma brasileiro.
            </Text>
            <Text>{'\n'}
               O <Text style = {styles.wordBold}>Restaura </Text> tem como objetivo facilitar a difusão de informações sobre as especies vegetais que podem ser utilizadas em projetos de reflorestamento
            </Text>
            <Text>{'\n'}
               A primeira versão do <Text style = {styles.wordBold}>Restaura </Text> foi totalmente concebido, projetado e desenvolvido por uma euqipe multidisciplinar 
               de alunos da <Text style = {styles.wordBold}>Universidade Federal Rural do Rio de Janeiro (UFRRJ) </Text>
               durante as etapas da hackathon Academico da Embrapa. Os desenvolvedores sao membros dos cursos de Sistemas de Inforação e Agronomia da universidade e membros do programa
               {' '} 
               <Text 
                  style={styles.hyperlinkStyle} 
                  onPress={() => { 
                     Linking.openURL('https://r1.ufrrj.br/petsi'); 
                  }}> 
                PET-SI da UFRRJ.</Text> 
                {'\n'}
                A Equipe de desenvolvimento levava o titulo de Dobereiner, uma homenagem a grande pesquisadora
            </Text>

            <Text>{'\n'}{'\n'}
            <Text style = {styles.wordBold}>Equipe de desenvolvimento 1° versão </Text>
            
            {'\n'}

        <Text onPress={handleClick()}>
                nome do cara
        </Text>


                  

            </Text>

            <Image 
                style={{width: '100%', height: 100}}
                resizeMode={'contain'}
                source={require('../../assets/tecnologia_embrapa.png')}
            />         
            <Image 
                style={{width: '100%', height: 100}}
                resizeMode={'contain'}
                source={require('../../assets/tecnologia_embrapa.png')}
            /> 
            </Scroller>
        </Container>
      );
}


