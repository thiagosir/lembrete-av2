import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { ButtonLink } from "../../components/ButtonLink";
import { TextTitle } from "../../components/TextTitle";
import { ContainerHomePage, TextAreaLembrete } from "./styles";
import AsyncStorage from "@react-native-async-storage/async-storage";




export default function CreateReminder() {

    const [textLembrete, setTextLembrete] = useState('')

    const navigation = useNavigation();

    async function handleCreateReminder() {
        await AsyncStorage.setItem('@lembretes', JSON.stringify(textLembrete))
        navigation.navigate("viewReminder", { textLembrete })
        setTextLembrete('')
    }


    return (

        <ContainerHomePage>
            <TextTitle text="Criar Lembrete" />
            <TextAreaLembrete
                placeholder="Digite seu problema"
                onChangeText={setTextLembrete}
                value={textLembrete}

            />

            <ButtonLink textButton="Salvar Lembrete" eventButton={handleCreateReminder} />
        </ContainerHomePage>
    );

}