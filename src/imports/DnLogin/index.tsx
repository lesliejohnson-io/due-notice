import svgPaths from "./svg-8uvzdl0mql";
import imgAvatarBase from "./a7bf95878ed852af80e266ffb821ccedfcb67841.png";

function Frame() {
  return (
    <div className="h-[20px] relative shrink-0 w-[72px]">
      <div className="absolute left-0 overflow-clip size-[17px] top-0" data-name="Media / Icon / Filled / chart-bar">
        <div className="absolute inset-[19.37%_15%]" data-name="Icon">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.9 10.4125">
            <g id="Icon">
              <path d={svgPaths.p3fd18a00} fill="var(--fill-0, #F3F4F6)" />
              <path d={svgPaths.p2344bd00} fill="var(--fill-0, #F3F4F6)" />
              <path d={svgPaths.p34b2db00} fill="var(--fill-0, #F3F4F6)" />
            </g>
          </svg>
        </div>
      </div>
      <div className="absolute left-[26px] overflow-clip size-[18px] top-0" data-name="Media / Icon / Filled / wifi">
        <div className="absolute inset-[15.63%_4.98%_18.75%_4.8%]" data-name="Vector (Stroke)">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.2394 11.8125">
            <path clipRule="evenodd" d={svgPaths.p1a56b7e0} fill="var(--fill-0, #F3F4F6)" fillRule="evenodd" id="Vector (Stroke)" />
          </svg>
        </div>
      </div>
      <div className="absolute left-[52px] overflow-clip size-[20px] top-0" data-name="Media / Icon / Filled / battery-100">
        <div className="absolute inset-[28.13%_3.13%_21.88%_3.13%]" data-name="Union">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.75 10">
            <path d={svgPaths.p2910b480} fill="var(--fill-0, #F3F4F6)" id="Union" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-[354px]">
      <p className="[word-break:break-word] font-['Lato:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[12px] text-center text-white tracking-[0.24px] w-[46px]">9:41</p>
      <Frame />
    </div>
  );
}

function DotIndicators() {
  return (
    <div className="absolute aspect-[13/13] left-[73.46%] right-[4.72%] top-0" data-name="Dot Indicators">
      <div className="absolute inset-[-11.65%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.8727 15.8727">
          <path d={svgPaths.p356d4b00} fill="var(--fill-0, #F59E0B)" id="Dot" stroke="var(--stroke-0, #1F2937)" strokeWidth="1.5" />
        </svg>
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Lato:SemiBold',sans-serif] h-[9px] justify-center leading-[0] left-[calc(50%-0.44px)] not-italic text-[#1f2937] text-[9px] text-center top-[calc(50%-0.94px)] tracking-[1px] uppercase w-[10px]">
        <p className="leading-[20px]">2</p>
      </div>
    </div>
  );
}

function AvatarIcons() {
  return (
    <div className="h-[55px] relative shrink-0 w-[59px]" data-name="Avatar / Icons">
      <div className="absolute inset-0 pointer-events-none rounded-[400px]" data-name="Avatar Base">
        <img alt="" className="absolute inset-0 max-w-none object-cover rounded-[400px] size-full" src={imgAvatarBase} />
        <div aria-hidden className="absolute border-[1.5px] border-[rgba(255,255,255,0)] border-solid inset-[-0.75px] rounded-[400.75px]" />
      </div>
      <DotIndicators />
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex flex-col h-[60px] items-center justify-center pt-[16px] relative shrink-0 w-[246px]">
      <div className="[word-break:break-word] flex flex-col font-['Lato:Bold',sans-serif] h-[32px] justify-end leading-[0] not-italic relative shrink-0 text-[16px] text-[rgba(255,255,255,0.7)] text-center tracking-[0.8px] uppercase w-full">
        <p className="leading-[normal]">dashboard</p>
      </div>
    </div>
  );
}

