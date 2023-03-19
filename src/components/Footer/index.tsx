import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { BoxSocialMedias, FooterSctruture } from "./styles";

export const Footer = () => {
    return (
        <FooterSctruture>
            <p>Copyright &copy; 2023 - Carolina Aguera</p>
            <BoxSocialMedias>
                <FaInstagram />
                <FaFacebook />
                <FaTwitter />
            </BoxSocialMedias>
        </FooterSctruture>
    );
};
