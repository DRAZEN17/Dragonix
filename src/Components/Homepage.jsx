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
        <h1 className='draz'>Anidar</h1>
        <p className='radar'>Your Anime, Your Radar.</p>
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
  color: #ffffffff;
  padding-top: 54px;

  .drax {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 9999;
    background-color: #a91515ff;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  .draz {
    font-size: 50px;
    font-family: 'elegant royalty', elegant;
    color: #ffffffff;
    text-align: left;
    margin-left: 20px;
  }

  .radar {
    font-size: 20px;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    color: #ffffffff;
    text-align: left;
    margin-left: 20px;
    margin-top: -10px;
    margin-bottom: 1.5px;
  }

  header {
    padding: 2rem 5rem;
    max-width: 1200px;
    margin: 0 auto;
    transition: all 0.4s ease-in-out;

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
  width: 100%;
}


      .filter-btn {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        padding: 0.7rem 1.5rem;
        border-radius: 30px;
        font-size: 1.2rem;
        background-color: #c20808ff;
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

  @media screen and (max-width: 1530px) {
    width: 95%;
  }

  @media screen and (max-width: 768px) {
    .drax {
      align-items: center;
      padding-left: 20px;
    }

    .draz {
      text-align: center;
      margin-left: 0;
    }

    .radar {
      text-align: center;
      margin-left: 0;
    }

    header {
      padding: 1rem 2rem;

      .logo h1 {
        font-size: 1.5rem;
      }

      .search-container {
        flex-direction: column;
        gap: 0.8rem;

        .filter-btn {
          width: 100%;
          justify-content: center;
          font-size: 1rem;
        }

        .search-form {
          width: 100%;

          input {
            font-size: 1rem;
          }

          button {
            font-size: 0.9rem;
            padding: 0.5rem 1rem;
          }
        }
      }
    }
  }

  @media screen and (max-width: 480px) {
    .drax {
      align-items: center;
      padding-left: 10px;
    }

    .draz {
      font-size: 26px;
      text-align: center;
      margin-left: 0;
    }

    .radar {
      font-size: 14px;
      text-align: center;
      margin-left: 0;
    }

    header {
      padding: 1rem;

      .logo h1 {
        font-size: 1.2rem;
      

      .search-container {
        gap: 0.5rem;

        .filter-btn {
          font-size: 0.9rem;
          padding: 0.5rem 1rem;
        

        .search-form input {
          font-size: 0.9rem;
        }
      }
    }
  }
`;

export default Homepage