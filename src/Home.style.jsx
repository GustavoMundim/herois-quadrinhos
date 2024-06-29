import styled from 'styled-components'



export const Cabecalho = styled.header `
    
    text-align: center;
    padding: 10px;
    margin-bottom: 180px;
    // box-shadow: rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset;
    
    & h1 {
        color: white;
        text-shadow: 5px 3px 18px black;
        letter-spacing: 0.5rem;
        font-size: 35px;
        text-transform: uppercase;
        box-shadow: 5px 1px 5px black;
        background: black;
    }


`

export const StyledButton = styled.button `
    background-color: #ffff;
    height: 70px;
    font-size: 2.5rem;
    font-weight: 700;
    width: 70px;
    border-radius: 50px;
    border: 0;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transform: translateY(290%);
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    transition: 1s ease;

        &:hover {
            background: red;
        }

        & btn-proximo {
            transform: rotateY(180deg);
        }

    `





export const PersonagemSlider = styled.main `

    // background-color: #4A4949;
    display: flex;
    justify-content: center;
    gap: 50px;
`


export const ListaPersonagens = styled.ul `
    width: 330px;
    height: 530px;
    position: relative;

    
    & h2 {
        text-align: center;
        letter-spacing: 0.3rem;
        background: rgba(179, 177, 185, 0.9);
        color: #ffff;
        border-top-right-radius: 8px;
        border-top-left-radius: 8px;
        padding: 8px 10px;
        text-transform: uppercase;
    }
`

export const Cartao = styled.li`
    border-radius: 18px;
    background-color: rgba(43, 42, 42, 0.712);
    padding: 12px;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: absolute;
    opacity: 0;
    transition: opacity 0.7s ease;

    &.cartao-selecionado {
        opacity: 1;
        z-index: 1;
        pointer-events: auto; /* Restaurando eventos de ponteiro para o cartão visível */
    }

    & img {
        width: 100%;
        max-height: 100%;
        object-fit: cover
    }


    & img-card {
        width: 100%;
        height: 100%;
        overflow: hidden;
    }

    & .descricao {
        background-color: rgba(255, 255, 255, 0.8);
        border-bottom-right-radius: 10px;
        border-bottom-left-radius: 10px;
    }

    & .titulo {
        background-color: #333333;
        font-size: 20px;
        color: #ffffff;
        padding: 12px;
    }

    & .texto {
        font-size: 14px;
        padding: 12px;
        text-align: justify;
        max-height: 110px;
        overflow-y: auto;
    }
`

