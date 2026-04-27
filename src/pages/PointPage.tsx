import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import { points, type EpochKey } from "../data/points";

export default function PointPage() {
    const { id } = useParams();
    const point = points.find(p => p.id === Number(id));

    const [epoch, setEpoch] = useState<EpochKey>("modern");
    const [visible, setVisible] = useState(true);

    if (!point) {
        return <div className="container">Точка не найдена</div>;
    }

    const current = point.epochs[epoch];

    const currentIndex = points.findIndex(p => p.id === point.id);
    const nextPoint = points[currentIndex + 1];


    function handleChange(newEpoch: EpochKey) {
        if (newEpoch === epoch) return;

        setVisible(false);

        setTimeout(() => {
            setEpoch(newEpoch);
            setVisible(true);
        }, 200);
    }

    return (
        <div className={`container epoch-${epoch}`}>
            <h1>{point.title}</h1>

            <p>
                Точка {currentIndex + 1} из {points.length}
            </p>

            {/* ПЕРЕКЛЮЧАТЕЛЬ ЭПОХ */}
            <div className="epoch-switcher">
                <button
                    className={`epoch-btn ${epoch === "past" ? "active" : ""}`}
                    onClick={() => handleChange("past")}
                >
                    Древнее море
                </button>

                <button
                    className={`epoch-btn ${epoch === "mining" ? "active" : ""}`}
                    onClick={() => handleChange("mining")}
                >
                    Добыча
                </button>

                <button
                    className={`epoch-btn ${epoch === "modern" ? "active" : ""}`}
                    onClick={() => handleChange("modern")}
                >
                    Современность
                </button>
            </div>


            <div className={`fade ${visible ? "" : "hidden"}`}>
                <img
                    src={current.image}
                    alt={point.title}
                    className="point-image"
                />

                <div className="card">
                    <p>{current.text}</p>
                </div>
            </div>


            <div style={{ marginTop: 20, display: "flex", gap: 10 }}>
                <Link to="/map">
                    <button>К карте</button>
                </Link>

                {nextPoint && (
                    <Link to={`/point/${nextPoint.id}`}>
                        <button className="primary">Следующая →</button>
                    </Link>
                )}
            </div>
        </div>
    );
}