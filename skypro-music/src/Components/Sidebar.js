import { Playlist } from "./Playlist";


export default function Sidebar({ isLoading }) {
    return (
        <div className="main__sidebar sidebar">
        <div className="sidebar__personal">
          <p className="sidebar__personal-name">Sergey.Ivanov</p>
          <div className="sidebar__icon">
            <svg alt="logout">
              <use xlinkHref="img/icon/sprite.svg#logout" />
            </svg>
          </div>
        </div>
        <div className="sidebar__block">
          <div className="sidebar__list">
            <Playlist isLoading={isLoading}/>
          </div>
        </div>
      </div>
    );
}