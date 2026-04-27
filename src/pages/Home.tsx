import { Link } from "react-router-dom";
import { points } from "../data/points";

export default function Home() {
    return (
        <div className="container">
            <h1>Рускеала: путешествие сквозь эпохи</h1>
            <p>Интерактивный туристический маршрут</p>

            <Link to="/map">
                <button className="primary">Начать маршрут</button>
            </Link>

            <h2 style={{ marginTop: 30 }}>Точки маршрута</h2>

            <div style={{ display: "grid", gap: 10 }}>
                {points.map(p => (
                    <Link key={p.id} to={`/point/${p.id}`}>
                        <div className="card">{p.title}</div>
                    </Link>
                ))}
            </div>
        </div>
    );
}