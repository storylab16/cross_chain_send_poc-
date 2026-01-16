import svgPaths from "./svg-dqk4842qto";

function Time() {
  return (
    <div className="basis-0 content-stretch flex grow h-[22px] items-center justify-center min-h-px min-w-px pb-0 pt-[2px] px-0 relative shrink-0" data-name="Time">
      <p className="font-['SF_Pro:Semibold',sans-serif] font-[590] leading-[22px] relative shrink-0 text-[17px] text-black text-center text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        9:41
      </p>
    </div>
  );
}

function Battery() {
  return (
    <div className="h-[13px] relative shrink-0 w-[27.328px]" data-name="Battery">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 27.328 13">
        <g id="Battery">
          <rect height="12" id="Border" opacity="0.35" rx="3.8" stroke="var(--stroke-0, black)" width="24" x="0.5" y="0.5" />
          <path d={svgPaths.p3bbd9700} fill="var(--fill-0, black)" id="Cap" opacity="0.4" />
          <rect fill="var(--fill-0, black)" height="9" id="Capacity" rx="2.5" width="21" x="2" y="2" />
        </g>
      </svg>
    </div>
  );
}

function Levels() {
  return (
    <div className="basis-0 content-stretch flex gap-[7px] grow h-[22px] items-center justify-center min-h-px min-w-px pb-0 pt-px px-0 relative shrink-0" data-name="Levels">
      <div className="h-[12.226px] relative shrink-0 w-[19.2px]" data-name="Cellular Connection">
        <div className="absolute inset-0" style={{ "--fill-0": "rgba(0, 0, 0, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.2 12.2264">
            <path clipRule="evenodd" d={svgPaths.p1e09e400} fill="var(--fill-0, black)" fillRule="evenodd" id="Cellular Connection" />
          </svg>
        </div>
      </div>
      <div className="h-[12.328px] relative shrink-0 w-[17.142px]" data-name="Wifi">
        <div className="absolute inset-0" style={{ "--fill-0": "rgba(0, 0, 0, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.1417 12.3283">
            <path clipRule="evenodd" d={svgPaths.p18b35300} fill="var(--fill-0, black)" fillRule="evenodd" id="Wifi" />
          </svg>
        </div>
      </div>
      <Battery />
    </div>
  );
}

function StatusBar() {
  return (
    <div className="absolute content-stretch flex gap-[154px] items-center justify-center left-0 pb-[19px] pt-[21px] px-[16px] right-0 top-0" data-name="Status Bar">
      <Time />
      <Levels />
    </div>
  );
}

function StatusBar1() {
  return (
    <div className="absolute contents left-[-1px] right-[-1px] top-[-1px]" data-name="status_bar">
      <StatusBar />
    </div>
  );
}

function Close() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="close">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g>
          <rect fill="white" height="24" width="24" />
          <path d={svgPaths.pace200} fill="var(--fill-0, #EFEFEF)" id="Vector" />
          <path d="M15 9L9 15" id="Vector_2" stroke="var(--stroke-0, #191C1E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M9 9L15 15" id="Vector_3" stroke="var(--stroke-0, #191C1E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Controller() {
  return (
    <div className="content-stretch flex items-center justify-end relative shrink-0 w-full" data-name="controller">
      <Close />
    </div>
  );
}

function Check() {
  return (
    <div className="relative shrink-0 size-[76.513px]" data-name="check">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 76.5129 76.5129">
        <g id="check">
          <path d={svgPaths.p530df40} id="Vector" stroke="var(--stroke-0, #0E9E34)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="6.37608" />
          <path d={svgPaths.p25f51000} id="Vector_2" stroke="var(--stroke-0, #0E9E34)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="6.37608" />
        </g>
      </svg>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-col gap-[48px] items-center relative shrink-0 w-full">
      <p className="font-['SF_Compact:Bold',sans-serif] font-[790] h-[24.241px] leading-[23.542px] relative shrink-0 text-[#22221d] text-[20px] text-center w-full">Success </p>
      <Check />
    </div>
  );
}

function Header() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-full" data-name="header">
      <Frame2 />
    </div>
  );
}

function Frame5() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[48px] grow items-center min-h-px min-w-px relative shrink-0 w-full">
      <Header />
      <p className="font-['SF_Compact:Medium',sans-serif] font-[556] leading-[23.542px] relative shrink-0 text-[#22221d] text-[14px] text-center w-full">10 USDC successfully sent from Arbitrum to Optimism!</p>
    </div>
  );
}

function Frame() {
  return (
    <div className="basis-0 bg-[#212022] grow h-[52px] min-h-px min-w-px relative rounded-[100px] shrink-0">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-[10px] relative size-full">
          <p className="font-['Noto_Sans:Display_Medium',sans-serif] font-medium leading-[22px] relative shrink-0 text-[16px] text-nowrap text-white" style={{ fontVariationSettings: "'CTGR' 100, 'wdth' 100" }}>
            Back to Send page
          </p>
        </div>
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="content-stretch flex gap-[3px] h-[52.55px] items-center relative shrink-0 w-full" data-name="button">
      <Frame />
    </div>
  );
}

function Bottom() {
  return (
    <div className="content-stretch flex flex-col items-start justify-end relative shrink-0 w-full" data-name="bottom">
      <Button />
    </div>
  );
}

function Frame1() {
  return (
    <div className="basis-0 bg-white content-stretch flex flex-col gap-[60px] grow items-center min-h-px min-w-px relative shrink-0 w-full">
      <Frame5 />
      <Bottom />
    </div>
  );
}

function Frame4() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[21px] grow h-full items-start min-h-px min-w-px relative shrink-0">
      <Controller />
      <Frame1 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="absolute bg-white content-stretch flex h-[784.405px] items-start justify-center left-1/2 px-[32px] py-[40px] rounded-[40px] top-[66.6px] translate-x-[-50%] w-[393px]">
      <Frame4 />
    </div>
  );
}

export default function Screen() {
  return (
    <div className="bg-[#9e9e98] border border-black border-solid overflow-clip relative rounded-[60px] size-full" data-name="screen">
      <StatusBar1 />
      <Frame3 />
    </div>
  );
}
