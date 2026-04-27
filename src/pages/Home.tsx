import { Link } from "react-router-dom";
import { points } from "../data/points";
import "../styles/home.css";

export default function Home() {
    return (
        <div>

            <div className="hero">
                <div className="hero-overlay">
                    <h1>Рускеала: путешествие сквозь эпохи</h1>
                    <p>Интерактивный туристический маршрут</p>

                    <Link to="/map">
                        <button className="primary hero-btn">
                            Начать маршрут
                        </button>
                    </Link>
                </div>
            </div>


            <div className="container">
                <h2>Точки маршрута</h2>

                <div className="points-grid">
                    {points.map(p => (
                        <Link key={p.id} to={`/point/${p.id}`}>
                            <div className="card">{p.title}</div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}