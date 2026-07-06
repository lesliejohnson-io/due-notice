function Frame() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-[331px]">
      <p className="[word-break:break-word] font-['Lato:SemiBold',sans-serif] h-[31px] leading-[36px] not-italic relative shrink-0 text-[12px] text-[rgba(255,255,255,0.5)] tracking-[0.24px] uppercase w-[259px]">total loans balance</p>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full">
      <p className="[word-break:break-word] font-['Lato:SemiBold',sans-serif] leading-[28px] not-italic relative shrink-0 text-[#51ca58] text-[12px] tracking-[-0.24px] w-[186px]">Paid $698 on Aug 27</p>
    </div>
  );
}

export default function LoanSummary() {
  return (
    <div className="bg-[#03449e] content-stretch flex flex-col gap-[12px] items-start overflow-clip px-[16px] py-[8px] relative rounded-[8px] size-full" data-name="loan summary">
      <Frame />
      <p className="[word-break:break-word] font-['Lato:ExtraBold',sans-serif] leading-[32px] not-italic relative shrink-0 text-[#fcfcfc] text-[32px] tracking-[-0.64px] whitespace-nowrap">$93,504.00</p>
      <Frame1 />
      <div className="h-[46px] relative rounded-[10px] shrink-0 w-[338px]" data-name="Button">
        <div className="content-stretch flex gap-[8px] items-center justify-center overflow-clip px-[20px] py-[12px] relative rounded-[inherit] size-full">
          <div className="[word-break:break-word] flex flex-col font-['Lato:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-center text-white whitespace-nowrap">
            <p className="leading-[24px] whitespace-pre">{`Pay Now:  $698.00`}</p>
          </div>
        </div>
        <div aria-hidden className="absolute border border-[#31b237] border-solid inset-[-1px] pointer-events-none rounded-[11px]" />
      </div>
    </div>
  );
}