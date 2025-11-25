
import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components'
import { useGlobalContext } from '../Context/global';


function Sidebar() {
    const {popularAnime} = useGlobalContext()

    const sorted = popularAnime?.sort((a,b) => {
        return b.score - a.score
    })

    return (
        <SidebarStyled>
            <h3>Top 5 Popular</h3>
            <div className="anime">
                {sorted?.slice(0,5).map((anime) => {
                    return <Link to={`/anime/${anime.mal_id}`} key={anime.mal_id}>
                        <img src={anime.images.jpg.large_image_url} alt="" />
                        <h5>
                            {anime.title}
                        </h5>
                    </Link>
                })}
            </div>
        </SidebarStyled>
    )
}

    const SidebarStyled = styled.div`
    margin-top: 2rem;
    background-color: #000000ff;
    border-top: 5px solid #c20808ff;
    padding-right: 5rem;
    padding-left: 2rem;
    padding-top: 2rem;
    .anime{
        display: flex;
        flex-direction: column;
        width: 150px;
        img{
            width: 100%;
            border-radius: 5px;
            border: 5px solid #c20808ff;
        }
        a{
            margin-top: 1rem;
            display: flex;
            flex-direction: column;
            gap: .4rem;
            color: #c20808ff;
            h4{
                font-size: 1.1rem;
            }
        }
    }

    /*  Tablet */
    @media screen and (max-width: 1024px) {
        padding: 2rem 3rem;

        .anime {
        width: 100%;
        max-width: 200px;
        }
    }

    /*  Mobile */
    @media screen and (max-width: 768px) {
        padding: 1rem 2rem;
        display: flex;
        flex-direction: column;
        align-items: center;

        h3 {
        text-align: center;
        font-size: 1.3rem;
        }

        .anime {
        width: 100%;
        max-width: 250px;
        align-items: center;

        a {
            align-items: center;

            h5 {
            font-size: 1rem;
            text-align: center;
            }
        }
        }
    }

    /*  Small phones */
    @media screen and (max-width: 480px) {
        padding: 1rem;

        h3 {
        font-size: 1.2rem;
        }

        .anime {
        max-width: 220px;

        a h5 {
            font-size: 0.95rem;
        }
        }
    }
    `;

export default Sidebar




