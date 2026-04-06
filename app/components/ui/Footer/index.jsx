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
    label: "Facebook",
  },
  {
    icon: youtube,
    href: "https://www.youtube.com/@Khmergisacademy",
    label: "YouTube",
  },
  {
    icon: tiktok,
    href: "https://www.tiktok.com/@khmergrsacademy",
    label: "TikTok",
  },
  {
    icon: telegram,
    href: "https://t.me/khmergisacademychannel",
    label: "Telegram",
  },
  {
    icon: linkedIn,
    href: "https://t.me/khmergisacademychannel",
    label: "LinkedIn",
  },
];

const Footer = () => (
  <footer className="relative mt-20 pb-12">
    <div className="custom-screen">
      <div className="pt-10 border-t border-white/10 flex flex-col items-center justify-between gap-8 sm:flex-row">
        <div className="flex flex-col items-center sm:items-start gap-1">
          <p className="text-xl font-display font-800 text-brand-blue dark:text-white">
             Khmer GRS Academy
          </p>
          <p className="text-sm text-brand-text/60 dark:text-gray-400 font-body">
            © 2026 Khmer GRS Academy. All rights reserved.
          </p>
        </div>
        
        <div className="flex items-center gap-4">
          {socialInfo.map((item, idx) => (
            <Link
              key={idx}
              href={item.href}
              aria-label={item.label}
              target="_blank"
              rel="noreferrer"
              className="w-10 h-10 rounded-full border border-brand-blue/10 dark:border-white/10 flex items-center justify-center hover:scale-110 active:scale-95 transition-all hover:border-brand-orange/50 dark:hover:border-brand-orange/50 group"
            >
              <Image 
                src={item.icon} 
                alt={item.label}
                width={18}
                height={18}
                className="opacity-60 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300 dark:invert"
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
