import "./App.css";
import React from "react";
import inicial from "./assets/img/inicial.png";
import quemsomos2 from "./assets/img/quemsomos2.png";
import tela1 from "./assets/img/tela1.png";
import tela2 from "./assets/img/tela2.png";
import tela3 from "./assets/img/tela3.png";
import tela4 from "./assets/img/tela4.png";
import tela5 from "./assets/img/tela5.png";
import tela6 from "./assets/img/tela6.png";
import tela7 from "./assets/img/tela7.png";
import tela8 from "./assets/img/tela8.png";
import tela9 from "./assets/img/tela9.png";
import tela10 from "./assets/img/tela10.png";
import fundo3 from "./assets/img/fundo3.png";
import objetivo from "./assets/img/objetivo.png";
import proposta from "./assets/img/proposta.png";
import wireframes from "./assets/img/wireframes.png";
import rodape from "./assets/img/rodape.png";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

function App() {
  return (
    <>
      <div className="container">
        <div
          className="image-main"
          style={{ backgroundImage: `url(${inicial})` }}
        >
          <div className="apresentacao">
            <p className="intro">Seu guarda-roupa na palma da mão</p>
            <button className="bnt1">
              <p className="embreve">Em Breve</p>
            </button>
            <button className="bnt2">
              <p className="colorido">Saiba mais</p>
            </button>
          </div>
        </div>
      </div>

      <div className="container2">
        <div
          style={{
            backgroundImage: `url(${quemsomos2})`,
            height: 500,
            width: 2000,
          }}
        >
          <div className="apresentacao2">
            <p>
             A GoDress é uma equipe apaixonada por moda e <br></br>
             tecnologia, comprometida em simplificar a maneira
             como as pessoas se vestem para eventos especiais.<br></br>
             Combinando inovação e praticidade, nosso objetivo é
            oferecer uma solução completa para a gestão<br></br>
             inteligente do guarda-roupa.
            </p>
          </div>
        </div>
      </div>

      <div className="container3">
        <div
          style={{
            backgroundImage: `url(${fundo3})`,
            height: 840,
            width: 2000,
          }}
        >
          <div className="titulo">O que será a GoDress</div>
          <div className="descricao">
            <p>A GoDress será um aplicativo</p>
            <p>inovador que permite aos usuários</p>
            <p>organizar suas roupas de forma</p>
            <p>eficiente, criar outfits incríveis e</p>
            <p>receber sugestões personalizadas</p>
            <p>com base em suas preferências e</p>
            <p>no tipo de evento. Com uma</p>
            <p>interface intuitiva e recursos</p>
            <p>avançados, a GoDress será o seu</p>
            <p>melhor aliado na hora de se vestir</p>
            <p>para qualquer ocasião.</p>
          </div>
        </div>
      </div>

      <div className="container4">
        <div
          style={{
            backgroundImage: `url(${objetivo})`,
            height: 950,
            width: 1863,
          }}
        >
          <div className="tituloobjetivo">Nosso Objetivo</div>
          <div className="textoobjetivo">
            <p>Nosso principal objetivo é facilitar a vida</p>
            <p>das pessoas, tornando o processo de</p>
            <p>seleção de roupas mais fácil, eficiente e</p>
            <p>divertido. Queremos ajudar nossos</p>
            <p>usuários a se sentirem confiantes e</p>
            <p>bem-vestidos em qualquer ocasião, sem</p>
            <p>o estresse de escolher o outfit perfeito.</p>
          </div>
        </div>
      </div>

      <div className="container5">
        <div
          style={{
            backgroundImage: `url(${proposta})`,
            height: 850,
            width: 1863,
          }}
        >
          <div className="tituloproposta">Proposta</div>
          <div className="textoproposta">
            <p>A GoDress propõe uma abordagem</p>
            <p>revolucionária para a organização de</p>
            <p>roupas, oferecendo um armário virtual</p>
            <p>inteligente que se adapta às</p>
            <p>necessidades individuais de cada usuário.</p>
            <p>Com recursos avançados como sugestões</p>
            <p>personalizadas, integração meteorológica</p>
            <p>e lavanderia digital, nossa proposta é</p>
            <p>revolucionar a maneira como as pessoas</p>
            <p>gerenciam seus guarda-roupas.</p>
          </div>
        </div>
      </div>

      <div className="container6">
        <div
          style={{
            backgroundImage: `url(${wireframes})`,
            height: 1620,
            width: 1863,
          }}
        >
          <div className="titulowireframes">Wireframes</div>
          <div className="carousel-container">
            <Carousel
              autoPlay
              infiniteLoop
              showThumbs={false}
              showStatus={false}
              interval={3000}
            >
              <div>
                <img src={tela1} alt="Wireframe 1" />
                <p className="legend">Wireframe 1</p>
              </div>
              <div>
                <img src={tela2} alt="Wireframe 1" />
                <p className="legend">Wireframe 1</p>
              </div>
              <div>
                <img src={tela3} alt="Wireframe 1" />
                <p className="legend">Wireframe 1</p>
              </div>
              <div>
                <img src={tela4} alt="Wireframe 1" />
                <p className="legend">Wireframe 1</p>
              </div>
              <div>
                <img src={tela5} alt="Wireframe 1" />
                <p className="legend">Wireframe 1</p>
              </div>
              <div>
                <img src={tela6} alt="Wireframe 1" />
                <p className="legend">Wireframe 1</p>
              </div>
              <div>
                <img src={tela7} alt="Wireframe 1" />
                <p className="legend">Wireframe 1</p>
              </div>
              <div>
                <img src={tela8} alt="Wireframe 1" />
                <p className="legend">Wireframe 1</p>
              </div>
              <div>
                <img src={tela9} alt="Wireframe 1" />
                <p className="legend">Wireframe 1</p>
              </div>
              <div>
                <img src={tela10} alt="Wireframe 1" />
                <p className="legend">Wireframe 1</p>
              </div>
             
                
            </Carousel>
          </div>
          <button className="bntregistro">
            <p>Pré Registro</p>
          </button>
        </div>
      </div>

      <div className="container7">
        <div
          style={{
            backgroundImage: `url(${rodape})`,
            height: 500,
            width: 1863,
          }}
        >
          <div className="titulorodape">Experimente Agora!</div>
          <div className="textorodape">
            <p>Faça parte da revolução na organização de roupas e torne</p>
            <p>seu processo de seleção de looks mais fácil, eficiente e</p>
            <p>divertido com a GoDress. Cadastre-se agora e comece a</p>
            <p className="linha5">transformar sua maneira de se vestir!</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
