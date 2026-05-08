"use client";
import Link from "next/link";
import Image from "next/image";
import { m } from "framer-motion";
import SectionWrapper from "../../SectionWrapper";

const products = [
  {
    name: "KGA Toolbox",
    accent: "Toolbox",
    tagline: "Engineering-grade GIS tools for ArcGIS Pro",
    description:
      "បណ្តុំឧបករណ៍សម្រាប់កម្មវិធី ArcGIS Pro — ពីការគ្រប់គ្រងទិន្នន័យធម្មតា រហូតដល់ការផលិតផែនទីកម្រិតជំនាញ។",
    features: [
      "Cadastral operations",
      "Topology validation",
      "Workflow automation",
      "ArcGIS Pro integration",
    ],
    image: "/images/kga-toolbox.png",
    href: "https://www.khmergrs.com/kga-toolbox",
    cta: "Visit Toolbox site",
    badge: "ArcGIS Pro Addin",
  },
  {
    name: "KGA Geodigitizer",
    accent: "Geodigitizer",
    tagline: "Quickly grap your GIS data effortlessly and effectively.",
    description:
      "Web-GIS សម្រាប់គូសបង្កើតទិន្នន័យ GIS ដូចជា​ ចំនុច ខ្សែ និងពហុកោណ បានលឿន និងមានភាពងាយស្រួល",
    features: [
      "AI-assisted digitizing",
      "Speed up map creation",
      "High accuracy output",
      "Easy to use interface",
    ],
    image: "/images/kga-geodigitizer.png",
    href: "https://www.khmergrs.com/geodigitizer",
    cta: "Visit Geodigitizer site",
    badge: "Web-GIS",
  },
];

const Products = () => {
  return (
    <SectionWrapper>
      <div className="custom-screen">
        {/* ───── Section Header ───── */}
        <m.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 max-w-3xl mx-auto px-4"
        >
          <span className="inline-block px-4 py-1.5 mb-6 text-xs font-display font-600 tracking-wider uppercase rounded-full bg-brand-orange/10 text-brand-orange border border-brand-orange/20">
            Products
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-800 leading-[1.4] mb-4 text-brand-text dark:text-white">
            ផលិតផលរបស់យើង
          </h2>
          <div className="w-16 h-1.5 bg-brand-orange mx-auto rounded-full mb-6"></div>
          <p className="text-base md:text-lg text-brand-text/60 dark:text-gray-400 leading-relaxed font-body">
            ឧបករណ៍ដែលបង្កើតឡើងសម្រាប់អ្នកជំនាញ GIS ដើម្បីបង្កើនល្បឿន និងគុណភាពនៃការងារ។
          </p>
        </m.div>

        {/* ───── Products Grid ───── */}
        <div className="grid gap-6 md:grid-cols-2 max-w-6xl mx-auto">
          {products.map((product, idx) => (
            <m.article
              key={product.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="tool-card bg-white dark:bg-white/5 rounded-2xl border border-brand-blue/8 dark:border-white/8 overflow-hidden group flex flex-col"
            >
              <Link
                href={product.href}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                {/* Product image */}
                <div className="relative aspect-[16/9] overflow-hidden bg-gradient-to-br from-brand-blue/5 to-brand-orange/5 dark:from-white/5 dark:to-white/10">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Badge */}
                  <span className="absolute top-3 left-3 text-xs font-display font-600 px-2.5 py-1 rounded-full border backdrop-blur-md bg-brand-orange/15 text-brand-orange border-brand-orange/30">
                    {product.badge}
                  </span>
                </div>
              </Link>

              <div className="p-6 flex flex-col flex-1">
                <Link
                  href={product.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <h3 className="text-2xl font-display font-800 mb-2 text-brand-text dark:text-white leading-snug group-hover:text-brand-orange transition-colors">
                    KGA{" "}
                    <span className="text-brand-orange">{product.accent}</span>
                  </h3>
                </Link>

                <p className="text-sm font-display font-600 text-brand-text/80 dark:text-gray-300 mb-3">
                  {product.tagline}
                </p>

                <p className="text-sm text-brand-text/60 dark:text-gray-400 leading-relaxed font-body mb-5">
                  {product.description}
                </p>

                {/* Features list */}
                <ul className="space-y-2 mb-6">
                  {product.features.map((feature, fIdx) => (
                    <li
                      key={fIdx}
                      className="flex items-start gap-2 text-sm text-brand-text/70 dark:text-gray-300 font-body"
                    >
                      <svg
                        className="w-4 h-4 text-brand-orange mt-0.5 flex-shrink-0"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA button */}
                <Link
                  href={product.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-1.5 mt-auto px-5 py-3 bg-brand-orange text-white text-sm font-display font-600 rounded-full hover:bg-brand-orange/90 shadow-md shadow-brand-orange/20 hover:shadow-lg hover:shadow-brand-orange/30 transition-all"
                >
                  {product.cta}
                  <svg
                    className="w-4 h-4"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.5 2A1.5 1.5 0 003 3.5v13A1.5 1.5 0 004.5 18h11a1.5 1.5 0 001.5-1.5V8.621a1.5 1.5 0 00-.44-1.06l-5.12-5.122A1.5 1.5 0 0010.378 2H4.5zm5.5 7a.75.75 0 01.75.75v2.69l.72-.72a.75.75 0 111.06 1.06l-2 2a.75.75 0 01-1.06 0l-2-2a.75.75 0 111.06-1.06l.72.72V9.75A.75.75 0 0110 9z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Link>
              </div>
            </m.article>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Products;
