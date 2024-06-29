// Herois.js
import { Cartao } from "./Home.style";
import { characters } from "./utils/personagens";
import image_superman from '../src/assets/superman.jpg'

const Herois = (props) => {

    return (
        <>
            <Cartao className={`cartao ${props.id === 0 ? 'cartao-selecionado' : ''}`}>
                <h2>Superman</h2>
                <img src={image_superman} alt="" />
                <div className="descricao">
                    <h1 className="titulo">Descricao</h1>
                    <p className="texto">O Homem de Aço, o Último Filho de Krypton, o Homem do Amanhã, o Escoteiro Azul, o Homem que Tudo Tinha, o Super-Homem é, sem dúvida, o maior super-herói de todos os tempos. Não se trata de preferência, é simplesmente um fato. Você pode gostar mais do Batman, simpatizar mais com o Homem-Aranha ou se engajar com a Mulher-Maravilha, mas não pode negar que o Super-Homem representa a quintessência do heroísmo. O cineasta Quentin Tarantino, embora tenha sido sagaz, estava errado na tese que apresentou sobre o Super-Homem no segundo volume de “Kill Bill”. Kal-el, seu nome kriptoniano, não encarna Clark Kent para zombar dos humanos, mas para aplacar sua solidão de Deus Vivo. Ele é um ser inimaginavelmente poderoso, que poderia dominar o mundo se quisesse, mas que optou por ser um exemplo para a humanidade: mais humano, é melhor, do que os humanos. O conceito de Super-Homem permeia nosso imaginário coletivo: é Jesus, é Moisés, é Jeová, é Apolo, é Hercules e Sansão. Criado pelos artistas judeus Jerry Siegel e Joe Shuster, tendo sido publicado a primeira vez em 1938, o personagem sofreu diversas modificações ao longo das décadas. Já foi elétrico, foi dividido em dois, se casou, morreu e ressuscitou. Atualmente, perdeu uma de suas marcas registradas: a famosa cueca por cima das calças. Apesar de tudo isso seu S no peito permanece como um dos símbolos mais reconhecíveis do mundo. No cinema, Christopher Reeve é seu interprete definitivo. Nos quadrinhos, embora tenha muitos álbuns memoráveis, como “A Foice e o Martelo”, “Grandes Astros: Superman” e “As Quatro Estações”, sua melhor versão foi escrita e desenhada pela lenda dos quadrinhos John Byrne na segunda metade da década de 1980.</p>
                </div>
            </Cartao>
            <Cartao className={`cartao ${props.id > 1 ? 'cartao-selecionado' : ''}`}>
                <h2>{characters[props.id].nome}</h2>
                <img src={characters[props.id].image} className="img-card"/>
                 
                <div className="descricao">
                    <h1 className="titulo">Descrição</h1>
                    <p className="texto">{characters[props.id].historia}</p>
                </div>
            </Cartao>
        </>
    );
};

export default Herois;
