import { useState } from "react";
import Filter from "./Filter";
import { GetTracks } from "./Track";


const genres = ['Рок', 'Техно', 'Поп', 'Металл', 'Панк-рок'];
const years = [2000, 2001, 2002];
const author = ['Nero', 'Ali Bakgor', 'Стоункат, Psychopath']

export default function Tracklist({ isLoading }) {
    
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <div className="main__centerblock centerblock">
        <div className="centerblock__search search">
          <svg className="search__svg">
            <use xlinkHref="img/icon/sprite.svg#icon-search" />
          </svg>
          <input
            className="search__text"
            type="search"
            placeholder="Поиск"
            name="search"
          />
        </div>
        <h2 className="centerblock__h2">Треки</h2>
        <div className="centerblock__filter filter">
          <div className="filter__title">Искать по:</div>
          <Filter type='исполнителю' filterName={author} isActive={activeIndex === 1} onShow={() => setActiveIndex(1)} onHide={() => setActiveIndex(0)} />
          <Filter type='году выпуска' filterName={years} isActive={activeIndex === 2} onShow={() => setActiveIndex(2)} onHide={() => setActiveIndex(0)} />
          <Filter type='жанру' filterName={genres} isActive={activeIndex === 3} onShow={() => setActiveIndex(3)} onHide={() => setActiveIndex(0)} />          
        </div>
        <div className="centerblock__content">
          <div className="content__title playlist-title">
            <div className="playlist-title__col col01">Трек</div>
            <div className="playlist-title__col col02">ИСПОЛНИТЕЛЬ</div>
            <div className="playlist-title__col col03">АЛЬБОМ</div>
            <div className="playlist-title__col col04">
              <svg className="playlist-title__svg" alt="time">
                <use xlinkHref="img/icon/sprite.svg#icon-watch" />
              </svg>
            </div>
          </div>
          <div className="content__playlist playlist">
            <GetTracks isLoading={isLoading}/>
          </div>
        </div>
      </div>
    );
}