import { IoMdInformationCircleOutline } from "react-icons/io";
import { ImHammer2 } from "react-icons/im";
import { GoTrophy } from "react-icons/go";
import { TbDeviceImacQuestion } from "react-icons/tb";

export default function page() {
  return (
    <section>
      <div className="pl-10 pr-10 pt-5 pb-5 flex flex-col gap-16">
        <div className="flex flex-col gap-4">
          <p className="font-mono text-[12px] leading-4 text-[#3ADFFA] bg-[#192540] pt-1 pb-1 pl-3 pr-3 rounded-2xl w-fit">ORGANIZER_STUDIO_V2.4</p>
          <h1 className="font-space font-bold text-6xl leading-15 tracking-[-1.5px] text-[#DEE5FF] max-w-196.5">Architect Your <span className="bg-linear-to-r from-[#3ADFFA] to-[#CC97FF] text-transparent bg-clip-text"> Digital Arena. </span></h1>
          <p className="font-inter font-light text-[18px] leading-7 text-[#A3AAC4]">
            Configure your hackathon parameters, rules, and ecosystem. From
            vision to execution, build the future here.
          </p>
        </div>
        <div className="flex flex-row gap-12">
            <div className="w-[256px]">
                <div className="flex flex-col gap-2">
                    <div className="flex flex-row gap-3 bg-[#0F1930] border-l-2 border-l-[#3ADFFA] p-4 rounded-xl">
                        <IoMdInformationCircleOutline className="text-[#3ADFFA] w-5 h-5" />
                        <p className="font-inter font-medium text-[14px] leading-5 text-[#3ADFFA]">Basic Info</p>
                    </div>
                    <div className="flex flex-row gap-3  p-4 rounded-xl">
                        <ImHammer2 className="text-[#A3AAC4] w-5 h-5" />
                        <p className="font-inter font-medium text-[14px] leading-5 text-[#A3AAC4]">Rules & Eligibility</p>
                    </div>
                    <div className="flex flex-row gap-3  p-4 rounded-xl">
                        <GoTrophy className="text-[#A3AAC4] w-5 h-5" />
                        <p className="font-inter font-medium text-[14px] leading-5 text-[#A3AAC4]">Prizes & Sponsors</p>
                    </div>
                    <div className="flex flex-row gap-3  p-4 rounded-xl">
                        <TbDeviceImacQuestion className="text-[#A3AAC4] w-5 h-5" />
                        <p className="font-inter font-medium text-[14px] leading-5 text-[#A3AAC4]">Application Questions</p>
                    </div>
                </div>
                <div className="pt-8">
                <div className="bg-[#141F3880] p-6 rounded-2xl flex flex-col gap-2">
                    <p className="font-inter text-[12px] leading-4 tracking-[1.2px] uppercase text-[#A3AAC4]">Build Status</p>
                    <div className="h-1.5 w-52 bg-[#000000] rounded-2xl">
                        <div className="w-13 h-full bg-linear-to-r from-[#3ADFFA] to-[#CC97FF] rounded-l-2xl"></div>
                    </div>
                    <p className="font-mono text-[12px] leading-4 text-[#3ADFFA]">25% COMPILED</p>
                </div>
                </div>
            </div>
            <div></div>
        </div>
      </div>
    </section>
  );
}
