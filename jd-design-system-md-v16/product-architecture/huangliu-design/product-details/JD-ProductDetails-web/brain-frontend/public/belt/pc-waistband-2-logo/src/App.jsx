const ASSETS = {
  atmosphere: './public/assets/atmosphere.png',
  logo618: './public/assets/logo-618.svg',
  x: './public/assets/x.svg',
  billion: './public/assets/billion-subsidy.svg',
};

function PcWaistband() {
  const logos = [
    { id: '618', src: ASSETS.logo618, className: 'w-[31.09px] h-[18px]' },
    { id: 'billion', src: ASSETS.billion, className: 'w-[92px] h-[18px]' },
  ].slice(0, 2);

  return (
    <main className="min-h-screen bg-[#f5f5f5] flex items-center justify-center p-6 font-[PingFang_SC,Microsoft_YaHei,Arial,sans-serif]">
      <section
        aria-label="PC waist band"
        className="relative w-[442px] h-[52px] overflow-hidden bg-[#ff6c02] text-white shadow-[0_8px_24px_rgba(255,108,2,0.22)]"
      >
        <div className="absolute left-[24px] top-[17px] w-[137.24px] h-[18px] flex items-center justify-start gap-[2px] leading-none whitespace-nowrap">
          <img src={logos[0].src} alt="618" className={logos[0].className + ' block object-contain shrink-0'} draggable="false" />
          <img src={ASSETS.x} alt="" aria-hidden="true" className="block w-[10.15px] h-[10.65px] object-contain shrink-0" draggable="false" />
          <img src={logos[1].src} alt="百亿补贴" className={logos[1].className + ' block object-contain shrink-0'} draggable="false" />
        </div>

        <div className="absolute left-[275px] top-0 w-[38px] h-[52px] overflow-hidden pointer-events-none">
          <img
            src={ASSETS.atmosphere}
            alt=""
            aria-hidden="true"
            className="absolute left-1/2 top-[-2.23px] h-[54.45px] w-[38px] -translate-x-1/2 object-cover"
            draggable="false"
          />
        </div>

        <div className="absolute left-[313px] top-0 w-[129px] h-[52px] flex items-center justify-start">
          <span className="block w-[105px] h-[14px] text-[14px] font-semibold leading-[14px] tracking-[0] text-white whitespace-nowrap">
            买贵双倍赔·包邮
          </span>
        </div>
      </section>
    </main>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<PcWaistband />);
