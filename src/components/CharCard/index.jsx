import "./styles.css";

const CharCard = ({
  name,
  image,
  status,
  species,
  gender,
  type,
  origin,
  location,
}) => {
  return (
    <>
      {status === "Dead" ? (
        <div className="flip-container">
          <div className="flipper">
            <div className="front">
              <li>
                <span className="card__container">
                  <img className="dead" src={image} alt="character" />
                  <p className="name__person">{name}</p>
                </span>
              </li>
            </div>
            <div className="back">
              <h4 className="dead">Status of life: {status}</h4>
              <p>
                <b>Species:</b> {species}
              </p>
              <p>
                <b>Gender:</b> {gender}
              </p>
              <p>
                <b>Type:</b> {type}
              </p>
              <p>
                <b>Origin:</b> {origin}
              </p>
              <p>
                <b>Location:</b> {location}
              </p>
            </div>
          </div>
        </div>
      ) : (
        <div className="flip-container">
          <div className="flipper">
            <div className="front">
              <li>
                <span className="card__container">
                  <img src={image} alt="character" />
                  <p className="name__person">{name}</p>
                </span>
              </li>
            </div>
            <div className="back">
              <h4 className="alive">Status of life: {status}</h4>
              <p>
                <b>Species:</b> {species}
              </p>
              <p>
                <b>Gender:</b> {gender}
              </p>
              <p>
                <b>Type:</b> {type}
              </p>
              <p>
                <b>Origin:</b> {origin}
              </p>
              <p>
                <b>Location:</b> {location}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CharCard;
