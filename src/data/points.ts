export type EpochKey = "past" | "mining" | "modern";

export interface Point {
    id: number;
    title: string;
    epochs: {
        past: { text: string; image: string };
        mining: { text: string; image: string };
        modern: { text: string; image: string };
    };
}

export const points: Point[] = [
    {
        id: 1,
        title: "1 тест Мраморный каньон",
        epochs: {
            past: {
                text: "1111Когда-то здесь было древнее море...",
                image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470"
            },
            mining: {
                text: "111Здесь добывали мрамор...",
                image: "https://images.unsplash.com/photo-1581090700227-1e8a1c1d5f8a"
            },
            modern: {
                text: "111Сегодня это туристическая зона...",
                image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee"
            }
        }
    },
    {
        id: 2,
        title: "Мраморный каньон",
        epochs: {
            past: {
                text: "Когда-то здесь было древнее море...",
                image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470"
            },
            mining: {
                text: "Здесь добывали мрамор...",
                image: "https://images.unsplash.com/photo-1581090700227-1e8a1c1d5f8a"
            },
            modern: {
                text: "Сегодня это туристическая зона...",
                image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee"
            }
        }
    },
    {
        id: 3,
        title: "333Мраморный каньон",
        epochs: {
            past: {
                text: "333Когда-то здесь было древнее море...",
                image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470"
            },
            mining: {
                text: "333Здесь добывали мрамор...",
                image: "https://images.unsplash.com/photo-1581090700227-1e8a1c1d5f8a"
            },
            modern: {
                text: "333Сегодня это туристическая зона...",
                image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee"
            }
        }
    },
    {
        id: 4,
        title: "444Мраморный каньон",
        epochs: {
            past: {
                text: "Когда-то здесь было древнее море...",
                image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470"
            },
            mining: {
                text: "444Здесь добывали мрамор...",
                image: "https://images.unsplash.com/photo-1581090700227-1e8a1c1d5f8a"
            },
            modern: {
                text: "4444Сегодня это туристическая зона...",
                image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee"
            }
        }
    },
    {
        id: 5,
        title: "555Мраморный каньон",
        epochs: {
            past: {
                text: "555Когда-то здесь было древнее море...",
                image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470"
            },
            mining: {
                text: "555Здесь добывали мрамор...",
                image: "https://images.unsplash.com/photo-1581090700227-1e8a1c1d5f8a"
            },
            modern: {
                text: "55Сегодня это туристическая зона...",
                image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee"
            }
        }
    },
    {
        id: 6,
        title: "666Мраморный каньон",
        epochs: {
            past: {
                text: "666Когда-то здесь было древнее море...",
                image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470"
            },
            mining: {
                text: "66Здесь добывали мрамор...",
                image: "https://images.unsplash.com/photo-1581090700227-1e8a1c1d5f8a"
            },
            modern: {
                text: "66Сегодня это туристическая зона...",
                image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee"
            }
        }
    },

];