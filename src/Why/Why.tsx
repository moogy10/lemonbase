import MainHeading from "../component/heading"
import "./Why.scss"
import ExBox from "../component/ExBox"
import Subheading from "../component/subheading"
import SubTitle from "../component/subtitle"
import MainHeadingEx from "../component/headingex"
function Why() {
    return (
        <div className="Why-container">
            <div className="Why-sub-container">
            <div>
                <MainHeading
                title="Why Sidewalkplay?"
                />
                {/* <h2>Why SidewalkPaly?</h2> */}
                <MainHeadingEx 
                title="스타트업부터 대기업까지 보편적으로 겪고 있는 '사람 문제'를 기술로써 해결합니다."
                />
            </div>
            <div>
                <Subheading 
                title="Why | 레몬베이스 팀은 어떤 문제를 해결하기 위해 모였나요?" 
                />
                <SubTitle
                title="회사에서 삶이 돈을 벌기 위해 수동적으로 보내는 시간이 아닌, '나와 조직의 성장과 성공을 위해 주도적으로 활용하는 시작'이 될 수 있도록
                일하는 방식을 기술을 통해 혁신하고자 합니다."
                />
            </div>
            <div>
                <ExBox 
                text ="사람은 깨어 있는 시간의 70%를 일터에서 보낸다고 합니다.그 시간이 '돈을 벌기 위한 수동적안 시간'이 라면 무척 괴로운 일이 될
                텐데요.우리나라에2000만명이 넘는 사람들이 일하고 있지만 아쉽게도 아직 대부분,회사에서 할당한 목표를 수행하고, 1년에 한 번 평가를
                받는,'수동적인 방식' 으로 일하고 있습니다.
                '나와 조직의 성장과 성공을 위해 주도적으로 활용하는 시간'이 될 수 있도록, 사이드워크 팀은 일하는 방식 을 혁신합니다.
                사이드워크 리더십 팁은 '창업 초기 스타트업'이 '유니콘'으로 성장하는 과정에서 약 10년 간 성공과 실패를 진하게 경험했다는 공통점이
                있는데요,이 과정에서 회사와 구성원이 함께 성장할 수 있는 방법에 대한 고민이 많았고,이 문제를 해결하기 위해 사이드워크를 시작했습니다.더 많은
                사람들이'건강한 성장'을 경험할 수 있도록 돕고 싶어요.
                "
                />
            </div>
        </div>
    </div>
    )
}

export default Why