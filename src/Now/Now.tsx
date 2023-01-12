import "./Now.scss"
import Subheading from "../component/subheading";
import NowEx from "../component/nowEx";
import NowHeading from "../component/Nowheading";
function Now () {
    return (
        <div className="Now-container">
            <div className="Now-sub-container">
                <div>
                    <Subheading title="NOW| 사이드워크가 왜 지금 큰 기회 이고,왜 지금 함께 하면 좋나요?" />
            <div>
                <NowHeading text="🚀Global Trend" />
                <NowEx text="하나의 회사가 사용하는 소프트웨어 개수가 최근 3년간 70% 이상 빠르게 증가하고 있습니다.
                    그 중 인사관리 분야(HR SaaS)는 비즈니스 소프트웨어 중 가장 큰 5대 카테고리 중 하나이며,
                    최근3년간 연평균 120% 가장 빠르게 성장하는 분야이고요.이 중 특히 성과/몰입 관리 서비스(performance and engagement)
                    는 인사관리 중에서도 가장 빠르게 성장하는 분야입니다.
                    이미 영미권에서 유니콘 기업으로 성장한 CultureAmp,Lattice에서 미래 사이드워크의 모습을
                        일부 살펴볼 수 있어요." />

                <div>
                    <NowHeading text="🤔한국은 어떨까요?"/>
                    <NowEx text="한국에는 연매출 10억원 이상의 회사만 42만개가 있고, 그 회사애서 일하고 있는 사람이 2,000만명이 넘습니다.
                        글로벌 기업들이 인사관리 소프트웨어에 대해 지출하는 비용만큼 한국 회사들이 투자한다면,9조원 규모(연매출 기준)의
                        거대한 기회가 열리게 됩니다.한국은 이제 시작입니다!" />

                </div>
                <div>
                    <NowHeading text="🍔 성과관리 서비스는 사이드워크입니다." />
                    <NowEx text="대한민국 2,000만명 일하는 사람의 회사에서의 삶(Worklife)의 혁신은 사이드워크가 주도하고 있습니다.초기단계에서
                        누릴 수 있는 업사이드와 더불어 개인의 성장과 영향력을 가장 건강하고 탄탄하게 경험할 수 있는 '좋은 스타트업'을 찾는다면, 잘 찾아오셨어요!👏👏
                        지금의 사이드워크가 바로 그곳입니다" />
                </div>
            </div>
        </div>
    </div>
    </div>
    )
}
export default Now;