import ReleaseNotes from "../../../components/ui/DocsQgis/ReleaseNotes";
import { releases } from "../_data/releaseNotes";
import { PLUGIN } from "../_data/qgisDocs";

const latest = releases[0];
const TITLE = `Release notes — ${PLUGIN.name}`;
const DESCRIPTION =
  `What changed in each release of ${PLUGIN.name}, from ${releases[releases.length - 1].version} ` +
  `to ${latest.version} (${latest.dateLabel.en}).`;

// Absolute and apex-hosted, to match the rest of the section and the URLs the
// plugin's own Help buttons open.
const URL = "https://khmergrs.com/docs/qgis/release-notes";

export const metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: ["QGIS", "KGA Toolbox", "release notes", "changelog", "versions"],
  alternates: { canonical: URL },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: URL,
    siteName: "Khmer GRS Academy",
    locale: "km_KH",
    type: "website",
  },
  twitter: { card: "summary_large_image", title: TITLE, description: DESCRIPTION },
};

export default function ReleaseNotesPage() {
  return <ReleaseNotes />;
}
