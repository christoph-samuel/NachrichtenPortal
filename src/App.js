import './App.css';
import {NewsWithPicture} from "@onpoint/workshop6.ui.christoph.news-with-picture";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <p>TODO: Navigation Bar</p>
            </header>
            <section className="App-news">
                <NewsWithPicture text="Das Knie! Hirscher verpasst Fieberbrunn-Freeriden" imgSrc="/img/Hirscher.jpg"/>
                <NewsWithPicture text="Skilehrer will Weltrekord am Snowbike aufstellen" imgSrc="/img/Weltrekord-Snowbike.jpg"/>
                <NewsWithPicture text="Arabella Koller nach Verletzung wieder am Ball" imgSrc="/img/Tennis.jpg"/>
                <NewsWithPicture text="LIVE: Kann Real Madrid auch bei Mallorca siegen?" imgSrc="/img/Real-Alaba.jpg"/>
                <NewsWithPicture text="Haaland-Wechsel zum FC Barcelona wohl unmöglich!" imgSrc="/img/Haaland.jpg"/>
                <NewsWithPicture text="Feller: „Würde ich mich wohl selbst vernichten“" imgSrc="/img/Feller.jpg"/>
            </section>
            <section className="App-news">
                <p>TODO: News Short</p>
            </section>
        </div>
    );
}

export default App;
