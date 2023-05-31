import React, { useState, useEffect } from 'react'; 
import { Container, Scroller, HeaderArea, HeaderTitle, SearchButton, NameArea, NameInput, NameFinder, ListArea, LoadingIcon } from './style';
import { Platform, RefreshControl } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import SearchIcon from '../../assets/icons-tab/search.svg';

import NameIcon from '../../assets/icons-tab/search.svg';
import DataItem from '../../components/DataItem'
import api from '../../api';

export default () => {

    const navigation = useNavigation();

    const [loading, setLoading] = useState(false);
    const [list, setList] = useState([]);
    const [refreshing, setRefreshing] = useState(false);



    const [nameText, setNameText]= useState('');

    const getDados = async () => {
        setLoading(true);
        setList([]);
        
        let res = await api.getDados();
        setList(res.Dado);
        console.log(res.Dado);



        setLoading(false);
    }
    useEffect(()=>{
        getDados();
    }, []);

    return (
        <Container>
                <Scroller>

                    <HeaderArea>
                        <HeaderTitle>Listagem por localidade</HeaderTitle>
                        <SearchButton>
                            <SearchButton widht="26" height="26" fill="#FFF"/>
                        </SearchButton>
                    </HeaderArea>

                    <NameArea>
                        <NameInput
                        placeholder = 'Selecione o Estado:'
                        palceholder-TextColor ="#ffeeff"
                        value={nameText}
                        onChangeText={t=>setNameText(t)}
                        />
                        

                        <NameFinder>
                        <NameIcon widht="26" height="26" fill="#FFF"/>
                        </NameFinder>


                    </NameArea>

                    {loading &&
                    <LoadingIcon size="large" color="#FFFFFF" />
                }
                 
                    <ListArea>
                    {list?.map((item, k)=>(
                        <DataItem key={k} data={item} />
                    ))}

                </ListArea>                    
                </Scroller>
        </Container>
    );
}


