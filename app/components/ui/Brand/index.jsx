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
    <Link href="/" className="flex items-center gap-3">
      <Image
        src={theme === "light" ? "/kga-logo-dark.svg" : "/kga-logo-light.svg"}
        width={40}
        height={40}
        alt="Kga logo"
        className="w-10 h-10"
      />
      <span className="text-lg font-bold text-foreground">
        Khmer GRS Academy
      </span>
    </Link>
  )
}

export default Brand
