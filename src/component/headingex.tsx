import "./headingex.scss";

type MainHeadingExPorps = {
    title : string
}

export default function MainHeadingEx({title}:MainHeadingExPorps ) {
    return (
        <div>
            <p className="HeadingEx">{title}</p>
        </div>
    )
}