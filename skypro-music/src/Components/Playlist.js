export const playlists = [{
    id: 0,
    name: "day's playlist",
    img: "img/playlist01.png"
}, {
    id: 1,
    name: "top 100 hits",
    img: "img/playlist02.png"
}, {
    id: 2,
    name: "indi",
    img: "img/playlist03.png"
}]


export function Playlist() {

    const playlistItems = playlists.map(playlistItem => 
        <div key={playlistItem.id} className="sidebar__item">
            <a className="sidebar__link" href="http://">
                <img
                  className="sidebar__img"
                  src={playlistItem.img}
                  alt={playlistItem.name}
                />
            </a>
        </div>
        )

    return (
        playlistItems
    );
}