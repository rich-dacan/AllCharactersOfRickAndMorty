import "./App.css";
import { useEffect, useState } from "react";
import Characters from "./components/Characters";
import LoadingSpinner from "./components/LoadingSpinner";
// import ScrollToTop from "./components/ScrollToTop";
// import { useLocation } from "react-router-dom";

function App() {
  const [loading, setLoading] = useState(false);
  const [characterList, setCharacterList] = useState([]);
  const [pageInfo, setPageInfo] = useState([]);

  const [currentPage, setCurrentPage] = useState(
    "https://rickandmortyapi.com/api/character/"
  );

  const handlePaginate = paginate => {
    if (paginate === "next") {
      setCurrentPage(pageInfo.next);
    } else {
      setCurrentPage(pageInfo.prev);
    }

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    fetch(currentPage)
      .then(response => response.json())
      .then(response => {
        setLoading(true);
        setCharacterList(response.results);
        setPageInfo(response.info);
      })
      .catch(err => console.log(err));
  }, [currentPage]);

  return (
    <div className="App">
      <header className="App-header">
        <div>
          {characterList.length < 1 && <LoadingSpinner />}
          <Characters listCharacters={characterList} />
        </div>

        <button className="next__page" onClick={() => handlePaginate("next")}>
          Next Page
        </button>
        <button className="next__page" onClick={() => handlePaginate("prev")}>
          Prev Page
        </button>
      </header>
    </div>
  );
}

export default App;
