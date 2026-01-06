import Image from "next/image";

function Footer() {
  return (
    <div className="w-full px-6 py-8 flex flex-col gap-6 sm:px-8 lg:w-5/6 lg:px-0">
        <p className="border-b-2 border-gray-600 "></p>
      <div className="flex flex-col gap-6 md:flex-row ">
        <div className="flex flex-col gap-4 md:w-1/2 justify-center">
          <Image src="/logoNav.png" alt="" width={300} height={20} />
          <p className="graytext">
            Take Control of your financial future with smart expense tracking,
            budget management, and data driven insights
          </p>
        </div>
        <div className="flex justify-between md:justify-around  md:w-1/2">
          <div>
            <h5 className="font-bold text-xl mb-2">Product</h5>
            <ul className="graytext flex flex-col gap-2">
              <li className="btn-base">
                <p>Features</p>
              </li>
              <li className="btn-base">
                <p>Pricing</p>
              </li>
              <li className="btn-base">
                <p>Security</p>
              </li>
              <li className="btn-base">
                <p>Roadmap</p>
              </li>
            </ul>
          </div>
          <div>
            <h5 className="font-bold text-xl mb-2">Company</h5>
            <ul className="graytext flex flex-col gap-2">
              <li className="btn-base">
                <p>About</p>
              </li>
              <li className="btn-base">
                <p>Blog</p>
              </li>
              <li className="btn-base">
                <p>Careers</p>
              </li>
              <li className="btn-base">
                <p>Contact</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <p className="border-b-2 border-gray-600 "></p>
      <div className="md:flex items-center justify-between">
        <p className="text-center">2026 Wallet Buddy. All rights reserved.</p>
        <ul className="flex text-sm justify-between mt-4 md:mt-0 graytext md:gap-6">
          <li className="btn-base">
            <p>Privacy Policy</p>
          </li>
          <li className="btn-base">
            <p>Terms of Service</p>
          </li>
          <li className="btn-base">
            <p>Cookie Policy</p>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
