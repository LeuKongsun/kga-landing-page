import { Suspense } from "react";
import OpenKGAListing from "../components/ui/OpenKGA/OpenKGAListing";

export const metadata = {
  title: "OpenKGA | Khmer GRS Academy",
  description: "ទិន្នន័យ GIS បើកចំហដោយឥតគិតថ្លៃ ពី Khmer GRS Academy",
};

export default function OpenKGAPage() {
  return (
    <Suspense fallback={null}>
      <OpenKGAListing />
    </Suspense>
  );
}
