import { useEffect, useState } from "react";
import { ButtonLink } from "../../components/ButtonLink";
import { TextTitle } from "../../components/TextTitle";
import { BoxTextLembrete, ContainerHomePage, TextLembreteBox } from "./styles";

import { useNavigation, useRoute } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";


interface RouteParams {
    textLembrete: string;
}


export default function ViewReminder() {

    const [textLembreteValue, setTextLembreteValue] = useState('')

    const navigation = useNavigation();

    const route = useRoute();
    const { textLembrete } = route.params as RouteParams;


    useEffect(() => {

        async function LoadLembretes() {
            try {
                const data = await AsyncStorage.getItem('@lembretes');

                const value = data ? JSON.parse(data) : ''
                setTextLembreteValue(value)
            } catch (error) {
                console.log(error)
            }
        }

        LoadLembretes();

    }, [textLembreteValue])

    return (

        <ContainerHomePage>
            <TextTitle text="Seu Lembrete" />

            <BoxTextLembrete>
                <TextLembreteBox>
                    {textLembreteValue}
                </TextLembreteBox>
            </BoxTextLembrete>

            <ButtonLink textButton="Voltar para o ínicio" eventButton={() => navigation.navigate('home')} />
        </ContainerHomePage>
    );

}