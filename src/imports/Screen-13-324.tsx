import svgPaths from "./svg-mn27zgw82t";

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

function Frame6() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full">
      <p className="font-['SF_Compact:Bold',sans-serif] font-[790] h-[24.241px] leading-[23.542px] relative shrink-0 text-[#22221d] text-[20px] text-center w-full">Sign Preview</p>
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

function Frame17() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[16px] py-0 relative w-full">
          <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[23.542px] not-italic relative shrink-0 text-[#22221d] text-[14px] text-center text-nowrap">{`Cross-chain send `}</p>
        </div>
      </div>
    </div>
  );
}

function Group12() {
  return (
    <div className="relative shrink-0 size-[32px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Group 1707483996">
          <path d={svgPaths.p17d47b00} fill="var(--fill-0, black)" id="Vector" stroke="var(--stroke-0, white)" strokeWidth="1.33333" />
          <g id="Group 1707483857">
            <path d={svgPaths.p18e7e00} id="Vector 9372" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeWidth="2" />
            <path d={svgPaths.p2170d180} id="Vector 9373" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeWidth="2" />
            <path d={svgPaths.p727e900} id="Vector 9374" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeWidth="2" />
            <path d={svgPaths.p3c2ddc00} id="Vector 9375" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeWidth="2" />
            <path d={svgPaths.p30f0fa00} id="Vector 9376" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeWidth="2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Group12 />
      <div className="flex flex-col font-['SF_Compact:Semibold',sans-serif] font-[656.2] justify-center leading-[0] relative shrink-0 text-[48px] text-black text-nowrap text-right">
        <p className="leading-[23.542px]">{`-10 USDC `}</p>
      </div>
    </div>
  );
}

function List() {
  return (
    <div className="bg-white relative rounded-[20px] shrink-0 w-full" data-name="list">
      <div aria-hidden="true" className="absolute border-0 border-black border-solid inset-0 pointer-events-none rounded-[20px]" />
      <div className="flex flex-col items-end justify-center size-full">
        <div className="content-stretch flex flex-col gap-[10px] items-end justify-center px-[20px] py-[24px] relative w-full">
          <Frame15 />
          <div className="flex flex-col font-['SF_Compact:Medium',sans-serif] font-[556] justify-center leading-[0] relative shrink-0 text-[#8f8f8f] text-[16px] text-right w-full">
            <p className="leading-[23.542px]">$9.99</p>
          </div>
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
    <div className="absolute inset-[-0.04%_0_0.04%_0]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Group">
          <g id="Vector"></g>
          <g id="Group 11178">
            <path d={svgPaths.p1b571080} fill="var(--fill-0, black)" id="Union" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Eth() {
  return (
    <div className="bg-white relative rounded-[66.667px] shrink-0 size-[16px]" data-name="eth">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <Group />
      </div>
      <div aria-hidden="true" className="absolute border-0 border-black border-solid inset-0 pointer-events-none rounded-[66.667px]" />
    </div>
  );
}

function Frame1() {
  return (
    <div className="bg-[#efefef] content-stretch flex gap-[4px] items-center px-[9px] py-[4px] relative rounded-[100px] shrink-0">
      <Eth />
      <div className="flex flex-col font-['SF_Compact:Medium',sans-serif] font-[556] justify-center leading-[0] relative shrink-0 text-[#414040] text-[12px] text-nowrap text-right tracking-[0.0048px]">
        <p className="leading-[1.3]">{`Optimism `}</p>
      </div>
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex h-[24px] items-center justify-between relative shrink-0 w-full">
      <p className="font-['SF_Compact:Black',sans-serif] font-[1000] leading-[23.542px] relative shrink-0 text-[14px] text-black text-center text-nowrap">To</p>
      <Frame1 />
    </div>
  );
}

function Frame5() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow h-[22px] items-center min-h-px min-w-px relative shrink-0">
      <div className="relative shrink-0 size-[22px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 22">
          <circle cx="11" cy="11" fill="var(--fill-0, #D9D9D9)" id="Ellipse 1823" r="11" />
        </svg>
      </div>
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[22px] not-italic relative shrink-0 text-[14px] text-black text-center text-nowrap">Bob.op.eth</p>
    </div>
  );
}

function Share() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="share">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="share">
          <path d={svgPaths.p32607400} id="Line" stroke="var(--stroke-0, #191C1E)" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M8 1.5H10.5V4" id="Line_2" stroke="var(--stroke-0, #191C1E)" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M10.25 1.75L6 5.75" id="Line_3" stroke="var(--stroke-0, #191C1E)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function Frame4() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow items-center min-h-px min-w-px relative shrink-0">
      <Frame5 />
      <Share />
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Frame4 />
    </div>
  );
}

function List1() {
  return (
    <div className="relative shrink-0 w-full" data-name="list">
      <div className="flex flex-col items-end justify-center size-full">
        <div className="content-stretch flex flex-col gap-[10px] items-end justify-center p-[20px] relative w-full">
          <Frame8 />
          <Frame2 />
        </div>
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="bg-white content-stretch flex flex-col items-end relative rounded-[20px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-black border-solid inset-[-1px] pointer-events-none rounded-[21px]" />
      <List />
      <Frame7 />
      <List1 />
    </div>
  );
}

