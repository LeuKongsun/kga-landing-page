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
        <div className="flex flex-col items-center sm:items-start gap-2">
          <p className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-600 dark:from-blue-400 dark:to-indigo-400">
             Khmer GRS Academy
          </p>
          <p className="text-sm text-muted-foreground opacity-80">
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
              className="w-12 h-12 rounded-2xl glass border border-white/10 flex items-center justify-center hover:scale-110 active:scale-95 transition-all hover:bg-white/5 group"
            >
              <Image 
                src={item.icon} 
                alt={item.label}
                width={22}
                height={22}
                className="opacity-60 group-hover:opacity-100 transition-opacity dark:invert"
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
