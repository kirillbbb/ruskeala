import { type EpochKey } from "../data/points";

interface Props {
    epoch: EpochKey;
    setEpoch: (epoch: EpochKey) => void;
}

export default function EpochSwitcher({ epoch, setEpoch }: Props) {
    return (
        <div className="epoch-switcher">
            <button
                className={`epoch-btn ${epoch === "past" ? "active" : ""}`}
                onClick={() => setEpoch("past")}
            >
                Древность
            </button>

            <button
                className={`epoch-btn ${epoch === "mining" ? "active" : ""}`}
                onClick={() => setEpoch("mining")}
            >
                Добыча
            </button>

            <button
                className={`epoch-btn ${epoch === "modern" ? "active" : ""}`}
                onClick={() => setEpoch("modern")}
            >
                Современность
            </button>
        </div>
    );
}