function Input() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="input">
      <Frame3 />
    </div>
  );
}

function Frame16() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
      <Frame17 />
      <Input />
    </div>
  );
}

function Frame11() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[64px] grow items-center min-h-px min-w-px relative shrink-0 w-full">
      <Header />
      <Frame16 />
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex h-full items-center relative shrink-0">
      <p className="font-['SF_Compact:Medium',sans-serif] font-[556] leading-[23.542px] relative shrink-0 text-[#22221d] text-[14px] text-center text-nowrap">{`Sender `}</p>
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex h-full items-center justify-end relative shrink-0">
      <p className="font-['SF_Compact:Bold',sans-serif] font-[790] leading-[22px] relative shrink-0 text-[#22221d] text-[14px] w-[92px]">{`Alice.arb.eth `}</p>
    </div>
  );
}

function List2() {
  return (
    <div className="relative shrink-0 w-full" data-name="list">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[6px] py-[8px] relative w-full">
          <div className="flex flex-row items-center self-stretch">
            <Frame14 />
          </div>
          <div className="flex flex-row items-center self-stretch">
            <Frame13 />
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame20() {
  return (
    <div className="content-stretch flex h-full items-center relative shrink-0">
      <p className="font-['SF_Compact:Medium',sans-serif] font-[556] leading-[23.542px] relative shrink-0 text-[#22221d] text-[14px] text-center text-nowrap">{`Network `}</p>
    </div>
  );
}

function Frame22() {
  return <div className="h-full shrink-0 w-[92px]" />;
}

function Group1() {
  return (
    <div className="absolute inset-[-0.03%_-0.01%_0.03%_0.01%]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Group">
          <g id="Vector"></g>
        </g>
      </svg>
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute inset-[55.78%_33.03%_12.95%_52.04%]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.98494 6.25409">
        <g id="Group">
          <path d={svgPaths.p27188470} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute inset-[37.42%_21.88%_19.28%_58.8%]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.86464 8.66183">
        <g id="Group">
          <path d={svgPaths.p1a1532f0} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group4() {
  return (
    <div className="absolute contents inset-[37.42%_21.88%_12.95%_52.04%]" data-name="Group">
      <Group2 />
      <Group3 />
    </div>
  );
}

function Group5() {
  return (
    <div className="absolute contents inset-[37.42%_21.88%_12.95%_52.04%]" data-name="Group">
      <Group4 />
    </div>
  );
}

function Group6() {
  return (
    <div className="absolute inset-[8.65%_13.3%_8.73%_13.41%]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.6579 16.5233">
        <g id="Group">
          <path d={svgPaths.p18c67a00} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group7() {
  return (
    <div className="absolute inset-[29.9%_38.41%_12.91%_21.98%]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.9217 11.4367">
        <g id="Group">
          <path d={svgPaths.p1c911800} fill="var(--fill-0, white)" id="Vector" />
          <path d={svgPaths.p365f6570} fill="var(--fill-0, white)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Group8() {
  return (
    <div className="absolute contents inset-[8.65%_13.3%_8.73%_13.41%]" data-name="Group">
      <div className="absolute inset-[11.7%_16.06%_11.88%_16.17%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
          <g id="Vector"></g>
        </svg>
      </div>
      <Group5 />
      <Group6 />
      <div className="absolute inset-[73.08%_61.65%_17.43%_29.92%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.68672 1.89838">
          <path d={svgPaths.p3975d100} fill="var(--fill-0, #213147)" id="Vector" />
        </svg>
      </div>
      <Group7 />
    </div>
  );
}

function Group9() {
  return (
    <div className="absolute contents inset-[8.65%_13.3%_8.73%_13.41%]" data-name="Group">
      <Group8 />
    </div>
  );
}

function Component() {
  return (
    <div className="absolute contents inset-[8.65%_8.65%_8.64%_8.67%] mix-blend-luminosity" data-name="_2405588477232">
      <div className="absolute inset-[8.68%_8.65%_8.64%_8.67%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
          <g id="Vector"></g>
        </svg>
      </div>
      <Group9 />
    </div>
  );
}

function LayerX() {
  return (
    <div className="absolute contents inset-[8.65%_8.65%_8.64%_8.67%] mix-blend-luminosity" data-name="Layer_x0020_1">
      <Component />
    </div>
  );
}

function Eth1() {
  return (
    <div className="[grid-area:1_/_1] bg-[#1d1c1d] ml-0 mt-0 overflow-clip relative rounded-[66.667px] size-[20px]" data-name="eth">
      <Group1 />
      <LayerX />
    </div>
  );
}

function Group10() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-[0.74px] place-items-start relative">
      <Eth1 />
    </div>
  );
}

function Group11() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <p className="[grid-area:1_/_1] font-['SF_Compact:Bold',sans-serif] font-[790] leading-[22px] ml-[60.42px] mt-0 relative text-[#22221d] text-[14px] text-center text-nowrap translate-x-[-50%]">{`Arbitrum `}</p>
      <Group10 />
    </div>
  );
}

function List3() {
  return (
    <div className="relative shrink-0 w-full" data-name="list">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[6px] py-[8px] relative w-full">
          <div className="flex flex-row items-center self-stretch">
            <Frame20 />
          </div>
          <div className="flex flex-row items-center self-stretch">
            <Frame22 />
          </div>
          <Group11 />
        </div>
      </div>
    </div>
  );
}

function Frame23() {
  return (
    <div className="content-stretch flex h-full items-center relative shrink-0">
      <p className="font-['SF_Compact:Medium',sans-serif] font-[556] leading-[23.542px] relative shrink-0 text-[#22221d] text-[14px] text-center text-nowrap">Received (incl. fee)</p>
    </div>
  );
}

function Frame24() {
  return (
    <div className="content-stretch flex h-full items-center justify-end relative shrink-0">
      <p className="font-['SF_Compact:Bold',sans-serif] font-[790] leading-[22px] relative shrink-0 text-[#22221d] text-[14px] text-nowrap">9.7656566 USDC</p>
    </div>
  );
}

function List4() {
  return (
    <div className="relative shrink-0 w-full" data-name="list">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[6px] py-[8px] relative w-full">
          <div className="flex flex-row items-center self-stretch">
            <Frame23 />
          </div>
          <div className="flex flex-row items-center self-stretch">
            <Frame24 />
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame25() {
  return (
    <div className="content-stretch flex h-full items-center relative shrink-0">
      <p className="font-['SF_Compact:Medium',sans-serif] font-[556] leading-[23.542px] relative shrink-0 text-[#22221d] text-[14px] text-center text-nowrap">Fee</p>
    </div>
  );
}

function Frame12() {
  return (
    <div className="bg-[#efefef] content-stretch flex h-full items-center justify-center px-[10px] py-[5px] relative rounded-[100px] shrink-0">
      <p className="font-['SF_Compact:Bold',sans-serif] font-[790] leading-[22px] relative shrink-0 text-[#22221d] text-[10px] text-center text-nowrap">Paymaster</p>
    </div>
  );
}

function Frame18() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-[149px]">
      <div className="flex flex-row items-center self-stretch">
        <Frame25 />
      </div>
      <div className="flex flex-row items-center self-stretch">
        <Frame12 />
      </div>
    </div>
  );
}

function Frame19() {
  return (
    <div className="content-stretch flex gap-[2px] items-start justify-end leading-[22px] relative shrink-0 text-[14px] text-nowrap">
      <p className="font-['SF_Compact:Bold',sans-serif] font-[790] relative shrink-0 text-[#22221d]">0.2343434 USDC</p>
      <p className="font-['SF_Compact:Medium',sans-serif] font-[556] relative shrink-0 text-[#8f8f8f] text-center">($0.23)</p>
    </div>
  );
}

function List5() {
  return (
    <div className="relative shrink-0 w-full" data-name="list">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[6px] py-0 relative w-full">
          <Frame18 />
          <Frame19 />
        </div>
      </div>
    </div>
  );
}

function Review() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="review">
      <List2 />
      <List3 />
      <List4 />
      <List5 />
    </div>
  );
}

function Component24Info() {
  return (
    <div className="relative size-[24px]" data-name="24-info">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="24-info">
          <path d={svgPaths.pace200} id="Vector" stroke="var(--stroke-0, #191C1E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M12 8V12" id="Vector_2" stroke="var(--stroke-0, #191C1E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M12 16H12.01" id="Vector_3" stroke="var(--stroke-0, #191C1E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Frame21() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none scale-y-[-100%]">
          <Component24Info />
        </div>
      </div>
      <div className="basis-0 flex flex-col font-['Noto_Sans:Regular',sans-serif] font-normal grow justify-center leading-[0] min-h-px min-w-px relative self-stretch shrink-0 text-[12px] text-black" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
        <p className="leading-[normal]">Sign once, and it sends across all selected chains in ~20 seconds.</p>
      </div>
    </div>
  );
}

function Content() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start justify-center min-h-px min-w-px relative shrink-0" data-name="content">
      <Frame21 />
    </div>
  );
}

function Main() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="main">
      <Content />
    </div>
  );
}

function Info() {
  return (
    <div className="bg-[#efefef] relative rounded-[12px] shrink-0 w-full" data-name="info">
      <div className="content-stretch flex flex-col items-start px-[12px] py-[8px] relative w-full">
        <Main />
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="basis-0 bg-[#212022] grow h-[52px] min-h-px min-w-px relative rounded-[100px] shrink-0">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-[10px] relative size-full">
          <p className="font-['Noto_Sans:Display_Medium',sans-serif] font-medium leading-[22px] relative shrink-0 text-[16px] text-nowrap text-white" style={{ fontVariationSettings: "'CTGR' 100, 'wdth' 100" }}>
            Sign Once to Send
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
      <Info />
      <Button />
    </div>
  );
}

function Frame10() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[21px] grow h-full items-start min-h-px min-w-px relative shrink-0">
      <Controller />
      <Frame11 />
      <Bottom />
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
