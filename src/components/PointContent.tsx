interface Props {
    title: string;
    image: string;
    text: string;
}

export default function PointContent({ title, image, text }: Props) {
    return (
        <>
            <img src={image} alt={title} className="point-image" />

            <div className="card">
                <p>{text}</p>
            </div>
        </>
    );
}