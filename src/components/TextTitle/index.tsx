import { TextTitleStyles } from "./styles";

interface PropsTextTitle {
    text: string;
}


export const TextTitle = (props: PropsTextTitle) => {
    return (
        <>
            <TextTitleStyles>
                {props.text}
            </TextTitleStyles>
        </>
    );
}