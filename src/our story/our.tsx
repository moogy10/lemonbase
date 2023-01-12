import "./our.scss"
import MainHeading from "../component/heading"
import MainHeadingEx from "../component/headingex"
import SubTitle from "../component/subtitle"
function Our () {
    return (
        <div className="ourstory-container">
            <div className="ourstory-sub-container">
            <MainHeading 
                title="Our Story 🐶"
            />
            <SubTitle 
            title="사이드워크와 함께 성장중인 고객"
            />
            <MainHeadingEx title="2020년 4월 서비스 런칭후 매월50% 이상 빠르게 성장하며, 시대를 선도하는 수많은 기업들이 이미 사이드 워크와 함께 성과 관리를 혁식하고 있습니다"/>
            <SubTitle 
            title="폭발적인 성장"
            />
            <MainHeadingEx 
                title="피드백은 서로의 건강한 성장에 좋은 자양분이 됩니다. 사이드워크는 의미있는 피드백을 더 저극적으로 주고받을
                수있는 도구를 제공하며, 구성원들의 성과관리를 효율적으로 돕고 있습니다.
                사이드워크가 고객에게 전하는 가치는 사이드워크 제품을 통해 구성원들이 수시로 주고받은 피드백, 1:1미팅,
                상시관리하는 목표로 전달됩니다. 제품출시 2주년 (2022년 4월) 기준 피드백 수는 총 200만건을 돌파, 이후
                더욱 빠르게 증가하고 있습니다."
            />
            <SubTitle 
            title="사이드워크의 성장을 지원하는 투자자"
            />
            <MainHeadingEx title="2021년 국내 SEED 라운드로는 매우 드물게 62억원의 대규모 투자를 유치했습니다. 이어 2023년 시리즈 A 투자를
                유치하며 누적 투자유치액이 140억원으로 늘었습니다. 한국을 넘어 글로벌 서비스로 더 큰 그림을 그려나갈 수 있도록
                센드버드의 김동신 대표님,토스의 이승건 대표님, 카카오의 인사를 총괄하셨던 황성현 대표님이 투자자이자 advisor로 
                참여해주셨습니다." />
        </div>
    </div>
    )
}
export default Our