import Link from "next/link";
import { PLUGIN } from "../_data/qgisDocs";

// Belt and braces: every slug the plugin asks for is prerendered, so this only
// shows if a future algorithm ships a helpUrl before its page is written. Better
// a signposted page than a bare 404 on a Help button.
export default function ToolNotFound() {
  return (
    <main className="pt-32 pb-20">
      <div className="custom-screen max-w-2xl text-center">
        <h1 className="mb-4 text-3xl font-display font-800 text-brand-text dark:text-white">
          រកមិនឃើញឧបករណ៍នេះទេ
        </h1>
        <p className="mb-8 leading-relaxed text-brand-text/70 dark:text-gray-300">
          ឯកសារណែនាំសម្រាប់ឧបករណ៍នេះមិនទាន់មានទេ។ សូមមើលបញ្ជីឧបករណ៍ទាំងអស់ ឬរាយការណ៍បញ្ហា។
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <Link
            href="/docs/qgis"
            className="inline-flex items-center gap-2 rounded-full bg-brand-orange px-5 py-3 text-sm font-display font-600 text-white shadow-md shadow-brand-orange/20 transition-all hover:bg-brand-orange/90"
          >
            ឧបករណ៍ទាំងអស់
          </Link>
          <a
            href={PLUGIN.links.issues}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-brand-blue/15 bg-brand-blue/5 px-5 py-3 text-sm font-display font-600 text-brand-text transition-colors hover:border-brand-orange/40 hover:text-brand-orange dark:border-white/10 dark:bg-white/5 dark:text-gray-200"
          >
            រាយការណ៍បញ្ហា
          </a>
        </div>
      </div>
    </main>
  );
}
