import "./How.scss"
import Subheading from "../component/subheading";
import ExBox from "../component/ExBox";
import SubTitle from "../component/subtitle";
function How () {
    return (
        <div className="how-container">
            <div className="how-sub-container">
            <div>
                <Subheading 
                title ="HOW | 사이드워크 팀은 이문제를 어떻게 해결하려고 하나요?"
                />
                <SubTitle
                title="사이드워크 팀은 이문제를 지속적인 성과 관리(Countinuous Performance Management)로 해결할수 있다고 믿습니다."
                />

            </div>
            <div>
                <ExBox 
                text="CPM이란, 말 그대로 회사와 구성원 개인 끊임없이 성과와 성장을 관리 한다는 것을 의미해요.
                매년초 목표를 설정하고 연말에 평가를 받는 방식이 아니라,성과관리를 위한 다음의 활동들이 1년 내내 실시간으로 
                이루어지게 되죠." 
                />
                <li>목표 설정: 단위 기간 동안 회사-팀-개인이 달성할 목표를 정하는 것</li>
                <li>목표 체크인: 목표를 잘 달성하고 있는지 정기적으로 확인하는 것</li>
                <li>정기 리뷰(평가):목표의 달성여부(혹은 개인의 역량) 등을 근거로 구성월을 리뷰(평가)하는 것</li>
                <li>1:1미팅 : 목표와 전략, 업무 현황을 sync 하고 성장을 위한 다양한 어제단로 1:1대화를 나누는 것</li>
                <li>수시 피드백: 수시로 구성원 간 감사/인정/응원/조원 등 성장을 위한 피드백을 주고 받는 것</li>
            </div>
        </div>
    </div>
    )
}

export default How;