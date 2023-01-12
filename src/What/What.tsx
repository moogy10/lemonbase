import "./What.scss"
import Subheading from "../component/subheading";
import MainHeadingEx from "../component/headingex";
function What() {
    return (
        <div className="What-container">
            <div className="What-sub-container">
            <div>
                <Subheading title="WHAT | 사이드워크 팀은 어떤 서비스를 만들고 있나요?" />
                <MainHeadingEx title="사이드의 성과관리 서비스는 지속적인 성과관리를 더 효율적이고 효과적으로 할 수 있도록
                    돕는 서비스 이며,현재 목표 / 리뷰 / 1:1미팅 / 피드백 기능으로 구성되어 있습니다.
                    
                    사이드워크를 통해,일 년에 한두 번이 아니라 일년 내내,목표를 스스로 설정하고,그 과정을 실시간으로 공유하고,
                    또 1:1미팅을 통해서 코칭을 주고 받고, 더 자주 동료들로부터 칭찬과 피드백을 받을 수 있습니다.이 과정에서 사람들과
                    회사 모두, 자기주도적이고 건강하게 성장할수 있어요.
                    
                    사이드워크는 장기적으로 통합적인 인재관리 서비스가 되기 위해,몰입관리(engagement)
                    영역으로도 발전해 나갈 것입니다."
                    />
            </div>
        </div>
        </div>
    )
}

export default What;