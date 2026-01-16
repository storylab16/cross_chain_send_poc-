import svgPaths from "./svg-gbevjh1ze5";

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

function Frame17() {
  return (
    <div className="content-stretch flex flex-col items-start leading-[23.542px] relative shrink-0 text-[#22221d] text-center w-full">
      <p className="font-['SF_Compact:Bold',sans-serif] font-[790] h-[24.241px] relative shrink-0 text-[20px] w-full">{`Send `}</p>
      <p className="font-['SF_Compact:Light',sans-serif] font-[350.524] h-[24.241px] relative shrink-0 text-[16px] w-full">Cross-chain Send PoC</p>
    </div>
  );
}

function Group8() {
  return (
    <div className="relative shrink-0 size-[64.797px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 64.7966 64.7966">
        <g id="Group 1707483996">
          <path d={svgPaths.p2300dc00} fill="var(--fill-0, black)" id="Vector" stroke="var(--stroke-0, white)" strokeWidth="2.69986" />
          <g id="Group 1707483857">
            <path d={svgPaths.p2466d200} id="Vector 9372" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeWidth="4.04979" />
            <path d={svgPaths.p11839d00} id="Vector 9373" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeWidth="4.04979" />
            <path d={svgPaths.p178e0d80} id="Vector 9374" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeWidth="4.04979" />
            <path d={svgPaths.p313ea600} id="Vector 9375" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeWidth="4.04979" />
            <path d={svgPaths.p15704c00} id="Vector 9376" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeWidth="4.04979" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex flex-col gap-[30px] items-center relative shrink-0 w-full">
      <Frame17 />
      <Group8 />
    </div>
  );
}

function Header() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="header">
      <Frame6 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="bg-white relative rounded-[20px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-0 border-black border-solid inset-0 pointer-events-none rounded-[20px]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[10px] py-[44px] relative w-full">
          <p className="font-['SF_Compact:Black',sans-serif] font-[1000] h-full leading-[23.542px] relative shrink-0 text-[64px] text-black text-center w-[80px]">
            <span className="font-['SF_Compact:Semibold',sans-serif] font-[656.2]">10</span>{" "}
          </p>
        </div>
      </div>
    </div>
  );
}

function Frame7() {
  return (
    <div className="h-0 relative shrink-0 w-full">
      <div className="absolute inset-[-0.5px_0]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 329 1">
          <g id="Frame 2087326880">
            <path d="M0 0.5H329" id="Vector 9807" stroke="var(--stroke-0, black)" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group() {
  return (
    <div className="absolute inset-[55.84%_33.01%_12.88%_52.06%]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.98494 6.2542">
        <g id="Group">
          <path d={svgPaths.p381999f0} fill="var(--fill-0, #12AAFF)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute inset-[37.38%_21.85%_19.31%_58.83%]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.86472 8.66184">
        <g id="Group">
          <path d={svgPaths.p2af42280} fill="var(--fill-0, #12AAFF)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute contents inset-[37.38%_21.85%_12.88%_52.06%]" data-name="Group">
      <Group />
      <Group1 />
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute contents inset-[37.38%_21.85%_12.88%_52.06%]" data-name="Group">
      <Group2 />
    </div>
  );
}

function Group4() {
  return (
    <div className="absolute inset-[8.66%_13.35%_8.73%_13.36%]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.6579 16.5232">
        <g id="Group">
          <path d={svgPaths.pb5a4600} fill="var(--fill-0, #9DCCED)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group5() {
  return (
    <div className="absolute inset-[29.92%_38.39%_12.89%_21.94%]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.93273 11.4368">
        <g id="Group">
          <path d={svgPaths.p6cefb00} fill="var(--fill-0, white)" id="Vector" />
          <path d={svgPaths.p148b4b70} fill="var(--fill-0, white)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Group6() {
  return (
    <div className="absolute contents inset-[8.66%_13.35%_8.73%_13.36%]" data-name="Group">
      <div className="absolute inset-[11.78%_16.09%_11.8%_16.14%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.5533 15.283">
          <path d={svgPaths.p3180c440} fill="var(--fill-0, #213147)" id="Vector" />
        </svg>
      </div>
      <Group3 />
      <Group4 />
      <div className="absolute inset-[73.04%_61.67%_17.46%_29.9%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.68672 1.89838">
          <path d={svgPaths.p3975d100} fill="var(--fill-0, #213147)" id="Vector" />
        </svg>
      </div>
      <Group5 />
    </div>
  );
}

function Group7() {
  return (
    <div className="absolute contents inset-[8.66%_13.35%_8.73%_13.36%]" data-name="Group">
      <Group6 />
    </div>
  );
}

function Component() {
  return (
    <div className="absolute contents inset-[8.66%_8.65%_8.66%_8.66%] mix-blend-luminosity" data-name="_2405588477232">
      <div className="absolute inset-[8.66%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
          <g id="Vector"></g>
        </svg>
      </div>
      <Group7 />
    </div>
  );
}

function LayerX() {
  return (
    <div className="absolute contents inset-[8.66%_8.65%_8.66%_8.66%] mix-blend-luminosity" data-name="Layer_x0020_1">
      <Component />
    </div>
  );
}

function Eth() {
  return (
    <div className="overflow-clip relative shrink-0 size-[20px]" data-name="eth">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20.0002 20">
        <g id="Group">
          <path d={svgPaths.p35d95880} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
      <LayerX />
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <Eth />
      <p className="font-['SF_Compact:Medium',sans-serif] font-[556] leading-[23.542px] relative shrink-0 text-[#22221d] text-[14px] text-nowrap">{`Arbitrum `}</p>
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex h-[24px] items-center justify-between relative shrink-0 w-full">
      <Frame12 />
      <p className="font-['SF_Compact:Medium',sans-serif] font-[556] leading-[23.542px] relative shrink-0 text-[#22221d] text-[14px] text-nowrap">{`Balance: 200 USDC `}</p>
    </div>
  );
}

function List() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="list">
      <div className="flex flex-col items-end justify-center size-full">
        <div className="content-stretch flex flex-col items-end justify-center px-[20px] py-[4px] relative size-full">
          <Frame8 />
        </div>
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="bg-white content-stretch flex flex-col h-[160.174px] items-end relative rounded-[20px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-black border-solid inset-[-1px] pointer-events-none rounded-[21px]" />
      <Frame1 />
      <Frame7 />
      <List />
    </div>
  );
}

function Frame3() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col gap-[10px] items-start justify-center leading-[23.542px] p-[10px] relative text-[14px] text-center text-nowrap w-full">
          <p className="font-['SF_Compact:Black',sans-serif] font-[1000] relative shrink-0 text-black">To</p>
          <p className="font-['SF_Compact:Bold',sans-serif] font-[790] relative shrink-0 text-[#ddd]">Wallet address or ENS name</p>
        </div>
      </div>
    </div>
  );
}

