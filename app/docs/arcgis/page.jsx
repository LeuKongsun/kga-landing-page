import DocsIndex from "../../components/ui/DocsArcgis/DocsIndex";
import { PRODUCT, TOOL_COUNT, groups } from "./_data/arcgisDocs";

const TITLE = `${PRODUCT.name} — Documentation`;
const DESCRIPTION =
  `Documentation for ${PRODUCT.name}: an ArcGIS Pro add-in adding ${TOOL_COUNT} tools ` +
  `in ${groups.length} ribbon groups for cadastral work, data management, attribute ` +
  `analysis, topology checks and map production.`;

// Absolute and apex-hosted, matching /docs/qgis. metadataBase in app/layout.js
// is the www host, so a relative canonical would emit the www form instead.
const URL = "https://khmergrs.com/docs/arcgis";

export const metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "ArcGIS Pro",
    "ArcGIS Pro add-in",
    "KGA Toolbox",
    "cadastral",
    "topology",
    "parcel mapping",
    "Cambodia GIS",
  ],
  alternates: { canonical: URL },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: URL,
    siteName: "Khmer GRS Academy",
    locale: "km_KH",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
};

export default function ArcgisDocsPage() {
  return <DocsIndex />;
}
