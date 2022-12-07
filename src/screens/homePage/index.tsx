import { useNavigation } from "@react-navigation/native";
import { ButtonLink } from "../../components/ButtonLink";
import { TextTitle } from "../../components/TextTitle";
import { ContainerHomePage } from "./styles";


export default function Home() {

    const navigation = useNavigation();


    return (

        <ContainerHomePage>
            <TextTitle text="Lembrete Urgente" />

            <ButtonLink textButton="Criar lembrete" eventButton={() => navigation.navigate('createReminder')} />
            <ButtonLink textButton="Visualizar lembrete" eventButton={() => navigation.navigate('viewReminder', {})} />
        </ContainerHomePage>
    );

}