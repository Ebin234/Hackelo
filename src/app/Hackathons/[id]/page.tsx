import Image from "next/image";

export default function page() {
  return (
    <section>
      <div className="pl-10 pr-10 pt-5 pb-5 flex flex-row gap-8">
        <div className="flex flex-col gap-11">
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
          <div className="flex flex-row gap-10">
            <div className="bg-[#0F1930] p-5 rounded-xl flex flex-col gap-6 min-w-132">
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
                <p className="font-inter text-[16px] leading-6 text-[#A3AAC4]">
                  Total Prize Pool + Cloud Credits
                </p>
              </div>
              <p className=" font-inter font-medium text-[14px] leading-5 text-[#3ADFFA]">
                View Breakdown{" "}
              </p>
              {/*todo : right color blue arrow  */}
            </div>
          </div>
          <div className="flex flex-col gap-8">
            <div className="flex flex-row justify-between">
              <div>
                <h2 className="font-space font-bold text-3xl leading-9 text-[#DEE5FF]">
                  Join a Team
                </h2>
                <p className="font-inter text-[16px] leading-6 text-[#A3AAC4]">
                  Browse active squads looking for collaborators.
                </p>
              </div>
              <div className="flex justify-end items-end">
                <button className="flex flex-row justify-center items-center bg-[#192540] p-2 rounded-lg gap-2 cursor-pointer">
                  <Image
                    src={"/images/people-icon.png"}
                    alt="people-icon"
                    width={24}
                    height={16}
                  />
                  <p className="font-inter font-medium text-[16px] leading-6 text-[#DEE5FF]">
                    Form Your Own Team
                  </p>
                </button>
              </div>
            </div>
            {/* teams details */}
            <div className="grid grid-cols-3 gap-3">

              <div className="w-86.25 bg-[#0F1930] flex flex-col p-6 gap-4 rounded-xl">
                <div className="flex flex-row justify-between">
                  <div className="flex flex-col gap-2">
                      <h2 className=" font-space font-bold text-[20px] leading-7 text-[#DEE5FF]">The Neural Knights</h2>
                    <div className="flex flex-row gap-3 ">
                      <p className="font-inter font-bold text-[#A3AAC4] text-[10px] leading-3.75 tracking-[1px] uppercase bg-[#192540] p-2 rounded-2xl">PyTorch</p>
                      <p className="font-inter font-bold text-[#A3AAC4] text-[10px] leading-3.75 tracking-[1px] uppercase bg-[#192540] p-2 rounded-2xl">Backend</p>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <p className="font-inter font-bold text-[14px] leading-5 text-[#3ADFFA]">3/4 members</p>
                    <div className="flex">
                      <Image src={'/images/profile-1.png'} alt="profile pic" width={32} height={32}  />
                      <Image src={'/images/profile-2.png'} alt="profile pic" width={32} height={32} className="-ml-3" />
                      <Image src={'/images/profile-3.png'} alt="profile pic" width={32} height={32} className="-ml-3"/>
                    </div>
                  </div>
                </div>
                <p className="font-inter text-[14px] leading-5 text-[#A3AAC4]"> Building a decentralized model training
orchestrator. Looking for a React/Three.js expert…</p>
                <button className="border border-[#3ADFFA4D] rounded-lg pt-3 pb-3 font-inter font-bold text-[16px] leading-6 text-[#3ADFFA]">Request to Join</button>
              </div>
              <div className="w-86.25 bg-[#0F1930] flex flex-col p-6 gap-4 rounded-xl">
                <div className="flex flex-row justify-between">
                  <div className="flex flex-col gap-2">
                      <h2 className=" font-space font-bold text-[20px] leading-7 text-[#DEE5FF]">The Neural Knights</h2>
                    <div className="flex flex-row gap-3 ">
                      <p className="font-inter font-bold text-[#A3AAC4] text-[10px] leading-3.75 tracking-[1px] uppercase bg-[#192540] p-2 rounded-2xl">PyTorch</p>
                      <p className="font-inter font-bold text-[#A3AAC4] text-[10px] leading-3.75 tracking-[1px] uppercase bg-[#192540] p-2 rounded-2xl">Backend</p>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <p className="font-inter font-bold text-[14px] leading-5 text-[#3ADFFA]">3/4 members</p>
                    <div className="flex">
                      <Image src={'/images/profile-1.png'} alt="profile pic" width={32} height={32}  />
                      <Image src={'/images/profile-2.png'} alt="profile pic" width={32} height={32} className="-ml-3" />
                      <Image src={'/images/profile-3.png'} alt="profile pic" width={32} height={32} className="-ml-3"/>
                    </div>
                  </div>
                </div>
                <p className="font-inter text-[14px] leading-5 text-[#A3AAC4]"> Building a decentralized model training
orchestrator. Looking for a React/Three.js expert…</p>
                <button className="border border-[#3ADFFA4D] rounded-lg pt-3 pb-3 font-inter font-bold text-[16px] leading-6 text-[#3ADFFA]">Request to Join</button>
              </div>
              <div className="w-86.25 bg-[#0F1930] flex flex-col p-6 gap-4 rounded-xl">
                <div className="flex flex-row justify-between">
                  <div className="flex flex-col gap-2">
                      <h2 className=" font-space font-bold text-[20px] leading-7 text-[#DEE5FF]">The Neural Knights</h2>
                    <div className="flex flex-row gap-3 ">
                      <p className="font-inter font-bold text-[#A3AAC4] text-[10px] leading-3.75 tracking-[1px] uppercase bg-[#192540] p-2 rounded-2xl">PyTorch</p>
                      <p className="font-inter font-bold text-[#A3AAC4] text-[10px] leading-3.75 tracking-[1px] uppercase bg-[#192540] p-2 rounded-2xl">Backend</p>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <p className="font-inter font-bold text-[14px] leading-5 text-[#3ADFFA]">3/4 members</p>
                    <div className="flex">
                      <Image src={'/images/profile-1.png'} alt="profile pic" width={32} height={32}  />
                      <Image src={'/images/profile-2.png'} alt="profile pic" width={32} height={32} className="-ml-3" />
                      <Image src={'/images/profile-3.png'} alt="profile pic" width={32} height={32} className="-ml-3"/>
                    </div>
                  </div>
                </div>
                <p className="font-inter text-[14px] leading-5 text-[#A3AAC4]"> Building a decentralized model training
orchestrator. Looking for a React/Three.js expert…</p>
                <button className="border border-[#3ADFFA4D] rounded-lg pt-3 pb-3 font-inter font-bold text-[16px] leading-6 text-[#3ADFFA]">Request to Join</button>
              </div>
              <div className="w-86.25 bg-[#0F1930] flex flex-col p-6 gap-4 rounded-xl">
                <div className="flex flex-row justify-between">
                  <div className="flex flex-col gap-2">
                      <h2 className=" font-space font-bold text-[20px] leading-7 text-[#DEE5FF]">The Neural Knights</h2>
                    <div className="flex flex-row gap-3 ">
                      <p className="font-inter font-bold text-[#A3AAC4] text-[10px] leading-3.75 tracking-[1px] uppercase bg-[#192540] p-2 rounded-2xl">PyTorch</p>
                      <p className="font-inter font-bold text-[#A3AAC4] text-[10px] leading-3.75 tracking-[1px] uppercase bg-[#192540] p-2 rounded-2xl">Backend</p>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <p className="font-inter font-bold text-[14px] leading-5 text-[#3ADFFA]">3/4 members</p>
                    <div className="flex">
                      <Image src={'/images/profile-1.png'} alt="profile pic" width={32} height={32}  />
                      <Image src={'/images/profile-2.png'} alt="profile pic" width={32} height={32} className="-ml-3" />
                      <Image src={'/images/profile-3.png'} alt="profile pic" width={32} height={32} className="-ml-3"/>
                    </div>
                  </div>
                </div>
                <p className="font-inter text-[14px] leading-5 text-[#A3AAC4]"> Building a decentralized model training
orchestrator. Looking for a React/Three.js expert…</p>
                <button className="border border-[#3ADFFA4D] rounded-lg pt-3 pb-3 font-inter font-bold text-[16px] leading-6 text-[#3ADFFA]">Request to Join</button>
              </div>
              <div className="w-86.25 bg-[#0F1930] flex flex-col p-6 gap-4 rounded-xl">
                <div className="flex flex-row justify-between">
                  <div className="flex flex-col gap-2">
                      <h2 className=" font-space font-bold text-[20px] leading-7 text-[#DEE5FF]">The Neural Knights</h2>
                    <div className="flex flex-row gap-3 ">
                      <p className="font-inter font-bold text-[#A3AAC4] text-[10px] leading-3.75 tracking-[1px] uppercase bg-[#192540] p-2 rounded-2xl">PyTorch</p>
                      <p className="font-inter font-bold text-[#A3AAC4] text-[10px] leading-3.75 tracking-[1px] uppercase bg-[#192540] p-2 rounded-2xl">Backend</p>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <p className="font-inter font-bold text-[14px] leading-5 text-[#3ADFFA]">3/4 members</p>
                    <div className="flex">
                      <Image src={'/images/profile-1.png'} alt="profile pic" width={32} height={32}  />
                      <Image src={'/images/profile-2.png'} alt="profile pic" width={32} height={32} className="-ml-3" />
                      <Image src={'/images/profile-3.png'} alt="profile pic" width={32} height={32} className="-ml-3"/>
                    </div>
                  </div>
                </div>
                <p className="font-inter text-[14px] leading-5 text-[#A3AAC4]"> Building a decentralized model training
orchestrator. Looking for a React/Three.js expert…</p>
                <button className="border border-[#3ADFFA4D] rounded-lg pt-3 pb-3 font-inter font-bold text-[16px] leading-6 text-[#3ADFFA]">Request to Join</button>
              </div>


            </div>
          </div>
        </div>
        <div className="min-w-89 flex flex-col gap-6">
          <div>
            <div className="bg-[#141F38] flex p-6 items-center gap-2 border-t border-t-[#CC97FF33] rounded-t-xl">
              <Image
                src={"/images/my-requests-icon.png"}
                alt="icon"
                width={19}
                height={16}
              />
              <h4 className="font-space font-bold text-[20px] leading-7 text-[#DEE5FF]">
                My Requests
              </h4>
            </div>
            <div className="bg-[#0F1930] flex flex-col justify-center p-6 gap-4">
              <div className="flex flex-row justify-between">
                <div className="flex flex-row gap-3">
                  <h4 className="bg-[#192540] font-inter font-bold text-[16px] leading-6 text-[#CC97FF] rounded-lg text-center p-2">
                    CK
                  </h4>
                  <div className="flex flex-col gap-1">
                    <h4 className="font-inter font-bold text-[14px] leading-5 text-[#DEE5FF]">
                      Cyber Kraken
                    </h4>
                    <p className="font-inter text-[10px] leading-3.75 tracking-[0.5px] text-[#A3AAC4]">
                      Sent 2h ago
                    </p>
                  </div>
                </div>
                <div className="flex items-center">
                  <p className="bg-[#00687733] rounded-md font-inter font-bold text-[10px] leading-3.75 tracking-[1px] text-[#3ADFFA] uppercase p-2">
                    pending
                  </p>
                </div>
              </div>

              <div className="flex flex-row justify-between">
                <div className="flex flex-row gap-3">
                  <h4 className="bg-[#192540] font-inter font-bold text-[16px] leading-6 text-[#CC97FF] rounded-lg text-center p-2">
                    AS
                  </h4>
                  <div className="flex flex-col gap-1">
                    <h4 className="font-inter font-bold text-[14px] leading-5 text-[#DEE5FF]">
                      Alpha Squad
                    </h4>
                    <p className="font-inter text-[10px] leading-3.75 tracking-[0.5px] text-[#A3AAC4]">
                      Sent 1d ago
                    </p>
                  </div>
                </div>
                <div className="flex items-center">
                  <p className="bg-[#A7013833] rounded-md font-inter font-bold text-[10px] leading-3.75 tracking-[1px] text-[#FF6E84] uppercase p-2">
                    Declined
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-[#000000] flex justify-center items-center h-13 rounded-b-xl">
              <p className="font-inter text-[14px] leading-5 text-[#A3AAC4]">
                View all activity
              </p>
            </div>
          </div>
          <div className="bg-linear-to-br from-[#0F1930] to-[#1A2542] flex flex-col gap-4 p-8 rounded-lg">
            <h3 className="font-space font-bold text-[20px] leading-7 text-[#DEE5FF]">
              Event Quick Stats
            </h3>
            <div className="flex flex-row   gap-15">
              <div className="flex flex-col gap-6  ">
                <div className="flex flex-col gap-1">
                  <p className="font-inter font-semibold text-[12px] leading-4 text-[#A3AAC4] tracking-[1.2px] uppercase">
                    Total Teams
                  </p>
                  <p className="font-space font-bold text-[30px] leading-9 text-[#DEE5FF]">
                    412
                  </p>
                </div>
                <div className="flex flex-col gap-1">
                  <p className="font-inter font-semibold text-[12px] leading-4 text-[#A3AAC4] tracking-[1.2px] uppercase">
                    Hiring Partners
                  </p>
                  <p className="font-space font-bold text-[30px] leading-9 text-[#DEE5FF]">
                    12
                  </p>
                </div>
              </div>

              <div className="flex flex-col gap-6">
                <div className="flex flex-col gap-1">
                  <p className="font-inter font-semibold text-[12px] leading-4 text-[#A3AAC4] tracking-[1.2px] uppercase">
                    Participants
                  </p>
                  <p className="font-space font-bold text-[30px] leading-9 text-[#DEE5FF]">
                    1.2k
                  </p>
                </div>
                <div className="flex flex-col gap-1">
                  <p className="font-inter font-semibold text-[12px] leading-4 text-[#A3AAC4] tracking-[1.2px] uppercase">
                    Days Left
                  </p>
                  <p className="font-space font-bold text-[30px] leading-9 text-[#3ADFFA]">
                    03
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-[6.9px] p-6 rounded-xl bg-[#0F1930]">
            <h3 className="font-space font-bold text-[18px] leading-7 text-[#DEE5FF]">
              Need Help?
            </h3>
            <p className="font-inter text-[14px] text-[#A3AAC4] leading-[22.75px]">
              Our mentors are online 24/7 in Discord to help you find the
              perfect squad.
            </p>
            <button className="bg-[#FFFFFF0D] border border-[#FFFFFF1A] rounded-lg pt-2 pb-2 text-[#DEE5FF] font-inter font-medium text-[14px] leading-5">
              Join Discord
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
