type NowExProps  = {
    text : string
}

export default function NowEx ({text} : NowExProps) {
    return (
        <div>
            <p>{text}</p>
        </div>
    )
}