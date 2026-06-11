const A = {
  logo: './public/assets/brand-logo.svg',
  atmosphere: './public/assets/atmosphere.png',
  discount: './public/assets/discount-icon.svg',
  arrowWhite: './public/assets/arrow-white.svg',
  arrowWhiteSmall: './public/assets/arrow-white-small.svg',
  arrowOrange: './public/assets/arrow-orange.svg',
  colon: './public/assets/colon.svg',
  logo618: './public/assets/logo-618.svg',
  x: './public/assets/x.svg',
  billion: './public/assets/billion-subsidy.svg',
};

const columns = [
  { key: 'countdown', title: '倒计时', x: 46 },
  { key: 'slogan', title: 'slogan', x: 644 },
  { key: 'button', title: '按钮', x: 1202 },
];

function PriceBlock({ twoLine = false }) {
  return (
    <div className={twoLine ? 'w-[204px] h-[64px] flex flex-col justify-center pt-[10px] pb-[8px]' : 'w-[128px] flex flex-col gap-[5px] pt-[10px] pb-[8px]'}>
      <div className="flex items-center gap-[4px] w-full">
        <div className="flex items-baseline gap-[2px] h-[20px] leading-[20px] text-white font-bold whitespace-nowrap">
          <span className="text-[12px]">¥</span>
          <span className="flex items-baseline"><span className="text-[20px]">8926</span><span className="text-[12px]">.12</span></span>
        </div>
        <div className="w-[44px] h-[20px] rounded-[5px] bg-white/25 flex items-center justify-center px-[10px]">
          <span className="text-[12px] leading-[12px] font-medium text-white whitespace-nowrap">到手价</span>
        </div>
        {twoLine && <span className="text-[13px] leading-[13px] font-medium text-white/70 line-through whitespace-nowrap">¥9999</span>}
      </div>
      {twoLine ? (
        <div className="mt-[7px] flex items-center gap-[6px] text-white">
          <DiscountItem withArrow />
          <Divider />
          <span className="text-[13px] leading-[13px] font-medium whitespace-nowrap">已售3000+</span>
        </div>
      ) : (
        <div className="flex items-center gap-[6px]">
          <span className="text-[13px] leading-[13px] font-medium text-white/70 line-through whitespace-nowrap">¥9999</span>
          <div className="w-px h-[10px] bg-white/70 scale-x-50" />
          <span className="text-[13px] leading-[13px] font-medium text-white/70 whitespace-nowrap">已售3000+</span>
        </div>
      )}
    </div>
  );
}

function Divider() {
  return <div className="w-px h-[10px] bg-white scale-x-50 shrink-0" />;
}

function Atmosphere({ pc = false }) {
  return (
    <div className={pc ? 'absolute left-[275px] top-0 w-[38px] h-[52px] overflow-hidden' : 'absolute left-[237px] top-0 w-[38px] h-[54px] overflow-hidden'}>
      <img src={A.atmosphere} alt="" className={pc ? 'absolute left-0 top-[-2.23px] w-full h-[54.45px] object-cover' : 'absolute inset-0 w-full h-full object-cover'} draggable="false" />
    </div>
  );
}

function BrandArea({ variant }) {
  return (
    <div className="w-[91px] flex flex-col items-center gap-[6px] shrink-0">
      <img src={A.logo} alt="百亿补贴" className="w-[91px] h-[14px] object-fill block" draggable="false" />
      {variant === 'countdown' && <Countdown />}
      {variant === 'slogan' && <p className="w-full text-center text-[10px] leading-[9px] text-white">买贵双倍赔·包邮</p>}
      {variant === 'button' && <CouponButton />}
    </div>
  );
}

