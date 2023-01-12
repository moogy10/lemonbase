type NowHeadingProps = {
    text : string
}

export default function NowHeading ({text} : NowHeadingProps) {
    return (
        <div>
            <h4>{text}</h4>
        </div>
    )
}