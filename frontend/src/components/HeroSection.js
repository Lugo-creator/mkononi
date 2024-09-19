import React, { useState, useEffect } from 'react';
import '../App.css';
import './HeroSection.css';
import './Cards.css';
import { Link } from 'react-router-dom';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import axios from 'axios';

const HeroSection = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [artists, setArtists] = useState([]);
    const [songs, setSongs] = useState([]);
    const [filteredArtists, setFilteredArtists] = useState([]);
    const [filteredSongs, setFilteredSongs] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3001/getArtists')
            .then(res => setArtists(res.data))
            .catch(err => console.log(err));
        
        axios.get('http://localhost:3001/getSongs')
            .then(res => setSongs(res.data))
            .catch(err => console.log(err));
    }, []);

    useEffect(() => {
        const lowerCaseSearchTerm = searchTerm.toLowerCase();

        const filteredArtists = artists.filter(artist =>
            artist.name && artist.name.toLowerCase().includes(lowerCaseSearchTerm)
        );
        const filteredSongs = songs.filter(song =>
            (song.title && song.title.toLowerCase().includes(lowerCaseSearchTerm)) ||
            (song.artist && song.artist.toLowerCase().includes(lowerCaseSearchTerm))
        );

        setFilteredArtists(filteredArtists);
        setFilteredSongs(filteredSongs);
    }, [searchTerm, artists, songs]);

    const searchSong = (event) => {
        setSearchTerm(event.target.value);
    };

    const slideLeft = () => {
        var slider = document.getElementById('slider');
        slider.scrollLeft = slider.scrollLeft - 500;
    };

    const slideRight = () => {
        var slider = document.getElementById('slider');
        slider.scrollLeft = slider.scrollLeft + 500;
    };

    const SlideLeft = () => {
        var slider = document.getElementById('slide');
        slider.scrollLeft = slider.scrollLeft - 500;
    };

    const SlideRight = () => {
        var slider = document.getElementById('slide');
        slider.scrollLeft = slider.scrollLeft + 500;
    };

    return (
        <div>
            <div className='search'>
                <input
                    type='text'
                    placeholder="Search for songs and artists"
                    value={searchTerm}
                    onChange={searchSong}
                />
                <i className='fas fa-search'/>
            </div>
            <div className='heading-section'>
                <h1 className='text-2x1 font-bold text-center text-gray-1000'>
                    FIND YOUR FAVOURITE SONGS TO ENTERTAIN YOUR CALLERS
                </h1>
            </div>

            {/* Featured Artists */}
            <div className='relative flex items-center'>
                <MdChevronLeft className='opacity-50 cursor-pointer hover:opacity-100' size={40} onClick={slideLeft} />
                <div id="slider" className='w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide'>
                    <h2 className='text-3xl font-bold text-left text-gray-800'>
                        Featured Artists
                    </h2>
                    {filteredArtists.map((item, index) => (
                        <div key={index} className='w-[220px] inline-block p-2 cursor-pointer hover:scale-105 ease-in-out duration-300'>
                            <div className='cards__wrapper'>
                                <li className='cards__item'>
                                    <Link className='cards__item__link' to={item.path}>
                                        <figure className='cards__item__pic-wrap' data-category={item.label}>
                                            <img src={item.src} alt={item.name} className='cards__item__img' />
                                        </figure>
                                        <div className='cards__item__info'>
                                            <h5 className='cards__item__text'>{item.name}</h5>
                                        </div>
                                    </Link>
                                </li>
                            </div>
                        </div>
                    ))}
                </div>
                <MdChevronRight className='opacity-50 cursor-pointer hover:opacity-100' size={40} onClick={slideRight} />
            </div>

            {/* Featured Songs */}
            <div className='relative flex items-center'>
                <MdChevronLeft className='opacity-50 cursor-pointer hover:opacity-100' size={40} onClick={SlideLeft} />
                <div id="slide" className='w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide'>
                    <h3 className='text-3xl font-bold text-left text-gray-800' id='artists'>
                        Featured Songs
                    </h3>
                    {filteredSongs.map((song, index) => (
                        <div key={index} className='w-[220px] inline-block p-2 cursor-pointer hover:scale-105 ease-in-out duration-300'>
                            <div className='cards__wrapper'>
                                <li className='cards__item'>
                                    <Link className='cards__item__link' to={song.path}>
                                        <figure className='cards__item__pic-wrap' data-category={song.artist}>
                                            <img src={song.src} alt={song.title} className='cards__item__img' />
                                        </figure>
                                        <div className='cards__item__info'>
                                            <h5 className='cards__item__text'>{song.title}</h5>
                                            <p className='cards__item__text'>{song.artist}</p>
                                        </div>
                                    </Link>
                                </li>
                            </div>
                        </div>
                    ))}
                </div>
                <MdChevronRight className='opacity-50 cursor-pointer hover:opacity-100' size={40} onClick={SlideRight} />
            </div>
        </div>
    );
}

export default HeroSection;
