import "./App.css";
import React from "react";
import inicial from "./assets/img/inicial.png";
import quemsomos2 from "./assets/img/quemsomos2.png";
import fundo3 from "./assets/img/fundo3.png";
import objetivo from "./assets/img/objetivo.png";
import proposta from "./assets/img/proposta.png";
import wireframes from "./assets/img/wireframes.png";
import rodape from "./assets/img/rodape.png";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import tela1 from "./assets/img/tela1.png";


function App() {
  return (
    <>
      <div className="container">
        <div
          className="image-main"
          style={{ backgroundImage: `url(${inicial})` }}
        >
          <div className="apresentacao">
            <p className="intro">Seu guarda roupa na palma da mão</p>
            <button className="bnt1">
              <p>Em breve</p>
            </button>

            <button className="bnt2">
              <p>Saiba mais</p>
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
              <p className="linha1">
                A GoDress é uma equipe apaixonada por moda e
              </p>{" "}
              <p>tecnologia, comprometida em simplificar a maneira</p>{" "}
              <p className="linha2">
                como as pessoas se vestem para eventos especiais.
              </p>{" "}
              <p>Combinando inovação e praticidade, nosso objetivo é</p>
              <p className="linha3">
                oferecer uma solução completa para a gestão
              </p>{" "}
              <p className="linha4">inteligente do guarda-roupa.</p>
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
            <p>A GoDress será um aplicativo</p>{" "}
            <p>inovador que permite aos usuários</p>
            <p>organizar suas roupas de forma</p>{" "}
            <p>eficiente, criar outfits incríveis e </p>{" "}
            <p>receber sugestões personalizadas</p>{" "}
            <p>com base em suas preferências e</p>
            <p>no tipo de evento. Com uma</p>{" "}
            <p>interface intuitiva e recursos</p>
            <p>avançados, a GoDress será o seu </p>{" "}
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
            <p>Nosso principal objetivo é facilitar a vida</p>{" "}
            <p>das pessoas, tornando o processo de</p>{" "}
            <p>seleção de roupas mais fácil, eficiente e</p>{" "}
            <p>divertido. Queremos ajudar nossos</p>{" "}
            <p>usuários a se sentirem confiantes e</p>
            <p>bem-vestidos em qualquer ocasião, sem</p>{" "}
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
            <p>A GoDress propõe uma abordagem</p>{" "}
            <p>revolucionária para a organização de</p>
            <p>roupas, oferecendo um armário virtual</p>{" "}
            <p>inteligente que se adapta às</p>
            <p>necessidades individuais de cada usuário.</p>{" "}
            <p>Com recursos avançados como sugestões</p>{" "}
            <p>personalizadas, integração meteorológica</p>{" "}
            <p>e lavanderia digital, nossa proposta é</p>{" "}
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
          <div className="App">
     
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
            <p>Faça parte da revolução na organização de roupas e torne</p> <p>seu
            processo de seleção de looks mais fácil, eficiente e</p><p> divertido com a
            GoDress. Cadastre-se agora e comece a </p><p className="linha5">transformar sua maneira de se
            vestir!</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
