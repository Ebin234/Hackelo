import Image from "next/image";

export default function Banner() {
  return (
    <section>
      <div className=" flex flex-col gap-12 pl-15 pr-15">
        <div className="flex flex-row justify-between ">
          <div className="flex flex-col gap-4 ">
            <h4 className="font-mono text-[14px] leading-5 text-[#3ADFFA]">
              DISCOVER_EVENTS
            </h4>
            <h1 className="font-bold text-7xl leading-18 font-space text-[#DEE5FF]">
              Build the{" "}
              <span className="bg-linear-to-r from-[#3ADFFA] to-[#CC97FF] bg-clip-text text-transparent">
                Future
              </span>{" "}
              <br /> Code by Code.
            </h1>
            <p className="text-[18px] leading-7 text-[#A3AAC4] font-inter">
              Join elite global hackathons, collaborate with world-class
              builders, <br /> and ship products that define the next decade of
              technology.
            </p>
          </div>
          <div className="flex flex-row items-end gap-4">
            <div className="p-6 bg-[#0F1930] rounded-xl flex flex-col gap-4">
              <p className="text-[12px] font-bold leading-4 text-[#3ADFFA] font-inter">ACTIVE NOW</p>
              <h3 className="text-[30px] font-bold leading-9 text-[#DEE5FF] font-space">124</h3>
            </div>
            <div className="p-6 bg-[#0F1930] rounded-xl flex flex-col gap-4">
              <p className="text-[12px] font-bold leading-4 text-[#CC97FF] font-inter">PRIZE POOL</p>
              <h3 className="text-[30px] font-bold leading-9 text-[#DEE5FF] font-space">$2.4M</h3>
            </div>
          </div>
        </div>
        <div>
          <form action="" className="w-full h-20.5 flex flex-row flex-wrap bg-[#091328] gap-2 rounded-xl pl-2 pr-2">
            <div className="w-113 flex flex-row items-center bg-[#0F1930] mt-2 mb-2 pl-4 pr-4 rounded-xl ">
              <Image src={"/images/search-icon-blue.png"} alt="search icon" width={18} height={18} />
              <input type="text" placeholder="Search by name, technology, or host..." className=" w-full font-inter pl-4 h-10 text-[16px] text-[#A3AAC4] outline-none " />
            </div>
            <div className=" flex flex-1 items-center min-w-35 bg-[#0F1930] mt-2 mb-2 pl-4 pr-4 rounded-xl">
              <Image src={"/images/theme-icon.png"} alt="theme icon" width={12} height={12} />
              <select name="theme" id="theme"  className="outline-none w-full h-16 focus:outline-none text-[#DEE5FF]  text-[14px] leading-5 bg-[#0F1930] ">
                <option value="Theme">Theme</option>
                <option value="AI">AI</option>
                <option value="DEFI">DEFI</option>
                <option value="CLOUD">CLOUD</option>
              </select>
            </div>
            <div className="flex flex-1 items-center min-w-35 bg-[#0F1930] mt-2 mb-2 pl-4 pr-4 rounded-xl">
              <Image src={"/images/region-icon.png"} alt="theme icon" width={12} height={12} />
              <select name="region" id="region"  className="outline-none w-full h-16 focus:outline-none text-[#DEE5FF]  text-[14px] leading-5 bg-[#0F1930] ">
                <option value="Theme">Region</option>
                <option value="AI">AI</option>
                <option value="DEFI">DEFI</option>
                <option value="CLOUD">CLOUD</option>
              </select>
            </div>
            <div className=" flex flex-1  items-center min-w-35 bg-[#0F1930] mt-2 mb-2 pl-4 pr-4 rounded-xl">
              <Image src={"/images/duration-icon.png"} alt="theme icon" width={12} height={12} />
              <select name="duration" id="duration"  className="outline-none w-full h-16 focus:outline-none text-[#DEE5FF]  text-[14px] leading-5 bg-[#0F1930] ">
                <option value="Theme">Duration</option>
                <option value="AI">AI</option>
                <option value="DEFI">DEFI</option>
                <option value="CLOUD">CLOUD</option>
              </select>
            </div>
            <button className="p-5 rounded-xl bg-[#1F2B49] mt-2 mb-2">Apply</button>
          </form>
        </div>
      </div>
    </section>
  );
}
