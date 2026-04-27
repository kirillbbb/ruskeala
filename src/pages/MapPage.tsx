import { useNavigate } from "react-router-dom";
import { points } from "../data/points";
import { mapPoints } from "../data/mapPoints";
import "../styles/map.css";

export default function MapPage() {
    const navigate = useNavigate();

    return (
        <div className="container">
            <h1>Карта маршрута</h1>
            <p className="map-subtitle">Маршрут цифровой тропы</p>

            <div className="map-layout">
                {/* КАРТА */}
                <div className="map-wrapper">
                    <img
                        src="/ruskeala-map.png"
                        alt="map"
                        className="map-image"
                    />


                    {points.map((p) => {
                        const position = mapPoints[p.id];
                        if (!position) return null;

                        return (
                            <div
                                key={p.id}
                                className="map-point"
                                style={position}
                                onClick={() => navigate(`/point/${p.id}`)}
                            >
                                {p.id}
                                <span className="map-tooltip">{p.title}</span>
                            </div>
                        );
                    })}
                </div>

                <div className="map-sidebar">
                    <h3>Точки маршрута</h3>

                    <div className="map-list">
                        {points.map((p) => (
                            <button
                                key={p.id}
                                className="map-list-item"
                                onClick={() => navigate(`/point/${p.id}`)}
                            >
                                <span className="map-number">{p.id}</span>
                                <span>{p.title}</span>
                            </button>
                        ))}
                    </div>

                    <button
                        className="primary map-start-btn"
                        onClick={() => navigate("/point/1")}
                    >
                        Начать маршрут →
                    </button>
                </div>
            </div>
        </div>
    );
}