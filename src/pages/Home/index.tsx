import { CardProduto } from "../../components/CardProduto";
import { Footer } from "../../components/Footer";
import { Menu } from "../../components/Menu";

export const Home = () => {
    return (
        <>
            <Menu />
            <div
                style={{
                    paddingLeft: "6%",
                    paddingRight: "6%",
                }}
            >
                <h2>Produtos em destaque</h2>
                <div
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        flexWrap: "wrap",
                    }}
                >
                    <CardProduto
                        titulo="Alou beleza ?"
                        precoDe="200,00"
                        precoPor="150,00"
                        textButton="Ver mais"
                    />
                </div>
            </div>
            <Footer/>
        </>
    );
};
