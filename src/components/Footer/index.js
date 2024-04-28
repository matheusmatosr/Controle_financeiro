import React from "react";
import * as C from "./styles";

const Footer = () => {
  const linkedinLink = "https://www.linkedin.com/in/matheus-matos-1a523221b/";

  return (
    <C.FooterContainer>
      <C.FooterContent>
        @2022 | Desenvolvido por{" "}
        <a href={linkedinLink} target="_blank" rel="noopener noreferrer">
          Matheus Matos
        </a>
      </C.FooterContent>
    </C.FooterContainer>
  );
};

export default Footer;
