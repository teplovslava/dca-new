import { Statistics } from "@features/StatisticsInfo";
import Dashboard from "@widgets/Dashboard";
import { WalletInfo } from "@features/Wallet";
import { GlobalStatistic } from "@features/GlobalStatistic";
import Partners from "@widgets/Partners";

function StackingPage() {
  return (
    <>
      <div className="flex flex-col gap-[20px]">
        <div className="grid max-[1440px]:grid-cols-[1fr]  grid-cols-[3fr_1fr] gap-[20px] ">
          <Dashboard />
          <div className="flex flex-col gap-[20px]">
            <WalletInfo />
            <GlobalStatistic />
          </div>
        </div>
        <Partners />
      </div>
    </>
  );
}

export default StackingPage;
