import "./heading.scss"

type HeadingProps = {
    title: string;
}

export default function MainHeading({title} : HeadingProps){
    return (
        <div className="heading-container">
            <h2>
                {title}
            </h2>
        </div>
    );
}