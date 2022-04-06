import './styles.css';
import CharCard from '../CharCard';

const Characters = ({listCharacters}) => {

  // console.log(listCharacters)

  return (
    <>
      <h1>Characters from </h1>
      <img className='logo' src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Rick_and_Morty.svg" alt="Open - Rick And Morty Svg Free Clipart@pikpng.com"/>
      
      <ul >

        {listCharacters.map(({name, image, id, status, species, gender, type, origin, location }) => (

          <CharCard name={name} image={image} key={id} status={status} species={species} gender={gender} type={type} origin={origin.name} location={location.name}/>

        ))}

      </ul>
    
    </>
  )
}

export default Characters;