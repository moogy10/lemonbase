import "./ExBox.scss"

type ExBoxProps = {
    text : string
}

export default function ExBox ({text} : ExBoxProps) {
    return (
        <div className="ExBox">
            <p className="ExText">{text}</p>
        </div>
    )
}