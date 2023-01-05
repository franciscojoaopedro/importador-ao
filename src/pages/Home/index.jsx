import { Header } from '../../components/Header'
import './home.css'
import { Transportadoras, Redicionadoras } from '../../class/Objects'
import { CardeTransportadora } from '../../components/Card_transportador'
const Home = () => {
  return (
    <>
      <Header />
      <div className="dica-importador">
        <div className="dica">
          <h4>
            Olá amigo seja bem vindo ao <strong>IMPORTADOR-AO</strong> ,aqui
            podes adicionar links de fornecedores confiáveis, deste modo iremos
            ajudar mais pessoas que estão entrando no mundo dos negócios da
            importação de produtos.
          </h4>
        </div>
      </div>
      <section className="s-section-links">
        <div className="s-conteudo-links">
          <div className="s-form">
            <form>
              <div className="adicionar-aqui-link">
                <h3>Adiciona link aqui</h3>
              </div>
              <div className="s-input">
                <input type="text" placeholder="Nome" />
              </div>
              <div className="s-input">
                <input type="text" placeholder="Nome do fornecedor" />
              </div>

              <div className="s-input">
                <input type="text" placeholder="Link do fornecedor" />
              </div>
              <div className="s-input">
                <textarea type="text" placeholder="Sobre o fornecedor" />
              </div>
              <div className="btn">
                <button className="btnPostLinks">Publicar</button>
              </div>
            </form>
          </div>

          <div className="s-imagem-loja">
            <img
              src="https://www.conversion.com.br/wp-content/uploads/2022/01/infografico-ecommerce-importados.svg"
              alt="lojas para comprar"
            />
          </div>
        </div>
      </section>

      <section className="s-transportadora">
        <div className="s-empresa">
          <div className="empresa-texto">
            <h2>Transportadoras</h2>
          </div>
          <div className="transportadora">
            <ul>
              {Transportadoras.map((transportadora) => (
                <CardeTransportadora
                  imagem={transportadora.imagem}
                  url={transportadora.url}
                  name={transportadora.nome}
                />
              ))}
            </ul>
          </div>
        </div>

        <div className="s-empresa">
          <div className="empresa-texto">
            <h2>Redicionadoras</h2>
          </div>
          <div className="transportadora">
            <ul>
              {Redicionadoras.map((transportadora) => (
                <CardeTransportadora
                  imagem={transportadora.imagem}
                  url={transportadora.url}
                  name={transportadora.nome}
                />
              ))}
            </ul>
          </div>
        </div>

        <div className="s-empresa">
          <div className="empresa-texto">
            <h2>Lojas</h2>
          </div>
          <div className="transportadora">
            <ul>
              {Transportadoras.map((transportadora) => (
                <CardeTransportadora
                  imagem={transportadora.imagem}
                  url={transportadora.url}
                  name={transportadora.nome}
                />
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home

{
  /*




          <div className="info-transportadora">
            <div className="texto-transportadoras">
              <div className="info-texto">
                <h3>Melhores Redicionadoras</h3>
              </div>
              <ul className="lista-transportadora">
                <li className="card-transportadora">
                  <div className="detalhe-transportadora">
                    <h4>DHL</h4>
                    <div className="detalhe-imagem">
                      <a href="#">
                        <img
                          src="https://www.dhl.com/content/dam/dhl/global/core/images/teaser-image-main/dhl-logo.jpg"
                          alt=""
                        />
                      </a>
                    </div>
                  </div>
                </li>

                <li className="card-transportadora">
                  <div className="detalhe-transportadora">
                    <h4>DHL</h4>
                    <div className="detalhe-imagem">
                      <a href="#">
                        <img
                          src="https://www.dhl.com/content/dam/dhl/global/core/images/teaser-image-main/dhl-logo.jpg"
                          alt=""
                        />
                      </a>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="info-transportadora">
            <div className="texto-transportadoras">
              <div className="info-texto">
                <h3>Melhores Lojas</h3>
              </div>
              <ul className="lista-transportadora">
                <li className="card-transportadora">
                  <div className="detalhe-transportadora">
                    <h4>DHL</h4>
                    <div className="detalhe-imagem">
                      <a href="#">
                        <img
                          src="https://www.dhl.com/content/dam/dhl/global/core/images/teaser-image-main/dhl-logo.jpg"
                          alt=""
                        />
                      </a>
                    </div>
                  </div>
                </li>

                <li className="card-transportadora">
                  <div className="detalhe-transportadora">
                    <h4>DHL</h4>
                    <div className="detalhe-imagem">
                      <a href="#">
                        <img
                          src="https://www.dhl.com/content/dam/dhl/global/core/images/teaser-image-main/dhl-logo.jpg"
                          alt=""
                        />
                      </a>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>





  <div className="imagens-transportadora">
            <div className="list-imagem-transportadora">
              <img src="" alt="transportadora" />
            </div>
            <div className="list-imagem-transportadora">
              <img src="" alt="transportadora" />
            </div>
            <div className="list-imagem-transportadora">
              <img src="" alt="transportadora" />
            </div>
          </div>






      <section className="s-section-prime">
        <div className="conteudo">
          <div className="s-prime-pub">
            <img src="../../../public/team-goals-animate.svg" alt="" />
          </div>
          <div className="texto-sobre-importacao">
            <h3>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </h3>

            <h3>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </h3>
          </div>
        </div>
      </section>

          <div className="s-card-links">
            <div className="s-title-links">
              <button className="btnLinks">Links</button>
            </div>
            <div className="list-links">
              <div className="card-link">
                <h1>Nome do Link</h1>
                <h3>Descricão</h3>
                <h4>url....</h4>
              </div>
              <div className="card-link">
                <h1>Nome do Link</h1>
                <h3>Descricão</h3>
                <h4>url....</h4>
              </div>
              <div className="card-link">
                <h1>Nome do Link</h1>
                <h3>Descricão</h3>
                <h4>url....</h4>
              </div>
              <div className="card-link">
                <h1>Nome do Link</h1>
                <h3>Descricão</h3>
                <h4>url....</h4>
              </div>
            </div>
          </div>

*/
}
