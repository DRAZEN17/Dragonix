import React from 'react'
import { Link, useParams } from 'react-router-dom';
import styled from 'styled-components'
import { useGlobalContext } from '../Context/global';

function Gallery() {
    const {getAnimePictures, pictures} = useGlobalContext()
    const {id} = useParams();

    //state
    const [index, setIndex] = React.useState(0);

    const handleImageClick = (i) => {
        setIndex(i)
    }


    React.useEffect(() => {
        getAnimePictures(id)
    }, [id])

    return (
        <GalleryStyled>
            <div className="back">
                <Link to="/">
                    <i className="fas fa-arrow-left"></i>
                    Back to Home
                </Link>
            </div>
            <div className="big-image">
                <img src={pictures[index]?.jpg.image_url} alt="" />
            </div>
            <div className="small-images">
                {pictures?.map((picture, i) => {
                    return <div className="image-con" onClick={()=>{
                        handleImageClick(i)
                    }} key={i}>
                        <img 
                            src={picture?.jpg.image_url}
                            style={{
                                border: i === index ? "3px solid #27AE60" : "3px solid #e5e7eb",
                                filter: i === index ? 'grayscale(0)' : 'grayscale(60%)',
                                transform: i === index ? 'scale(1.1)' : 'scale(1)',
                                transition: 'all .3s ease-in-out'
                            }}
                            alt="" 
                        />
                    </div>
                })}
            </div>
        </GalleryStyled>
    )
}

    const GalleryStyled = styled.div`
    background-color: #000000ff;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #fff1f1ff;

    .back {
        position: absolute;
        top: 2rem;
        left: 2rem;

        a {
        font-weight: 600;
        text-decoration: none;
        color: #c20808ff;
        display: flex;
        align-items: center;
        gap: 0.5rem;
        }
    }

    .big-image {
        display: inline-block;
        padding: 2rem;
        margin: 2rem 0;
        background-color: #000000ff;
        border-radius: 7px;
        border: 5px solid #c20808ff;
        position: relative;

        img {
        width: 350px;
        max-width: 100%;
        }
    }

    .small-images {
        display: flex;
        flex-wrap: wrap;
        gap: 0.5rem;
        width: 80%;
        padding: 2rem;
        border-radius: 7px;
        background-color: #000000ff;
        border: 5px solid #c20808ff;
        justify-content: center;

        img {
        width: 6rem;
        height: 6rem;
        object-fit: cover;
        cursor: pointer;
        border-radius: 5px;
        border: 3px solid #c20808ff;
        }
    }

    /*  Tablet */
    @media screen and (max-width: 1024px) {
        .big-image img {
        width: 300px;
        }

        .small-images {
        width: 90%;
        padding: 1.5rem;
        }

        .small-images img {
        width: 5rem;
        height: 5rem;
        }
    }

    /*  Mobile */
    @media screen and (max-width: 768px) {
        .back {
        position: static;
        margin: 1rem 0;
        }

        .big-image {
        padding: 1rem;
        margin: 1rem 0;

        img {
            width: 250px;
        }
        }

        .small-images {
        width: 100%;
        padding: 1rem;
        gap: 0.4rem;
        }

        .small-images img {
        width: 4.5rem;
        height: 4.5rem;
        }
    }

    /*  Small phones */
    @media screen and (max-width: 480px) {
        .big-image img {
        width: 200px;
        }

        .small-images {
        gap: 0.3rem;
        }

        .small-images img {
        width: 4rem;
        height: 4rem;
        }
    }
    `;

export default Gallery