function Countdown({ pc = false }) {
  const box = pc ? 'size-[18px]' : 'w-[16px] h-[15px]';
  const text = pc ? 'text-[12px] leading-[12px] w-[18px] top-[3px]' : 'text-[10px] leading-[13px] w-[16px] top-px';
  return (
    <div className="flex items-center gap-[4px] text-white">
      <span className="text-[13px] leading-[13px] font-bold whitespace-nowrap">还剩</span>
      <div className="flex items-center gap-[2px]">
        {['14', '05', '14'].map((v, i) => (
          <React.Fragment key={i}>
            {i > 0 && <img src={A.colon} alt="" className="w-[2px] h-[6px]" draggable="false" />}
            <span className={box + ' relative rounded-[2px] bg-white overflow-hidden shrink-0'}>
              <span className={'absolute left-1/2 -translate-x-1/2 text-center font-normal text-[#ff6c02] ' + text}>{v}</span>
            </span>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

function CouponButton() {
  return (
    <div className="rounded-[2px] bg-white px-[4px] py-[2px] overflow-hidden">
      <div className="flex items-center gap-px">
        <span className="text-[13px] leading-[13px] font-bold text-[#ff6c02] whitespace-nowrap">领¥80补贴</span>
        <img src={A.arrowOrange} alt="" className="size-[6px]" draggable="false" />
      </div>
    </div>
  );
}

function DiscountItem({ withArrow = false, bold = false }) {
  return (
    <div className="flex items-center gap-[2px] shrink-0">
      <img src={A.discount} alt="" className="size-[12px]" draggable="false" />
      <span className={(bold ? 'font-bold' : 'font-medium') + ' text-[13px] leading-[13px] text-white whitespace-nowrap'}>官方直降12元</span>
      {withArrow && <img src={A.arrowWhiteSmall} alt="" className="size-[8px]" draggable="false" />}
    </div>
  );
}

function BenefitRow() {
  return (
    <div className="w-full h-[20px] flex items-center justify-between px-[16px] pb-[10px]">
      <div className="flex items-center gap-[6px] text-white">
        <span className="text-[13px] leading-[13px] font-bold whitespace-nowrap">已享受:</span>
        <DiscountItem bold />
        <Divider />
        <span className="font-bold text-[13px] leading-[13px] whitespace-nowrap">限时立减15元 29:20</span>
      </div>
      <img src={A.arrowWhite} alt="" className="size-[8px]" draggable="false" />
    </div>
  );
}

function ThreeLineBelt({ variant }) {
  return (
    <div className="relative w-[375px] h-[82px] bg-[#ff6c02] overflow-hidden flex flex-col">
      <div className="relative w-full h-[62px] flex items-center justify-between pl-[16px] pr-[8px]">
        <PriceBlock />
        <BrandArea variant={variant} />
        <Atmosphere />
      </div>
      <BenefitRow />
    </div>
  );
}

function TwoLineBelt({ variant }) {
  return (
    <div className="relative w-[375px] h-[64px] bg-[#ff6c02] overflow-hidden">
      <div className="absolute left-0 top-0 w-full h-full flex items-center justify-between pl-[16px] pr-[8px]">
        <PriceBlock twoLine />
        <BrandArea variant={variant} />
        <Atmosphere />
      </div>
    </div>
  );
}

function PcBrandCombo({ single = false }) {
  if (single) {
    return <img src={A.billion} alt="百亿补贴" className="absolute left-[24px] top-[17px] w-[91.2px] h-[18px] block" draggable="false" />;
  }
  return (
    <div className="absolute left-[24px] top-[17px] h-[18px] flex items-center gap-[2px] whitespace-nowrap">
      <img src={A.logo618} alt="618" className="w-[31.09px] h-[18px] block" draggable="false" />
      <img src={A.x} alt="" className="w-[10.15px] h-[10.65px] block" draggable="false" />
      <img src={A.billion} alt="百亿补贴" className="w-[91.2px] h-[18px] block" draggable="false" />
    </div>
  );
}

function PcBenefit({ variant }) {
  if (variant === 'countdown') {
    return (
      <div className="absolute left-[313px] top-0 w-[129px] h-[52px] flex items-center overflow-hidden py-[19px]">
        <div className="flex flex-col items-center justify-center gap-[4px]">
          <span className="w-[105px] h-[14px] flex items-center text-[14px] leading-[9px] text-white whitespace-nowrap">买贵双倍赔·包邮</span>
          <Countdown pc />
        </div>
      </div>
    );
  }
  return (
    <div className="absolute left-[313px] top-0 w-[129px] h-[52px] flex items-center overflow-hidden py-[19px]">
      <span className="w-[105px] h-[14px] flex items-center text-[14px] leading-[9px] text-white whitespace-nowrap">买贵双倍赔·包邮</span>
    </div>
  );
}

function PcBelt({ variant }) {
  return (
    <div className="relative w-[442px] h-[52px] bg-[#ff6c02] overflow-hidden">
      <PcBenefit variant={variant} />
      <Atmosphere pc />
      <div className="absolute left-0 top-0 w-[161px] h-[52px] overflow-hidden">
        <PcBrandCombo single={variant === 'countdown'} />
      </div>
    </div>
  );
}

function App() {
  return (
    <main className="relative w-[1689px] h-[506px] bg-black text-white font-[PingFang_SC,Microsoft_YaHei,Arial,sans-serif] overflow-hidden">
      {columns.map((col) => (
        <section key={col.key} className="absolute" style={{ left: col.x, top: 0 }}>
          <h2 className="absolute top-[54px] h-[24px] w-[120px] flex items-center text-[24px] leading-[24px] font-normal whitespace-nowrap">{col.title}</h2>
          <div className="absolute top-[116px]"><ThreeLineBelt variant={col.key} /></div>
          <div className="absolute top-[255px]"><TwoLineBelt variant={col.key} /></div>
          <div className="absolute top-[381px]"><PcBelt variant={col.key} /></div>
        </section>
      ))}
    </main>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
