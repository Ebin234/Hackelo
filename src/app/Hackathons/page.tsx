export default function page() {
  return (
    <section>
      <div className="p-5">
        <div className="flex flex-row justify-between">
          <div className="flex flex-col gap-3 border-l-4 border-[#22D3EE] pl-5">
            <h3 className="w-fit font-inter text-[12px] leading-4 font-medium text-[#3ADFFA] tracking-[1.2px] p-1 bg-[#192540] rounded-2xl">
              ACTIVE STREAM INITIALIZED
            </h3>
            <h1 className="font-space font-semibold text-[40px] leading-10 text-[#DBFCFF]">
              EXPLORATION{" "}
              <span className="bg-linear-to-r from-[#9C48EA] to-[#CC97FF] bg-clip-text text-transparent ">
                TERMINAL
              </span>
            </h1>
            <p className="font-inter text-[18px] leading-7 text-[#B9CACB]">
              Interface for multi-dimensional project deployments. Filtering
              elite technical <br />
              competitions across global node clusters.
            </p>
          </div>
          <div className="flex flex-row  pr-5 items-end gap-4 ">
            <div className="flex flex-col gap-1 bg-[#091328] justify-center items-center h-26 p-4 rounded-xl border-l-2 border-[#9C48EA]">
              <p className="font-inter text-[12px] leading-4 tracking-[1.2px] text-[#A3AAC4]">ACTIVE EVENTS</p>
              <p className="font-space font-bold text-3xl leading-9 text-[#DEE5FF]">142</p>
            </div>
            <div className="flex flex-col gap-1 bg-[#091328] justify-center h-26 p-4 rounded-xl border-l-2 border-[#3ADFFA]">
              <p className="font-inter text-[12px] leading-4 tracking-[1.2px] text-[#A3AAC4]">TOTAL BOUNTY</p>
              <p className="font-space font-bold text-3xl leading-9 text-[#DEE5FF]">$2.4M</p>
            </div>
          </div>
        </div>
        <div className="h-20 p-2 flex flex-row gap-4 bg-[#0F1930] mt-5 pl-3 pr-3">
            <input type="text" placeholder="QUERY: SEARCH_HACKATHONS_DATABASE..." name="" id="" className=" w-full outline-none rounded-lg h-16 bg-[#000000] font-inter text-[16px] leading-[100%] text-[#6D758C] p-2"/>
            <select name="" id="" className="bg-[#192540] rounded-lg p-2 font-inter text-[#A3AAC4] text-[12px] leading-4 outline-none pl-3 pr-3">
                <option value="">TECH_STACK: ALL</option>
                <option value="">MERN</option>
                <option value="">MERN</option>
                <option value="">MERN</option>
            </select>
            <select name="" id="" className="bg-[#192540] rounded-lg p-2 font-inter text-[#A3AAC4] text-[12px] leading-4 outline-none pl-3 pr-3">
                <option value="">PRIZE_POOL: ANY</option>
                <option value="">PRIZE_POOL: ANY</option>
                <option value="">PRIZE_POOL: ANY</option>
                <option value="">PRIZE_POOL: ANY</option>
            </select>
            <select name="" id="" className="bg-[#192540] rounded-lg p-2 font-inter text-[#A3AAC4] text-[12px] leading-4 outline-none pl-3 pr-3">
                <option value="">LOCATION: ANY</option>
                <option value="">LOCATION: ANY</option>
                <option value="">LOCATION: ANY</option>
                <option value="">LOCATION: ANY</option>
                <option value="">LOCATION: ANY</option>
            </select>
            <button className="bg-[#9C48EA] p-2 font-space font-bold text-[12px] leading-4 tracking-[1.2px] text-[#360061] pl-3 pr-3 min-w-39.75">EXECUTE FILTER</button>
        </div>
        <div></div>
      </div>
    </section>
  );
}
