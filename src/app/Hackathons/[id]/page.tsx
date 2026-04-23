export default function page() {
  return (
    <section>
      <div className="p-5">
        <div>
          <div className="flex flex-col gap-4">
            <p className="font-inter text-[14px] leading-5 tracking-[1.4px] text-[#3ADFFA]">
              Live Now
            </p>
            <h1 className="font-space font-bold text-[60px] leading-15 tracking-[-3px] text-[#DEE5FF]">
              Nexus AI{" "}
              <span className="bg-linear-to-r from-[#3ADFFA] to-[#CC97FF] bg-clip-text text-transparent">
                Hackathon
              </span>
            </h1>
            <p className="font-inter text-[20px] text-[#A3AAC4] leading-[32.5px]">
              Architecting the next generation of neural interfaces. Join 5,000+
              builders in a 48-hour sprint to redefine human-computer
              interaction through generative intelligence.
            </p>
          </div>
          <div className="flex flex-row gap-4">
            <div className="bg-[#0F1930] p-5 rounded-xl flex flex-col gap-6">
              <h3 className="font-space text-[24px] leading-8 text-[#DEE5FF]">
                Timeline & Milestones
              </h3>
              <div>
                <ul className="list-disc marker:text-xl marker:text-[#3ADFFA] pl-5">
                  <li>
                    <h4 className="font-inter font-semibold text-[16px] leading-6 text-[#DEE5FF]">
                      Registration Phase
                    </h4>
                    <p className="font-inter text-[14px] leading-5 text-[#A3AAC4]">
                      Ends Oct 12, 11:59 PM PST
                    </p>
                  </li>
                </ul>
                <ul className="list-disc marker:text-xl marker:text-[#CC97FF] pl-5 ">
                  <li>
                    <h4 className="font-inter font-semibold text-[16px] leading-6 text-[#DEE5FF]">
                      Hacking Period
                    </h4>
                    <p className="font-inter text-[14px] leading-5 text-[#A3AAC4]">
                      Oct 14 - Oct 16 (48 Hours)
                    </p>
                  </li>
                </ul>
              </div>
            </div>
            <div className="bg-[#0F1930] p-5 rounded-xl flex flex-col gap-6">
              <h4 className="font-space text-2xl leading-8 text-[#DEE5FF]">
                Prizes
              </h4>
              <div>
                <h2 className="font-space font-bold text-4xl leading-10 text-[#3ADFFA]">
                  $25k
                </h2>
                <p className="font-inter text-[16px] leading-6 text-[#A3AAC4]">Total Prize Pool + Cloud Credits</p>
              </div>
              <p className=" font-inter font-medium text-[14px] leading-5 text-[#3ADFFA]">View Breakdown </p>
              {/*todo : right color blue arrow  */}
            </div>
          </div>
          <div></div>
        </div>
        <div></div>
      </div>
    </section>
  );
}
