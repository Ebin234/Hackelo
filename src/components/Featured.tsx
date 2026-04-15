import Image from "next/image"

export default function Featured() {
  return (
    <section>
        <div>
            <h2>Featured Hackathons</h2>
            <div>

                <div className="h-107 w-[384px] bg-[#0F1930]">
                    <div>
                        <Image src={"/images/poster-1.png"} alt="Hackathon poster" width={384} height={192}/>
                    </div>
                    <div className="p-5">
                        <div className="flex flex-row justify-between">
                            <h4 className="font-space font-bold text-[20px] leading-7 text-[#DEE5FF]">NeuralNexus: AI 2.0</h4>
                            <p className="font-mono text-[#3ADFFA] text-[14px] leading-5">$50,000</p>
                        </div>
                        <p className="text-[#A3AAC4] text-[14px] leading-5">Re-imagine the human-AI interface using next-gen
LLMs and edge computing technologies.</p>
                        <div>
                            <ul className="flex flex-row gap-2">
                                <li className="pl-2 pr-2 rounded-md bg-[#192540] text-[#DEE5FF]">AI</li>
                                <li className="pl-2 pr-2 rounded-md bg-[#192540] text-[#DEE5FF]">PYTHON</li>
                                <li className="pl-2 pr-2 rounded-md bg-[#192540] text-[#DEE5FF]">CLOUD</li>
                            </ul>
                        </div>
                        <div className="flex flex-row items-center justify-between">
                            <div className="flex flex-row items-center gap-1">
                                <Image src={"/images/calendar-icon.png"} alt="calendar icon" width={10.5} height={11.67} />
                                <p>Oct 12 - 14</p>
                            </div>
                            <div className="flex flex-row items-center gap-1">
                                <Image src={"/images/people-icon.png"} alt="people icon" width={12.83} height={9.33} />
                                <p>1,240 Participants</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </section>
  )
}
