
export default function Footer() {
  return (
    <footer className="flex justify-between items-center pl-15 pr-15 border-t-2 border-t-[#36393f] h-36">
        <div className="flex flex-col gap-5">
            <h2 className="font-inter font-bold text-[18px] text-[#DEE5FF] leading-7">Hackelo</h2>
            <p className="font-inter text-[14px] leading-5 text-[#DEE5FF]">© 2024 Hackelo. Built for the next generation of builders.</p>
        </div>
        <div className="flex flex-row gap-10">
            <p className="font-inter text-[14px] leading-5 text-[#DEE5FF]">Community</p>
            <p className="font-inter text-[14px] leading-5 text-[#DEE5FF]">Support</p>
            <p className="font-inter text-[14px] leading-5 text-[#DEE5FF]">Legal</p>
            <p className="font-inter text-[14px] leading-5 text-[#DEE5FF]">Privacy</p>
        </div>
        {/* <div></div> we can add the social media links here */}
    </footer>
  )
}
