import Link from "next/link";
import Image from "next/image";
import facebook from "../../../../public/icons/facebook.svg";
import tiktok from "../../../../public/icons/tiktok.svg";
import youtube from "../../../../public/icons/youtube.svg";
import telegram from "../../../../public/icons/telegram.svg";
import linkedIn from "../../../../public/icons/linkedin.svg";

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
    href: "https://linkedin.com/company/khmer-grs-academy",
    label: "LinkedIn",
  },
];

const coursesLinks = [
  { label: "All Courses", href: "/courses" },
  { label: "Course Announcement", href: "/course-announcement" },
  { label: "About Us", href: "/about" },
];

const productLinks = [
  { label: "KGA Toolbox", href: "https://toolbox.khmergrs.com", external: true },
  { label: "QGIS Plugin Docs", href: "/docs/qgis" },
  { label: "Blog", href: "/blog" },
  { label: "Our Students", href: "/our-student" },
  { label: "Contact", href: "/contact" },
];

const communityLinks = [
  {
    label: "Facebook Page",
    href: "https://www.facebook.com/khmergisacademy",
    icon: facebook,
  },
  {
    label: "YouTube Channel",
    href: "https://www.youtube.com/@Khmergisacademy",
    icon: youtube,
  },
  {
    label: "Telegram Channel",
    href: "https://t.me/khmergisacademychannel",
    icon: telegram,
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/company/khmer-grs-academy",
    icon: linkedIn,
  },
  {
    label: "TikTok",
    href: "https://www.tiktok.com/@khmergrsacademy",
    icon: tiktok,
  },
];

const Footer = () => (
  <footer className="bg-brand-blue-deeper dark:bg-[#060E1A] border-t border-white/5">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-10 mb-12">
        {/* ───── Brand Column ───── */}
        <div className="md:col-span-2">
          <div className="flex items-center gap-3 mb-4">
            <span className="font-display font-800 text-lg text-white tracking-tight">
              Khmer <span className="text-brand-orange">GRS</span> Academy
            </span>
          </div>
          <p className="text-white/40 text-sm leading-relaxed max-w-sm mb-6 font-body">
            វេទិកាសិក្សា GIS លំដាប់វិជ្ជាជីវៈជាភាសាខ្មែរ — ពីមូលដ្ឋានគ្រឹះរហូតដល់កម្រិតជឿនលឿន ដើម្បីផ្តល់សមត្ថភាពដល់អ្នកវិភាគទិន្នន័យលំហ។
          </p>

          {/* Social media icons */}
          <div className="flex items-center gap-2.5">
            {socialInfo.map((item, idx) => (
              <Link
                key={idx}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={item.label}
                className="w-9 h-9 rounded-lg bg-white/8 border border-white/8 flex items-center justify-center hover:border-brand-orange/30 hover:bg-brand-orange/10 transition-all group"
              >
                <Image
                  src={item.icon}
                  alt={item.label}
                  width={16}
                  height={16}
                  className="opacity-40 group-hover:opacity-100 transition-opacity invert"
                />
              </Link>
            ))}
          </div>
        </div>

        {/* ───── Courses Column ───── */}
        <div>
          <h4 className="font-display font-700 text-white text-sm mb-4">
            Courses
          </h4>
          <ul className="flex flex-col gap-2.5">
            {coursesLinks.map((link, idx) => (
              <li key={idx}>
                <Link
                  href={link.href}
                  className="text-sm text-white/40 hover:text-brand-orange transition-colors font-body"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* ───── Product Column ───── */}
        <div>
          <h4 className="font-display font-700 text-white text-sm mb-4">
            Product
          </h4>
          <ul className="flex flex-col gap-2.5">
            {productLinks.map((link, idx) => (
              <li key={idx}>
                <Link
                  href={link.href}
                  {...(link.external && {
                    target: "_blank",
                    rel: "noopener noreferrer",
                  })}
                  className="text-sm text-white/40 hover:text-brand-orange transition-colors font-body"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* ───── Community Column ───── */}
        <div>
          <h4 className="font-display font-700 text-white text-sm mb-4">
            Community
          </h4>
          <ul className="flex flex-col gap-2.5">
            {communityLinks.map((link, idx) => (
              <li key={idx}>
                <Link
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-white/40 hover:text-brand-orange transition-colors font-body flex items-center gap-2"
                >
                  <Image
                    src={link.icon}
                    alt=""
                    width={14}
                    height={14}
                    className="opacity-40 invert"
                  />
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* ───── Bottom bar ───── */}
      <div className="pt-8 border-t border-white/8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-white/30 text-xs font-mono">
          © 2026 Khmer GRS Academy. All rights reserved.
        </p>
        <div className="flex items-center gap-4">
          <Link
            href="/privacy"
            className="text-white/30 hover:text-white/60 text-xs transition-colors font-body"
          >
            Privacy Policy
          </Link>
          <span className="text-white/10">|</span>
          <Link
            href="/terms"
            className="text-white/30 hover:text-white/60 text-xs transition-colors font-body"
          >
            Terms of Service
          </Link>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
