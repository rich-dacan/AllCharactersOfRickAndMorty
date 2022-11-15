import "./App.css";
import { useEffect, useState } from "react";
import Characters from "./components/Characters";
import { useLocation } from "react-router-dom";

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

    window.scrollTo(0, 0);
  }, [currentPage]);

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
