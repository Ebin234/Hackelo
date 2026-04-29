import { IoMdInformationCircleOutline, IoIosMan,IoMdAddCircleOutline,IoMdChatboxes,IoIosCloudDone   } from "react-icons/io";
import { ImHammer2 } from "react-icons/im";
import { GoTrophy } from "react-icons/go";
import { TbDeviceImacQuestion } from "react-icons/tb";
import { GiNotebook,GiTrophy } from "react-icons/gi";
import { MdRule } from "react-icons/md";
import { RiTeamFill ,RiDeleteBin6Line } from "react-icons/ri";
import { IoEarthSharp } from "react-icons/io5";
import { PiMedalFill } from "react-icons/pi";
import { BiMedal } from "react-icons/bi";
import Image from "next/image";
import { TfiLayoutMenuV } from "react-icons/tfi";

export default function page() {
  return (
    <section>
      <div className="pl-10 pr-10 pt-5 pb-5 flex flex-col gap-16">
        <div className="flex flex-col gap-4">
          <p className="font-mono text-[12px] leading-4 text-[#3ADFFA] bg-[#192540] pt-1 pb-1 pl-3 pr-3 rounded-2xl w-fit">
            ORGANIZER_STUDIO_V2.4
          </p>
          <h1 className="font-space font-bold text-6xl leading-15 tracking-[-1.5px] text-[#DEE5FF] max-w-196.5">
            Architect Your{" "}
            <span className="bg-linear-to-r from-[#3ADFFA] to-[#CC97FF] text-transparent bg-clip-text">
              {" "}
              Digital Arena.{" "}
            </span>
          </h1>
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
                <p className="font-inter font-medium text-[14px] leading-5 text-[#3ADFFA]">
                  Basic Info
                </p>
              </div>
              <div className="flex flex-row gap-3  p-4 rounded-xl">
                <ImHammer2 className="text-[#A3AAC4] w-5 h-5" />
                <p className="font-inter font-medium text-[14px] leading-5 text-[#A3AAC4]">
                  Rules & Eligibility
                </p>
              </div>
              <div className="flex flex-row gap-3  p-4 rounded-xl">
                <GoTrophy className="text-[#A3AAC4] w-5 h-5" />
                <p className="font-inter font-medium text-[14px] leading-5 text-[#A3AAC4]">
                  Prizes & Sponsors
                </p>
              </div>
              <div className="flex flex-row gap-3  p-4 rounded-xl">
                <TbDeviceImacQuestion className="text-[#A3AAC4] w-5 h-5" />
                <p className="font-inter font-medium text-[14px] leading-5 text-[#A3AAC4]">
                  Application Questions
                </p>
              </div>
            </div>
            <div className="pt-8">
              <div className="bg-[#141F3880] p-6 rounded-2xl flex flex-col gap-2">
                <p className="font-inter text-[12px] leading-4 tracking-[1.2px] uppercase text-[#A3AAC4]">
                  Build Status
                </p>
                <div className="h-1.5 w-52 bg-[#000000] rounded-2xl">
                  <div className="w-13 h-full bg-linear-to-r from-[#3ADFFA] to-[#CC97FF] rounded-l-2xl"></div>
                </div>
                <p className="font-mono text-[12px] leading-4 text-[#3ADFFA]">
                  25% COMPILED
                </p>
              </div>
            </div>
          </div>


          <div className="flex flex-col gap-12 w-full">

            <div className="bg-[#091328] p-12 rounded-4xl flex flex-col gap-10">
              <div className="flex flex-row gap-4 items-center">
                <div className="bg-[#CC97FF1A] p-2 rounded-xl">
                  <GiNotebook className="w-4.5 h4.5 text-[#CC97FF]" />
                </div>

                <h2 className="font-space font-bold text-2xl leading-8 text-[#DEE5FF]">
                  Basic Information
                </h2>
              </div>
              <div className="flex flex-col gap-8">
                <div className="flex flex-col gap-3">
                  <label
                    htmlFor=""
                    className="font-mono text-[12px] leading-4 tracking-[1.2px] text-[#A3AAC4] uppercase"
                  >
                    Hackathon Name
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Global AI Innovate 2024"
                    className="w-full text-[#A3AAC4] bg-[#192540] rounded-xl pt-4.5 pb-4.5 pl-5 pr-5 outline-none font-inter text-[16px] leading-[100%] "
                  />
                </div>
                <div className="flex flex-row gap-10">
                  <div className="flex flex-col gap-3 w-[50%]">
                    <label
                      htmlFor=""
                      className="font-mono text-[12px] leading-4 tracking-[1.2px] text-[#A3AAC4] uppercase"
                    >
                      Start Date
                    </label>
                    <input
                      type="date"
                      placeholder="dd/mm/yyyy"
                      className="bg-[#192540] text-[#A3AAC4] rounded-xl pt-4.5 pb-4.5 pl-5 pr-5 outline-none font-inter text-[16px] leading-[100%] "
                    />
                  </div>
                  <div className="flex flex-col gap-3 w-[50%]">
                    <label
                      htmlFor=""
                      className="font-mono text-[12px] leading-4 tracking-[1.2px] text-[#A3AAC4] uppercase"
                    >
                      Duration (Days)
                    </label>
                    <input
                      type="number"
                      placeholder="48"
                      className="bg-[#192540] text-[#A3AAC4] rounded-xl pt-4.5 pb-4.5 pl-5 pr-5 outline-none font-inter text-[16px] leading-[100%] "
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-3">
                  <label
                    htmlFor=""
                    className="font-mono text-[12px] leading-4 tracking-[1.2px] text-[#A3AAC4] uppercase"
                  >
                    Primary Theme
                  </label>
                  <div className="flex flex-row gap-4">
                    <p className="bg-[#192540] pt-2 pb-2 pl-5 pr-5 font-inter font-medium text-[14px] leading-5 rounded-3xl w-fit text-[#3ADFFA] border border-[#3ADFFA4D]">
                      Artificial Intelligence
                    </p>
                    <p className="bg-[#192540] pt-2 pb-2 pl-5 pr-5 font-inter font-medium text-[14px] leading-5 rounded-3xl w-fit text-[#A3AAC4]">
                      Web3 & Crypto
                    </p>
                    <p className="bg-[#192540] pt-2 pb-2 pl-5 pr-5 font-inter font-medium text-[14px] leading-5 rounded-3xl w-fit text-[#A3AAC4]">
                      Sustainability
                    </p>
                    <p className="bg-[#192540] pt-2 pb-2 pl-5 pr-5 font-inter font-medium text-[14px] leading-5 rounded-3xl w-fit text-[#A3AAC4]">
                      FinTech
                    </p>
                    <p className="bg-[#192540] pt-2 pb-2 pl-5 pr-5 font-inter font-medium text-[14px] leading-5 rounded-3xl w-fit text-[#A3AAC4]">
                      Add Custom +
                    </p>
                  </div>
                </div>
                <div className="flex flex-col gap-3">
                  <label
                    htmlFor=""
                    className="font-mono text-[12px] leading-4 tracking-[1.2px] text-[#A3AAC4] uppercase"
                  >
                    Hackathon Tagline
                  </label>
                  <textarea
                    name=""
                    id=""
                    defaultValue={"Describe your mission in one sentence..."}
                    rows={5}
                    className="w-full bg-[#192540] rounded-xl pt-4.5 pb-4.5 pl-5 pr-5 outline-none font-inter text-[16px] leading-[100%] text-[#A3AAC4] "
                  ></textarea>
                </div>
              </div>
            </div>

            <div className="bg-[#091328] p-12 rounded-4xl flex flex-col gap-10">
              <div className="flex flex-row gap-4 items-center">
                <div className="bg-[#3ADFFA1A] p-2 rounded-xl w-fit">
                  <MdRule className="w-5 h-4 text-[#3ADFFA]" />
                </div>
                <h2 className="font-space font-bold text-2xl leading-8 text-[#DEE5FF]">
                  Rules & Eligibility
                </h2>
              </div>
              <div className="flex flex-col gap-6">
                <div className="flex flex-col gap-2 p-6 rounded-2xl bg-[#0F1930] ">
                  <h3 className="font-inter font-medium text-[16px] leading-6 text-[#DEE5FF]">
                    Participation Model
                  </h3>
                  <p className="font-inter text-[14px] leading-5 text-[#A3AAC4]">
                    How can hackers participate in this event?
                  </p>
                  <div className="flex flex-row gap-3 w-full pt-3">
                    <div className="p-4 flex flex-col w-full justify-center items-center gap-3 rounded-xl border border-[#40485D1A]">
                      <RiTeamFill className="w-5.5 h-4 text-[#3ADFFA]" />
                      <p className="font-mono text-[12px] leading-4 text-[#DEE5FF]">
                        TEAMS ONLY
                      </p>
                    </div>
                    <div className="p-4 flex flex-col ustify-center items-center w-full gap-3 rounded-xl border border-[#3ADFFA66] bg-[#3ADFFA0D] ">
                      <IoEarthSharp className="w-5.5 h-4 text-[#3ADFFA]" />
                      <p className="font-mono text-[12px] leading-4 text-[#DEE5FF]">
                        HYBRID
                      </p>
                    </div>
                    <div className="p-4 flex flex-col ustify-center items-center w-full gap-3 rounded-xl border border-[#40485D1A]">
                      <IoIosMan className="w-5.5 h-4 text-[#3ADFFA]" />
                      <p className="font-mono text-[12px] leading-4 text-[#DEE5FF]">
                        SOLO ONLY
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col  gap-4 bg-[#0F1930] p-6 rounded-2xl">
                  <h3 className="font-inter font-medium text-[16px] leading-6 text-[#DEE5FF]">
                    Submission Guidelines
                  </h3>
                  <div className="flex flex-col gap-4">
                    <div className="flex flex-row justify-between items-center bg-[#192540] p-4 rounded-xl">
                      <p className="font-inter text-[14px] leading-5 text-[#DEE5FF]">Require GitHub Repository Link</p>
                      <button className="w-12 h-6 flex items-center bg-[#CC97FF] rounded-full p-1">
                        <div className="w-4 h-4 bg-[#360061] rounded-full ml-auto"></div>
                      </button>
                    </div>
                    <div className="flex flex-row justify-between items-center bg-[#192540] p-4 rounded-xl">
                      <p className="font-inter text-[14px] leading-5 text-[#DEE5FF]">Require Video Demo (max 2 min)</p>
                      <button className="w-12 h-6 flex items-center bg-[#202c49] rounded-full p-1">
                        <div className="w-4 h-4 bg-[#6D758C] rounded-full"></div>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#091328] p-12 rounded-4xl flex flex-col gap-10">
              <div className="flex flex-row gap-4 items-center">
                <div className="bg-[#FF86C31A] p-2 rounded-xl">
                  <PiMedalFill className="w-4.5 h4.5 text-[#FF86C3]"  />
                </div>
                <h2 className="font-space font-bold text-2xl leading-8 text-[#DEE5FF]">Prizes & Sponsors</h2>
              </div>
              <div className="flex flex-row gap-6 pt-3">
                <div className="w-full flex flex-col items-center justify-center p-6 gap-2 rounded-2xl bg-[#0F1930]">
                  <div className="bg-[#FF86C333] rounded-3xl p-2 w-fit">
                    <GiTrophy className="w-[13.5px] h-[13.5px] text-[#FF86C3]" />
                  </div>
                  <p className="font-inter font-medium text-[14px] leading-5 text-[#DEE5FF]">First Place</p>
                  <p className="font-inter font-bold text-2xl leading-8 text-[#DEE5FF]">$10,000</p>
                  <p className="font-mono text-[12px] leading-4 text-[#3ADFFA] ">EDIT DETAILS</p>
                </div>
                <div className="w-full flex flex-col items-center justify-center p-6 gap-2 rounded-2xl bg-[#0F1930]">
                  <div className="bg-[#40485D33] rounded-3xl p-2 w-fit">
                    <BiMedal className="w-[13.5px] h-[13.5px] text-[#A3AAC4]" />
                  </div>
                  <p className="font-inter font-medium text-[14px] leading-5 text-[#DEE5FF]">Second Place</p>
                  <p className="font-inter font-bold text-2xl leading-8 text-[#DEE5FF]">$5,000</p>
                  <p className="font-mono text-[12px] leading-4 text-[#3ADFFA] ">EDIT DETAILS</p>
                </div>
                <div className=" w-full flex flex-col items-center justify-center p-6 gap-2 rounded-2xl  border-2 border-[#40485D33] border-dashed">
                  <IoMdAddCircleOutline className="w-5 h-5 text-[#CC97FF]"/>
                  <p className="font-mono text-[12px] leading-4 tracking-[-0.6px] uppercase text-[#A3AAC4]">Add Prize Category</p>
                </div>
              </div>
              <div className="flex flex-col gap-4"> 
                <p className="font-mono text-[12px] leading-4 tracking-[1.2px] uppercase text-[#A3AAC4]">Sponsors Tier Configuration</p>
                <div className=" bg-[#1925404D] flex flex-col items-center justify-center gap-4 rounded-3xl p-8">
                  <div className="flex flex-row">
                    <Image src={"/images/sponsor-1.png"} alt="" width={48} height={48} />
                    <Image src={"/images/sponsor-2.png"} alt="" width={48} height={48} className="-ml-3" />
                    <Image src={"/images/sponsor-add.png"} alt="" width={48} height={48}  className="-ml-3"/>
                  </div>
                  <p className="font-inter text-[14px] leading-5 text-[#A3AAC4]">Upload sponsor logos </p>
                  <div className=" bg-[#192540] pb-2 pt-2 pl-6 pr-6 rounded-2xl flex justify-center w-57.5 items-center">
                  <input type="file" className="font-inter font-medium text-[14px]  leading-5 text-[#DEE5FF] text-center w-full" />
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-[#091328] p-12 rounded-4xl flex flex-col gap-10">
              <div className="flex flex-row gap-4 items-center">
                <div className="bg-[#3ADFFA1A] p-2 rounded-xl">
                  <IoMdChatboxes  className="w-4.5 h4.5 text-[#3ADFFA]"  />
                </div>
                <h2 className="font-space font-bold text-2xl leading-8 text-[#DEE5FF]">Application Questions</h2>
              </div>

              <div className="flex flex-col gap-4">
                <div className="flex flex-row items-center justify-between bg-[#0F1930] p-6 rounded-2xl">
                  <div className="flex flex-row items-center gap-4">
                    <TfiLayoutMenuV className="w-4 h-4 text-[#6D758C]" />
                    <div className="flex flex-col gap-1">
                        <p className="font-inter text-[14px] leading-5 text-[#DEE5FF">Why do you want to join this hackathon?</p>
                      <p className="font-mono text-[12px] leading-4 uppercase text-[#A3AAC4]">LONG_TEXT_FIELD • REQUIRED</p>
                    </div>
                  </div>
                    <RiDeleteBin6Line className="w-4 h-4.5 text-[#A3AAC44D]"/>
                </div>
                <div className="flex flex-row items-center justify-between bg-[#0F1930] p-6 rounded-2xl">
                  <div className="flex flex-row items-center gap-4">
                    <TfiLayoutMenuV className="w-4 h-4 text-[#6D758C]" />
                    <div className="flex flex-col gap-1">
                        <p className="font-inter text-[14px] leading-5 text-[#DEE5FF">Link to your portfolio or LinkedIn</p>
                      <p className="font-mono text-[12px] leading-4 uppercase text-[#A3AAC4]">URL_FIELD • OPTIONAL</p>
                    </div>
                  </div>
                    <RiDeleteBin6Line className="w-4 h-4.5 text-[#A3AAC44D]"/>
                </div>
                <div className="p-4 border border-dashed border-[#CC97FF4D] rounded-xl flex justify-center ">
                  <button className="text-[#CC97FF] font-inter font-medium text-[14px] leading-5">+ ADD CUSTOM QUESTION</button>
                </div>
              </div>
            </div>
          </div> 
        </div>

        <div className="bg-[#0F1930CC] p-6 w-full rounded-3xl">
            <div className="flex flex-row items-center justify-between">
              <div className="flex flex-row gap-1">
                <IoIosCloudDone   className="w-5.5 h-4 text-[#3ADFFA]"/>
                <p className="font-mono text-[12px] leading-4 text-[#A3AAC4]">AUTO-SAVED AT 14:02 PM</p>
              </div>
              <div className="flex flex-row gap-4">
                <button className="border border-[#40485D33] pt-3 pb-3 pr-8 pl-8 rounded-xl font-inter font-medium text-[14px] leading-5 text-[#DEE5FF]">Save Draft</button>
                <button className="pt-3 pb-3 pl-10 pr-10 rounded-xl bg-linear-to-r from-[#9C48EA] to-[#CC97FF] font-inter font-bold text-[14px] leading-5 text-[#360061]">Publish Hackathon</button>
              </div>
            </div>
          </div>
      </div>
    </section>
  );
}
