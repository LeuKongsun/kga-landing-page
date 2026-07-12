'use client'
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const Brand = () => {
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <Link href="/" className="flex items-center gap-3.5">
      <Image
        src={theme === "light" ? "/kga-logo-dark.svg" : "/kga-logo-light.svg"}
        width={44}
        height={44}
        alt="KGA logo"
        className="h-11 w-11 shrink-0"
      />
      <span data-language-switch className="hidden sm:flex flex-col justify-center leading-none">
        <span className="font-display text-[13px] font-800 text-foreground md:text-sm">
          ខ្មែរ ជីអាអេស អាខាដឺមី
        </span>
        <span className="mt-1 font-display text-xs font-700 text-foreground/75 md:text-[13px]">
          Khmer GRS Academy
        </span>
      </span>
    </Link>
  )
}

export default Brand
