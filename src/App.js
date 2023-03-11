import './App.css';
import axios from 'axios';
import { useState } from 'react';

function App() {
  const [movie, setMovie] = useState([])
  const [text, setText] = useState("search movie")
  const changeText = (event) => {
    setText(event.target.value)
  }
  const getMovie = (e) => {
    e.preventDefault()
    axios.get(`https://www.omdbapi.com/?s=${text}&apikey=43033444`)
      .then((res) => {
        console.log(res)
        setMovie(res.data.Search)
      })
  }

  return (
    <>
      <nav className="navbar bg-body-tertiary">
        <div className="container-fluid">
          <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" value={text} onChange={changeText} />
            <button className="btn btn-outline-success" type="submit" onClick={getMovie} >Search</button>
          </form>
        </div>
      </nav>

      <div className="container">
        <div className='row'>
          {
            movie.map((value, index) => {
              return (
                <div className='col-3' key={index}>
                  <div className="card" style={{ width: "18rem" }}>
                    <img src={value.Poster} className="card-img-top" alt="..." />
                    <div className="card-body">
                      <h3 className="card-title">{value.Year}</h3>
                      <h4 className="card-text">{value.Title}</h4>
                    </div>
                  </div>
                </div>
              )
            })
          }

        </div>
      </div>

    </>
  );
}

export default App;
