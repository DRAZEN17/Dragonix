import React from 'react'
import { useGlobalContext } from '../Context/global'
import Popular from './Popular'
import styled from 'styled-components'
import Upcoming from './Upcoming'
import Airing from './Airing'

function Homepage() {

    const {handleSubmit,
        search,
        searchAnime,
        handleChange ,
        getUpcomingAnime,
        getAiringAnime,
        getPopularAnime,
        getManga,
    } = useGlobalContext()

    const [rendered, setRendered] = React.useState('popular')

    const switchComponent = () => {
        switch(rendered){
            case 'popular':
                return <Popular rendered={rendered} />
            case 'airing':
                return <Airing rendered={rendered} />
            case 'upcoming':
                return <Upcoming rendered={rendered} />
            default:
                return <Popular rendered={rendered} />
        }
    }

    return (
      
        <HomepageStyled>
          <div className='drax'>
            <h1 className='draz'>Dragonix</h1>
          </div>
            <header>
                <div className="logo">
                    <h1>
                        {rendered === 'popular' ? 'Popular Anime' : 
                        rendered === 'airing' ? 'Airing Anime' : 'Upcoming Anime'}
                    </h1>
                </div>
                <div className="search-container">
                    <div className="filter-btn popular-filter">
                        <button onClick={() => {
                            setRendered('popular')
                        }}>Popular<i className="fas fa-fire"></i></button>
                    </div>
                    <form action="" className="search-form" onSubmit={handleSubmit}>
                        <div className="input-control">
                            <input type="text" placeholder="Search Anime" value={search} onChange={handleChange} />
                            <button type="submit">Search</button>
                        </div>
                    </form>
                    <div className="filter-btn airing-filter">
                        <button onClick={() => {
                            setRendered('airing')
                            getAiringAnime()
                        }}>Airing</button>
                    </div>
                    <div className="filter-btn upcoming-filter">
                        <button onClick={() => {
                            setRendered('upcoming')
                            getUpcomingAnime()
                        }}>Upcoming</button>
                    </div>
                </div>
            </header>
            {switchComponent()}
        </HomepageStyled >
    )
}

const HomepageStyled = styled.div`
  width: 100vw;
  min-height: 100vh;
  background-color: #000000ff;
  overflow-x: hidden;
  color: #e84040ff;

  .drax{
   background:linear-gradient( to right, #e84040ff, #000000ff);
        -webkit-background-clip: background;
        -webkit-text-fill-color: transparent;
        transition: all .4s ease-in-out;
        text-align: center;
        padding: 1rem 0;
        margin-bottom: 2rem;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }

  .draz {
    font-size: 6rem;
    font-family: 'elegant royalty', elegant;
    background:linear-gradient( to left, #ffffffff, #e84040ff);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        transition: all .4s ease-in-out;
  }

  header {
    padding: 2rem 5rem;
    max-width: 1200px;
    margin: 0 auto;
    transition: all 0.4s ease-in-out;

    @media screen and (max-width: 1530px) {
      width: 95%;
    }

    .logo {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 2rem;
    }

    .search-container {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 1rem;
      flex-wrap: wrap;

      .filter-btn {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        padding: 0.7rem 1.5rem;
        border-radius: 30px;
        font-size: 1.2rem;
        background-color: #970505ff;
        cursor: pointer;
        font-family: inherit;
        border: 5px solid #b35454ff;
        transition: all 0.4s ease-in-out;

        &.active {
          background-color: #c20808ff;
          color: white;
          border-color: #c13737ff;
        }
      }

      .search-form {
        position: relative;
        width: 100%;

        .input-control {
          position: relative;
          width: 100%;
        }

        input {
          width: 100%;
          padding: 0.7rem 1rem;
          border: none;
          outline: none;
          border-radius: 30px;
          font-size: 1.2rem;
          background-color: #ffffffff;
          color: #c20808ff;
          border: 5px solid #c20808ff;
          transition: all 0.4s ease-in-out;
        }

        button {
          position: absolute;
          right: 0;
          top: 50%;
          transform: translateY(-50%);
          padding: 0.7rem 1.5rem;
          border-radius: 30px;
          font-size: 1rem;
          background-color: #c20808ff;
          color: white;
          border: none;
          cursor: pointer;
        }
      }
    }
  }
`;

export default Homepage