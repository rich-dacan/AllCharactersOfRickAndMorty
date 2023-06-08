import "./App.css";
import { useEffect, useState } from "react";
import Characters from "./components/Characters";

function App() {
  const [characterList, setCharacterList] = useState([]);

  const [pageInfo, setPageInfo] = useState([]);

  const [currentPage, setCurrentPage] = useState(
    "https://rickandmortyapi.com/api/character/"
  );

  useEffect(() => {
    fetch(currentPage)
      .then(response => response.json())
      .then(response => {
        setCharacterList(response.results);
        setPageInfo(response.info);
      })

      .catch(err => console.log(err));
  }, [currentPage]);

  console.log(currentPage);

  return (
    <div className="App">
      <header className="App-header">
        <Characters listCharacters={characterList} />

        <button
          className="next__page"
          onClick={() => setCurrentPage(pageInfo.next)}
        >
          Next Page
        </button>
        <button
          className="next__page"
          onClick={() => setCurrentPage(pageInfo.prev)}
        >
          Prev Page
        </button>
      </header>
    </div>
  );
}

export default App;