function Header() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="header">
      <AvatarIcons />
      <Frame11 />
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-[331px]">
      <p className="[word-break:break-word] font-['Lato:SemiBold',sans-serif] h-[31px] leading-[36px] not-italic relative shrink-0 text-[12px] text-[rgba(255,255,255,0.5)] tracking-[0.24px] uppercase w-[259px]">total loans balance</p>
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full">
      <p className="[word-break:break-word] font-['Lato:SemiBold',sans-serif] leading-[28px] not-italic relative shrink-0 text-[#51ca58] text-[12px] tracking-[-0.24px] w-[186px]">Paid $698 on Aug 27</p>
    </div>
  );
}

function LoanSummary() {
  return (
    <div className="bg-[#03449e] h-[200px] relative rounded-[8px] shrink-0 w-full" data-name="loan summary">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[12px] items-start px-[16px] py-[8px] relative size-full">
          <Frame5 />
          <p className="[word-break:break-word] font-['Lato:ExtraBold',sans-serif] leading-[32px] not-italic relative shrink-0 text-[#fcfcfc] text-[32px] tracking-[-0.64px] whitespace-nowrap">$93,504.00</p>
          <Frame6 />
          <div className="h-[46px] relative rounded-[10px] shrink-0 w-[338px]" data-name="Button">
            <div className="content-stretch flex gap-[8px] items-center justify-center overflow-clip px-[20px] py-[12px] relative rounded-[inherit] size-full">
              <div className="[word-break:break-word] flex flex-col font-['Lato:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-center text-white whitespace-nowrap">
                <p className="leading-[24px] whitespace-pre">{`Pay Now:  $698.00`}</p>
              </div>
            </div>
            <div aria-hidden className="absolute border border-[#31b237] border-solid inset-[-1px] pointer-events-none rounded-[11px]" />
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full">
      <div className="[word-break:break-word] flex flex-col font-['Lato:Bold',sans-serif] h-[22px] justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-[rgba(255,255,255,0.6)] tracking-[0.12px] uppercase w-[326px]">
        <p className="leading-[normal]">pay from</p>
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full">
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Media / Icon / Filled / check-circle">
        <div className="absolute inset-[15%]" data-name="Icon">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.8 16.8">
            <path clipRule="evenodd" d={svgPaths.p2b3d8fc0} fill="var(--fill-0, #2186EB)" fillRule="evenodd" id="Icon" />
          </svg>
        </div>
      </div>
      <p className="[word-break:break-word] font-['Lato:Black',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#fcfcfc] text-[14px] whitespace-nowrap">PNC Bank</p>
    </div>
  );
}

function SavedPaymentTypes() {
  return (
    <div className="bg-[#03449e] h-[89px] relative rounded-[8px] shrink-0 w-[239px]" data-name="saved payment types">
      <div className="content-stretch flex flex-col gap-px items-start overflow-clip px-[16px] py-[8px] relative rounded-[inherit] size-full">
        <div className="[word-break:break-word] flex flex-col font-['Lato:ExtraBold',sans-serif] h-[22px] justify-center leading-[0] not-italic relative shrink-0 text-[#51ca58] text-[10px] tracking-[0.2px] uppercase w-[131px]">
          <p className="leading-[36px]">verified account</p>
        </div>
        <Frame1 />
        <p className="[word-break:break-word] font-['Lato:Regular',sans-serif] leading-[0] min-w-full not-italic relative shrink-0 text-[0px] text-[rgba(255,255,255,0.5)] w-[min-content] whitespace-pre-wrap">
          <span className="leading-[normal] text-[12px]">{`  `}</span>
          <span className="leading-[normal] text-[12px]">{`Checking  `}</span>
          <span className="leading-[normal] text-[12px]">{`···· `}</span>
          <span className="leading-[normal] text-[12px]">2232</span>
        </p>
      </div>
      <div aria-hidden className="absolute border border-[#22c55e] border-solid inset-[-1px] pointer-events-none rounded-[9px]" />
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex items-center opacity-60 relative shrink-0 w-full">
      <p className="[word-break:break-word] font-['Lato:Black',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#fcfcfc] text-[14px] whitespace-nowrap">Grandmother A</p>
    </div>
  );
}

