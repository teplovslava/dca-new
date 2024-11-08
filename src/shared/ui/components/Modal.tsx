import Icon from "@shared/ui/components/Icon";
import { MouseEvent } from "react";

interface IModal {
  visible: boolean;
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
  children: React.ReactNode;
  title?: React.ReactNode;
}

function Modal({ visible, setVisible, children, title = "" }: IModal) {
  const onOverlay = (e: MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    if (e.target === e.currentTarget) setVisible(false);
  };

  const overlayStyle = `fixed left-0 top-0 right-0 bottom-0 flex flex-row items-center justify-center p-[50px] max-[678px]:p-0  bg-black/60 transition-all ${
    visible ? "opacity-100 visible" : "opacity-0 invisible"
  }`;

  const windowStyle = `rounded-[30px] max-[678px]:p-[20px] max-[678px]:rounded-none max-[678px]:w-full max-[678px]:h-full max-[678px]:max-w-full bg-gradient-to-b from-[#191D22] to-[#4D5465] p-[50px] flex flex-col items-center max-w-[480px] w-full transition-all ${
    visible ? "translate-y-0" : "translate-y-[20px]"
  }`;

  return (
    <div onClick={onOverlay} className={overlayStyle}>
      <div className={windowStyle}>
        <div className="w-full grid grid-cols-[2fr_1fr] place-items-center mb-[10px]">
          <p className="text-[26px] text-white font-[600]">{title}</p>
          <button
            onClick={() => setVisible(false)}
            className="place-self-end p-[10px] mt-[-10px] mr-[-10px]"
          >
            <Icon name="cross" color="#FFFFFF80" width={19} />
          </button>
        </div>
        <div className="w-full">{children}</div>
      </div>
    </div>
  );
}

export default Modal;
