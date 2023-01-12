type subTitlePorps = {
    title : string
}

export default function SubTitle ({title} : subTitlePorps) {
    return (
        <div>
            <h4>{title}</h4>
        </div>
    )
}