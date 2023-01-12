import "./Main.scss"

function Main() {
    return (
        <div className="Main-container">
            <div className="Main-logo-container">
                <img src="photo/lemonbase.png"  className="main-logo"/>
                <div className="Main-text-container">
                    <h1>사이드 워크팀 알아보기</h1>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/-Ptsw9f5r1s" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                </div>
            </div>
        </div>
    )
}
export default Main