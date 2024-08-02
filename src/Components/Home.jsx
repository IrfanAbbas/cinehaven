import React, { useEffect, useState } from 'react';
import Header from './Header';
import axios from 'axios';
import ShowTitle from './ShowTitle'; // Import the ShowTitle component
import Footer from './Footer';


const Apikey = "6a1a829950982bf0bf25d2b733938c6e";
const url = "https://api.themoviedb.org/3";
const upcoming = 'upcoming';

const Card = ({ img }) => (
  <img className='card' src={`https://image.tmdb.org/t/p/w500${img}`} alt="card-img" />
);

const Row = ({ title, arr = [{ img: "/img/cardimg.png" }] }) => (
  <div className='row'>
    <h2>{title}</h2>
    <div className='cards'>
      {arr.map((item, index) => (
        <Card key={index} img={item.img} />
      ))}
    </div>
  </div>
);

export default function Home() {
  const [upcomingMovies, setUpcomingMovies] = useState([]);
  const [movieTitles, setMovieTitles] = useState([]);

  useEffect(() => {
    const fetchUpcoming = async () => {
      try {
        const response = await axios.get(`${url}/movie/${upcoming}?api_key=${Apikey}`);
        const movies = response.data.results;
        setUpcomingMovies(movies.map(movie => ({ img: movie.poster_path })));
        setMovieTitles(movies.map(movie => movie.title)); // Set titles for ShowTitle component
      } catch (error) {
        console.error('Error fetching the upcoming movies:', error);
      }
    };

    fetchUpcoming();
  }, []);

  return (
    <section className='home'>
      <Header />
      <div className="banner">
        <h1 id='animatedHeading'>Welcom to Cine Heven...!</h1>
      </div>
      <Row title='Popular on Netflix' arr={upcomingMovies} />
      <Row title='TV Shows' arr={upcomingMovies}/>
      <Row title='Movies' arr={upcomingMovies}/>
      <Row title='My Playlist' arr={upcomingMovies} />
      <Row title='Watch' arr={upcomingMovies}/>
      <Row title='Kids Movies' arr={upcomingMovies} />
      <ShowTitle titles= {movieTitles} /> {/* Use ShowTitle component for titles */}
     <Footer />

    </section>
  );
}
