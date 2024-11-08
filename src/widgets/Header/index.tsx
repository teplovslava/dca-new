import { LangaugeSelect } from "@features/LanguageSelect";
import Icon from "@shared/ui/components/Icon";

export default function Header() {
  return (
    <div className="pt-3 flex flex-row w-full justify-between items-center pb-3 mb-3">
      <Icon width={125} height={77} color="white" name="logo" />
      <LangaugeSelect />
    </div>
  );
}