function Frame4() {
  return (
    <div className="bg-white h-[94px] relative rounded-[20px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-black border-solid inset-0 pointer-events-none rounded-[20px]" />
      <div className="content-stretch flex flex-col items-start p-[10px] relative size-full">
        <Frame3 />
      </div>
    </div>
  );
}

function Input() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[11px] grow items-center min-h-px min-w-px relative shrink-0 w-full" data-name="input">
      <Frame2 />
      <Frame4 />
    </div>
  );
}

function Frame11() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[32px] grow items-center min-h-px min-w-px relative shrink-0 w-full">
      <Header />
      <Input />
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex h-full items-center relative shrink-0">
      <p className="font-['SF_Compact:Medium',sans-serif] font-[556] leading-[23.542px] relative shrink-0 text-[#22221d] text-[14px] text-center text-nowrap">Fee</p>
    </div>
  );
}

function Frame13() {
  return (
    <div className="bg-[#efefef] content-stretch flex h-full items-center justify-center px-[10px] py-[5px] relative rounded-[100px] shrink-0">
      <p className="font-['SF_Compact:Bold',sans-serif] font-[790] leading-[22px] relative shrink-0 text-[#22221d] text-[10px] text-center text-nowrap">Paymaster</p>
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-[149px]">
      <div className="flex flex-row items-center self-stretch">
        <Frame14 />
      </div>
      <div className="flex flex-row items-center self-stretch">
        <Frame13 />
      </div>
    </div>
  );
}

function Frame16() {
  return (
    <div className="content-stretch flex gap-[2px] items-start justify-end leading-[22px] relative shrink-0 text-[14px] text-nowrap">
      <p className="font-['SF_Compact:Bold',sans-serif] font-[790] relative shrink-0 text-[#22221d]">0.2343434 USDC</p>
      <p className="font-['SF_Compact:Medium',sans-serif] font-[556] relative shrink-0 text-[#8f8f8f] text-center">($0.23)</p>
    </div>
  );
}

function List1() {
  return (
    <div className="relative shrink-0 w-full" data-name="list">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[6px] py-0 relative w-full">
          <Frame15 />
          <Frame16 />
        </div>
      </div>
    </div>
  );
}

function Review() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="review">
      <List1 />
    </div>
  );
}

function Frame() {
  return (
    <div className="basis-0 bg-[#212022] grow h-[52px] min-h-px min-w-px relative rounded-[100px] shrink-0">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-[10px] relative size-full">
          <p className="font-['Noto_Sans:Display_Medium',sans-serif] font-medium leading-[22px] relative shrink-0 text-[16px] text-nowrap text-white" style={{ fontVariationSettings: "'CTGR' 100, 'wdth' 100" }}>
            Confirm
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
    <div className="content-stretch flex flex-col gap-[20px] items-start justify-end relative shrink-0 w-full" data-name="bottom">
      <Review />
      <Button />
    </div>
  );
}

function Frame5() {
  return (
    <div className="basis-0 bg-white content-stretch flex flex-col gap-[60px] grow items-center min-h-px min-w-px relative shrink-0 w-full">
      <Frame11 />
      <Bottom />
    </div>
  );
}

function Frame10() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[21px] grow h-full items-start min-h-px min-w-px relative shrink-0">
      <Controller />
      <Frame5 />
    </div>
  );
}

function Frame9() {
  return (
    <div className="absolute bg-white content-stretch flex h-[784.405px] items-start justify-center left-1/2 px-[32px] py-[40px] rounded-[40px] top-[66.6px] translate-x-[-50%] w-[393px]">
      <Frame10 />
    </div>
  );
}

export default function Screen() {
  return (
    <div className="bg-[#9e9e98] border border-black border-solid overflow-clip relative rounded-[60px] size-full" data-name="screen">
      <StatusBar1 />
      <Frame9 />
    </div>
  );
}
