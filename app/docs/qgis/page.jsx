import DocsIndex from "../../components/ui/DocsQgis/DocsIndex";
import { PLUGIN } from "./_data/qgisDocs";

const DESCRIPTION =
  `Documentation for ${PLUGIN.name}: a free QGIS plugin adding ${PLUGIN.toolCount} processing tools ` +
  `in ${PLUGIN.groupCount} groups for data management, schema, editing, topology and format conversion.`;

// Absolute, not relative. metadataBase is the www host while the plugin's
// helpUrl() points at the apex, and the canonical has to match the URL QGIS
// actually opens.
const URL = "https://khmergrs.com/docs/qgis";

export const metadata = {
  title: `${PLUGIN.name} — Documentation`,
  description: DESCRIPTION,
  keywords: ["QGIS", "QGIS plugin", "KGA Toolbox", "GeoPackage", "File Geodatabase", "topology", "Cambodia GIS"],
  alternates: { canonical: URL },
  openGraph: {
    title: `${PLUGIN.name} — Documentation`,
    description: DESCRIPTION,
    url: URL,
    siteName: "Khmer GRS Academy",
    locale: "km_KH",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${PLUGIN.name} — Documentation`,
    description: DESCRIPTION,
  },
};

export default function QgisDocsPage() {
  return <DocsIndex />;
}
