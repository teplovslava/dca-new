import BINANCE from "@shared/ui/icons/partner 1.svg";
import BYBIT from "@shared/ui/icons/partner 2.svg";
import UNISWAP from "@shared/ui/icons/partner 3.svg";
import BINGX from "@shared/ui/icons/partner 4.svg";
import PANCAKESWAP from "@shared/ui/icons/partner 5.svg";
import DYDX from "@shared/ui/icons/partner 6.svg";
import APEX from "@shared/ui/icons/partner 7.svg";
import TRADINGVIEW from "@shared/ui/icons/partner 8.svg";
import ARKHAM from "@shared/ui/icons/partner 9.svg";
import BUBBLEMAPS from "@shared/ui/icons/partner 10.svg";
import DEXTOOLS from "@shared/ui/icons/partner 11.svg";
import COINMARKETCAP from "@shared/ui/icons/partner 12.svg";
import SANTIMENT from "@shared/ui/icons/partner 13.svg";
import TRUST from "@shared/ui/icons/partner 14.svg";
import METAMASK from "@shared/ui/icons/partner 15.svg";
import TRONLINK from "@shared/ui/icons/partner 16.svg";

const partnerList = [
  {
    img: BINANCE,
    alt: "BINANCE",
  },
  {
    img: BYBIT,
    alt: "BYBIT",
  },
  {
    img: UNISWAP,
    alt: "UNISWAP",
  },
  {
    img: BINGX,
    alt: "BINGX",
  },
  {
    img: PANCAKESWAP,
    alt: "PANCAKESWAP",
  },
  {
    img: DYDX,
    alt: "DYDX",
  },
  {
    img: APEX,
    alt: "APEX",
  },
  {
    img: TRADINGVIEW,
    alt: "TRADINGVIEW",
  },
  {
    img: ARKHAM,
    alt: "ARKHAM",
  },
  {
    img: BUBBLEMAPS,
    alt: "BUBBLEMAPS",
  },
  {
    img: DEXTOOLS,
    alt: "DEXTOOLS",
  },
  {
    img: COINMARKETCAP,
    alt: "COINMARKETCAP",
  },
  {
    img: SANTIMENT,
    alt: "SANTIMENT",
  },
  {
    img: TRUST,
    alt: "TRUST",
  },
  {
    img: METAMASK,
    alt: "METAMASK",
  },
  {
    img: TRONLINK,
    alt: "TRONLINK",
  },
];

function Partners() {
  return (
    <div className="element-background grid xl:grid-cols-8 grid-cols-4 max-[676px]:grid-cols-2 w-full justify-items-center gap-[10px]">
      {partnerList.map((partner, i) => (
        <img key={i} src={partner.img} alt={partner.alt} />
      ))}
    </div>
  );
}

export default Partners;
