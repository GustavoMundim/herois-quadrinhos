// Slider.js
import { PersonagemSlider, ListaPersonagens, StyledButton } from "./Home.style";
import React, { useState } from "react";
import Herois from "./CartaoHerois";

const Slider = () => {
    const totalCartoes =  10;
    const [personagem, setCartao] = useState(0);

    const ButtonClick = (direcao_seta) => {
        if (direcao_seta === 'anterior') {
            setCartao(prevState => (prevState === 0 ? totalCartoes - 1 : prevState - 1));
        } else if (direcao_seta === 'proximo') {
            setCartao(prevState => (prevState === totalCartoes - 1 ? 0 : prevState + 1));
        }
    }

    return (
        <PersonagemSlider>
            <StyledButton id="btn-voltar" onClick={() => ButtonClick('anterior')}>
                <i className='bx bx-left-arrow-alt'></i>
            </StyledButton>
            <ListaPersonagens>
                <Herois id={personagem} />
            </ListaPersonagens>
            <StyledButton id="btn-avancar" onClick={() => ButtonClick('proximo')}>
                <i className='bx bx-right-arrow-alt'></i>
            </StyledButton>
        </PersonagemSlider>
    );
}

export default Slider;