function SavedPaymentTypes1() {
  return (
    <div className="bg-[#03449e] h-[89px] relative rounded-[8px] shrink-0 w-[210px]" data-name="saved payment types">
      <div className="content-stretch flex flex-col gap-px items-start overflow-clip px-[16px] py-[8px] relative rounded-[inherit] size-full">
        <div className="[word-break:break-word] flex flex-col font-['Lato:ExtraBold',sans-serif] h-[22px] justify-center leading-[0] not-italic relative shrink-0 text-[10px] text-[rgba(255,255,255,0.5)] tracking-[0.2px] uppercase w-[131px]">
          <p className="leading-[36px]">guest account</p>
        </div>
        <Frame2 />
        <p className="[word-break:break-word] font-['Lato:Regular',sans-serif] leading-[normal] min-w-full not-italic relative shrink-0 text-[12px] text-[rgba(255,255,255,0.5)] w-[min-content]">Send a request</p>
      </div>
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.2)] border-solid inset-[-1px] pointer-events-none rounded-[9px]" />
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex gap-[16px] h-[99px] items-center overflow-x-auto overflow-y-clip pb-[8px] pt-[4px] px-[2px] relative shrink-0 w-[371px]">
      <SavedPaymentTypes />
      <SavedPaymentTypes1 />
    </div>
  );
}

function From() {
  return (
    <div className="h-[141px] relative shrink-0 w-full" data-name="From">
      <div className="content-stretch flex flex-col gap-[4px] items-start overflow-clip py-[8px] relative rounded-[inherit] size-full">
        <Frame12 />
        <Frame7 />
      </div>
      <div aria-hidden className="absolute border-[rgba(156,163,175,0.5)] border-b border-solid border-t inset-0 pointer-events-none" />
    </div>
  );
}

function Frame4() {
  return (
    <div className="absolute content-stretch flex gap-[57px] items-center left-0 top-0 w-[331px]">
      <p className="[word-break:break-word] font-['Lato:SemiBold',sans-serif] h-[31px] leading-[36px] not-italic relative shrink-0 text-[12px] text-[rgba(255,255,255,0.5)] tracking-[0.24px] uppercase w-[259px] whitespace-pre-wrap">{`recent activity  ·  past 30 days`}</p>
      <div className="overflow-clip relative shrink-0 size-[18px]" data-name="Media / Icon/Filled/arrow-right">
        <div className="absolute inset-[19.38%_15%]" data-name="Icon">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.6 11.025">
            <path clipRule="evenodd" d={svgPaths.p2529ef90} fill="var(--fill-0, white)" fillOpacity="0.5" fillRule="evenodd" id="Icon" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="absolute content-stretch flex gap-[50px] h-[67px] items-start left-[3px] pb-[12px] pt-[8px] top-[115px] w-[328px]">
      <div aria-hidden className="absolute border-[rgba(255,255,255,0.2)] border-solid border-t inset-0 pointer-events-none" />
      <div className="[word-break:break-word] font-['Lato:Medium',sans-serif] h-[68px] leading-[0] not-italic relative shrink-0 text-[0px] text-white tracking-[0.14px] w-[158px]">
        <p className="leading-[20px] mb-0 text-[12px] text-[rgba(255,255,255,0.5)]">Aug 05</p>
        <p className="mb-0 text-[14px]">
          <span className="[word-break:break-word] font-['Lato:Bold',sans-serif] leading-[20px] not-italic">{`VISA Gift Card `}</span>
          <span className="leading-[20px]">··5122</span>
        </p>
        <p className="leading-[20px] text-[12px] text-[rgba(255,255,255,0.5)]">Payments and Credits</p>
      </div>
      <div className="[word-break:break-word] flex flex-col font-['Lato:Medium',sans-serif] h-[59px] justify-end leading-[0] not-italic relative shrink-0 text-[#1bfa6c] text-[0px] text-right tracking-[0.14px] w-[120px]">
        <p className="leading-[20px] mb-0 text-[#51ca58] text-[14px]">-$400.00</p>
        <p className="leading-[20px] text-[12px] text-[rgba(255,255,255,0.6)]">$94,202.00</p>
      </div>
    </div>
  );
}

