import './card_transportadora.css'

const CardeTransportadora = (props) => {
  return (
    <div className="card-transportadora">
      <a
        href={props.url}
        target="_blank"
        className="card-content-transportadora"
      >
        <div className="card-image-transportadora">
          <img src={props.imagem} alt="transportadora" />
        </div>
        <div className="card-title">
          <h3>{props.name}</h3>
        </div>
      </a>
    </div>
  )
}
export { CardeTransportadora }
