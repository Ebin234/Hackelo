import Image from "next/image";
import { posterData } from "@/utils/constants";
import Link from "next/link";

export default function Featured() {
  return (
    <section>
      <div className="flex flex-col pl-16 pr-15 mt-18 mb-18">
        <h2 className="font-space font-bold text-2xl leading-8 text-[#DEE5FF] mb-7">
          Featured Hackathons
        </h2>
        <div className="flex">
          <div className="grid grid-cols-4 gap-6 ">
            {posterData.map((poster, i) => {
              return (
                <div
                  key={i}
                  className="h-115 w-85 bg-[#0F1930] rounded-xl"
                >
                  <div className="h-48">
                    <Image
                      src={poster.image}
                      alt="Hackathon poster"
                      width={340}
                      height={192}
                      className="rounded-t-xl h-48 object-cover"
                    />
                  </div>
                  <div className="p-5 flex flex-col justify-between h-68">
                    <div className="flex flex-row justify-between items-center">
                      <h4 className="font-space font-bold text-[20px] leading-7 text-[#DEE5FF] ">
                        {poster.name}
                      </h4>
                      <p className="font-mono text-[#3ADFFA] text-[14px] leading-5 pl-2">
                        ${poster.price}
                      </p>
                    </div>
                    <p className="text-[#A3AAC4] text-[14px] leading-5">
                      {poster.description}
                    </p>
                    <div>
                      <ul className="flex flex-row gap-2 items-center">
                        {poster.theme.map((data, index) => {
                          return (
                            <li
                              key={index}
                              className="p-2 rounded-md bg-[#192540] text-[#DEE5FF] text-[10px] leading-3.5"
                            >
                              {data}
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                    <div className="flex flex-row justify-between">
                    {/* <Link href={'/Hackathons'} className="pl-3 pr-3 pt-3 pb-3 bg-[#141F38] rounded-xl bg-linear-to-r from-[#142850] to-[#04ccb1]">More Details</Link>
                    <Link href={'/Hackathons'} className="pl-3 pr-3 pt-3 pb-3 bg-[#141F38] rounded-xl bg-linear-to-r from-[#9C48EA] to-[#CC97FF]">Apply Now</Link> */}
                    <Link href={"/Hackathons"} className="p-2 bg-[#141F38] w-full flex flex-row justify-between items-center rounded-lg">
                      <p className="font-space font-bold text-[12px] leading-4 tracking-[1.2px] text-[#DEE5FF]">INQUIRE DETAILS</p>
                      <Image
                        src={"/images/right-arrow.png"}
                        alt="right arrow"
                        width={9.33}
                        height={9.33}
                      />
                    </Link>
                  </div>
                    <div className="flex flex-row items-center justify-between">
                      <div className="flex flex-row items-center gap-1">
                        <Image
                          src={"/images/calendar-icon.png"}
                          alt="calendar icon"
                          width={10.5}
                          height={11.67}
                        />
                        <p className="text-[12px] leading-4 text-[#A3AAC4]">
                          {poster.date}
                        </p>
                      </div>
                      <div className="flex flex-row items-center gap-1">
                        <Image
                          src={"/images/people-icon.png"}
                          alt="people icon"
                          width={12.83}
                          height={9.33}
                        />
                        <p className="text-[12px] leading-4 text-[#A3AAC4]">
                          {poster.participants} Participants
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="flex flex-row gap-3 justify-center mt-10 mb-18">
        <button className="p-3 bg-[#0F1930] rounded-lg">
          <Image
            src={"/images/left-arrow-icon.png"}
            alt="left arrow icon"
            width={7.4}
            height={12}
          />
        </button>
        <div className="flex flex-row gap-2">
          <button className="pl-4 pr-4 pt-2 pb-2 rounded-lg text-center font-bold text-[16px] font-inter leading-6 bg-[#CC97FF] text-[#360061]">
            1
          </button>
          <button className="pl-4 pr-4 pt-2 pb-2 bg-[#0F1930] text-[#A3AAC4] font-bold text-[16px] font-inter leading-6 rounded-lg text-center">
            2
          </button>
          <button className="pl-4 pr-4 pt-2 pb-2 bg-[#0F1930] text-[#A3AAC4] font-bold text-[16px] font-inter leading-6 rounded-lg text-center">
            3
          </button>
          <div className="flex items-center   ">
            <p className="text-[#A3AAC4]">...</p>
          </div>
          <button className="pl-3 pr-3 pt-2 pb-2 bg-[#0F1930] text-[#A3AAC4] font-bold text-[16px] font-inter leading-6 rounded-lg">
            12
          </button>
        </div>
        <button className="p-3 bg-[#0F1930] rounded-lg">
          <Image
            src={"/images/right-arrow-icon.png"}
            alt="left arrow icon"
            width={7.4}
            height={12}
          />
        </button>
      </div>
    </section>
  );
}