function From1() {
  return (
    <div className="h-[31px] relative shrink-0 w-full" data-name="From">
      <Frame4 />
      <Frame3 />
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex gap-[50px] items-start pb-[12px] pt-[8px] relative shrink-0 w-[328px]">
      <div aria-hidden className="absolute border-[rgba(255,255,255,0.2)] border-solid border-t inset-0 pointer-events-none" />
      <div className="[word-break:break-word] font-['Lato:Medium',sans-serif] h-[68px] leading-[0] not-italic relative shrink-0 text-[0px] text-white tracking-[0.14px] w-[158px] whitespace-pre-wrap">
        <p className="leading-[20px] mb-0 text-[12px] text-[rgba(255,255,255,0.5)]">Aug 27</p>
        <p className="font-['Lato:Bold',sans-serif] leading-[20px] mb-0 text-[14px]">PNC Bank</p>
        <p className="leading-[20px] text-[12px] text-[rgba(255,255,255,0.5)]">{`Checking  ···· 2232`}</p>
      </div>
      <div className="[word-break:break-word] flex flex-col font-['Lato:Medium',sans-serif] h-[59px] justify-end leading-[0] not-italic relative shrink-0 text-[#1bfa6c] text-[0px] text-right tracking-[0.14px] w-[120px]">
        <p className="leading-[20px] mb-0 text-[#51ca58] text-[14px]">-$698.00</p>
        <p className="leading-[20px] text-[12px] text-[rgba(255,255,255,0.6)]">$93,504.00</p>
      </div>
    </div>
  );
}

function LoanSummary1() {
  return (
    <div className="bg-[#03449e] h-[199px] relative rounded-[8px] shrink-0 w-full" data-name="loan summary">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[8px] items-start px-[16px] py-[8px] relative size-full">
          <From1 />
          <Frame8 />
        </div>
      </div>
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full">
      <p className="[word-break:break-word] font-['Lato:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[12px] text-[rgba(255,255,255,0.5)] tracking-[0.36px] uppercase w-[315px]">goals</p>
    </div>
  );
}

function Frame10() {
  return (
    <div className="h-[22px] relative shrink-0 w-full">
      <div className="absolute bg-[rgba(217,217,217,0.3)] h-[4px] left-0 rounded-[20px] top-[7px] w-[332px]" />
      <div className="absolute bg-[#31b237] h-[4px] left-0 rounded-bl-[20px] rounded-tl-[20px] top-[7px] w-[190px]" />
    </div>
  );
}

function GoalStreak() {
  return (
    <div className="bg-[#03449e] relative rounded-[8px] shrink-0 w-full" data-name="goal-streak">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[8px] items-start pb-[8px] pt-[16px] px-[16px] relative size-full">
          <Frame9 />
          <p className="[word-break:break-word] font-['Lato:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[13px] text-white w-full">You’re on a 21-payment streak!</p>
          <Frame10 />
        </div>
      </div>
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute contents left-[319px] top-[39px]">
      <p className="[word-break:break-word] absolute font-['Lato:Medium',sans-serif] leading-[normal] left-[319px] not-italic text-[#d1d5db] text-[10px] top-[39px] tracking-[0.1px] whitespace-nowrap">Help</p>
    </div>
  );
}

