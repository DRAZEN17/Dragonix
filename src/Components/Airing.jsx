
import React from 'react'
import { Link } from 'react-router-dom'
import { useGlobalContext } from '../Context/global'
import styled from 'styled-components'
import Sidebar from './Sidebar'

function Airing({rendered}) {
    const {airingAnime ,isSearch, searchResults} = useGlobalContext()

    const conditionalRender = () => {
        if(!isSearch && rendered === 'airing'){
            return airingAnime?.map((anime) => {
                return <Link to={`/anime/${anime.mal_id}`} key={anime.mal_id}>
                    <img src={anime.images.jpg.large_image_url} alt="" />
                </Link>
            })
        }else{
            return searchResults?.map((anime) => {
                return <Link to={`/anime/${anime.mal_id}`} key={anime.mal_id}>
                    <img src={anime.images.jpg.large_image_url} alt="" />
                </Link>
            })
        }
    }

    return (
        <PopularStyled>
            <div className="airing-anime">
                {conditionalRender()}
            </div>
            <Sidebar />
        </PopularStyled>
    )
}

const PopularStyled = styled.div`
    display: flex;
    .airing-anime{
        margin-top: 2rem;
        padding-top: 2rem;
        padding-bottom: 2rem;
        padding-left: 5rem;
        padding-right: 0;
        width: 100%;
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
        grid-gap: 2rem;
        background-color: #000000ff;
        border-top: 5px solid #c20808ff;
        a{
            height: 500px;
            border-radius: 7px;
            border: 5px solid #c20808ff;
        }
        a img{
            width: 100%;
            height: 100%;
            object-fit: cover;
            border-radius: 5px;
        }
    }

    /*  Tablet */
    @media screen and (max-width: 1024px) {
        .airing-anime {
        padding: 2rem 3rem;
        grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
        }
    }

    /*  Mobile */
    @media screen and (max-width: 768px) {
        flex-direction: column;

        .airing-anime {
        padding: 1rem 2rem;
        grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
        justify-content: center;
        }

        a {
        height: 400px;
        }
    }

    /*  Small phones */
    @media screen and (max-width: 480px) {
        .airing-anime {
        padding: 1rem;
        grid-template-columns: 1fr;
        grid-gap: 1.5rem;
        }

        a {
        height: 350px;
        }
    }
    `;

export default Airing
