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
    <Link href="/">
      <Image
        src={theme === "light" ? "/kga-logo-dark.svg" : "/kga-logo-light.svg"}
        width={60}
        height={20}
        alt="Kga logo"
      />
    </Link>
  )
}

export default Brand
