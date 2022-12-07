import { ContainerButtonLink, TextButton } from "./style";

interface PropsButtonLink {
    textButton: string;
    eventButton: () => void;

}

export const ButtonLink = (props: PropsButtonLink) => {
    return (
        <>
            <ContainerButtonLink onPress={props.eventButton}>
                <TextButton>
                    {props.textButton}
                </TextButton>
            </ContainerButtonLink>
        </>
    );
}