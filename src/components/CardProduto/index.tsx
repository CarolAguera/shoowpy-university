import {
    Card,
    ButtonDetails,
    StrongText,
    ParagrafoText,
    Title,
} from "./styles";

export interface CardProdutoProps {
    titulo: string;
    precoDe: string;
    precoPor: string;
    textButton: string;
}

export const CardProduto = ({
    titulo,
    precoDe,
    precoPor,
    textButton,
}: CardProdutoProps) => {
    return (
        <Card>
            <img
                alt="prof"
                src="https://raw.githubusercontent.com/profchines/imagensProjetoU2/main/cozinhap.jpg"
            />
            <Title color="#1E90FF">{titulo}</Title>
            <ParagrafoText>{precoDe}</ParagrafoText>
            <StrongText>{precoPor}</StrongText>
            <ButtonDetails color="red">{textButton}</ButtonDetails>
        </Card>
    );
};
