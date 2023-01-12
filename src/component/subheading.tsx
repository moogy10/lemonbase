import "./subheading.scss"

type SubheadingPorps = {
    title : string;
}

export default function Subheading ({title} : SubheadingPorps) {
    return (
        <div className="sub-container">
            <h3>{title}</h3>
        </div>
    )
}