function Group10() {
  return (
    <div className="absolute contents left-[319px] top-[12px]">
      <Group3 />
      <div className="absolute left-[319px] overflow-clip size-[20px] top-[12px]" data-name="Media / Icon / Unfilled / chat-bubble-bottom-center-text">
        <div className="absolute inset-[12.5%_9.38%]" data-name="Vector">
          <div className="absolute inset-[-5%_-4.62%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.75 16.5">
              <path d={svgPaths.p1c3cf790} id="Vector" stroke="var(--stroke-0, #D1D5DB)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute contents left-[138px] top-[39px]">
      <p className="[word-break:break-word] absolute font-['Lato:Medium',sans-serif] leading-[normal] left-[138px] not-italic text-[#f59e0b] text-[10px] top-[39px] tracking-[0.1px] whitespace-nowrap">Payments</p>
    </div>
  );
}

function Group4() {
  return (
    <div className="absolute contents left-[138px] top-[39px]">
      <Group1 />
    </div>
  );
}

function Group8() {
  return (
    <div className="absolute contents left-[138px] top-[12px]">
      <Group4 />
      <div className="absolute left-[150px] overflow-clip size-[20px] top-[12px]" data-name="Media / Icon / Unfilled / credit-card">
        <div className="absolute inset-[18.75%_9.38%]" data-name="Vector">
          <div className="absolute inset-[-6%_-4.62%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.75 14">
              <path d={svgPaths.p1acab880} id="Vector" stroke="var(--stroke-0, #F59E0B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute contents left-[234px] top-[39px]">
      <p className="[word-break:break-word] absolute font-['Lato:Medium',sans-serif] leading-[normal] left-[234px] not-italic text-[#d1d5db] text-[10px] top-[39px] tracking-[0.1px] whitespace-nowrap">Loans</p>
    </div>
  );
}

function Group5() {
  return (
    <div className="absolute contents left-[234px] top-[39px]">
      <Group2 />
    </div>
  );
}

function Group9() {
  return (
    <div className="absolute contents left-[234px] top-[12px]">
      <Group5 />
      <div className="absolute left-[237px] overflow-clip size-[20px] top-[12px]" data-name="Media / Icon / Unfilled / queue-list">
        <div className="absolute inset-[18.75%_15.63%]" data-name="Vector">
          <div className="absolute inset-[-6%_-5.45%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.25 14">
              <path d={svgPaths.p32e27a00} id="Vector" stroke="var(--stroke-0, #E5E7EB)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Group() {
  return (
    <div className="absolute contents left-[36px] top-[39px]">
      <p className="[word-break:break-word] absolute font-['Roboto:Medium',sans-serif] font-medium leading-[normal] left-[36px] text-[#d1d5db] text-[10px] top-[39px] tracking-[0.1px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        Dashboard
      </p>
    </div>
  );
}

function Group6() {
  return (
    <div className="absolute contents left-[36px] top-[39px]">
      <Group />
    </div>
  );
}

function Group7() {
  return (
    <div className="absolute contents left-[36px] top-[12px]">
      <Group6 />
      <div className="absolute left-[51px] overflow-clip size-[20px] top-[12px]" data-name="Media / Icon / Unfilled / library">
        <div className="absolute inset-[12.5%]" data-name="Vector">
          <div className="absolute inset-[-5%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.5002 16.5">
              <path d={svgPaths.p2f28f300} id="Vector" stroke="var(--stroke-0, #D1D5DB)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <div className="absolute bg-[#002f7f] h-[68px] left-0 overflow-clip shadow-[0px_-6px_15px_-2px_rgba(16,24,40,0.08),0px_-6px_15px_-2px_rgba(16,24,40,0.08)] top-[784px] w-[393px]" data-name="footer">
      <Group10 />
      <Group8 />
      <Group9 />
      <Group7 />
    </div>
  );
}

export default function DnLogin() {
  return (
    <div className="bg-[#002159] content-stretch flex flex-col gap-[8px] items-start p-[16px] relative size-full" data-name="dn-login">
      <Frame13 />
      <Header />
      <LoanSummary />
      <From />
      <LoanSummary1 />
      <GoalStreak />
      <Footer />
    </div>
  );
}