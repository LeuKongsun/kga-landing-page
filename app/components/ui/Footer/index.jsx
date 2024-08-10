import Link from "next/link";
import facebook from "../../../../public/icons/facebook.svg";
import tiktok from "../../../../public/icons/tiktok.svg";
import youtube from "../../../../public/icons/youtube.svg";
import telegram from "../../../../public/icons/telegram.svg";
import linkedIn from "../../../../public/icons/linkedin.svg";
import Image from "next/image";

const socialInfo = [
  {
    icon: facebook,
    href: "https://www.facebook.com/khmergisacademy",
    alt: "facebook",
  },
  {
    icon: youtube,
    href: "https://www.youtube.com/@Khmergisacademy",
    alt: "youtube",
  },
  {
    icon: tiktok,
    href: "https://www.tiktok.com/@khmergrsacademy",
    alt: "tiktok",
  },
  {
    icon: telegram,
    href: "https://t.me/khmergisacademychannel",
    alt: "telegram",
  },
  {
    icon: linkedIn,
    href: "https://t.me/khmergisacademychannel",
    alt: "linkedIn",
  },
];

const Footer = () => (
  <footer>
    <div className="custom-screen pt-16">
      <div className="mt-10 py-10 border-t items-center justify-between sm:flex">
        <p className="text-gray-600 dark:text-gray-300">
          © 2024 KGA Startup. All rights reserved.
        </p>
        <div className="flex items-center gap-x-4 text-gray-400 mt-6">
          {socialInfo.map((item, idx) => (
            <Link
              key={idx}
              href={item.href}
              aria-label="social media"
              target="_blank"
              rel="noreferrer"
            >
              <div className="w-10 h-10 border text-indigo-600 rounded-full flex items-center justify-center">
                <Image
                  className="sm:grayscale sm:hover:grayscale-0"
                  src={item.icon}
                  alt={item.alt}
                  height="24"
                  width="24"
                />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
