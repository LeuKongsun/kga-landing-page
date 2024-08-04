import SectionWrapper from "../../SectionWrapper"
import NavLink from "../NavLink"
import ctaImage from "../../../../public/cta-image.jpg"
import Image from "next/image"

const CTA = () => {
    return (
        <SectionWrapper id="cta" className="pb-0">
            <div className="custom-screen">
                <div className="items-center gap-x-12 lg:flex">
                    <div className="flex-1 sm:hidden lg:block">
                        <Image src={ctaImage} className="rounded-lg md:max-w-lg" alt="Create Successful Business Models with Our IT Solutions" />
                    </div>
                    <div className="max-w-xl mt-6 md:mt-0 lg:max-w-2xl">
                        <h2 className="text-gray-800 text-3xl font-semibold md:leading-snug sm:text-4xl">
                            មិនគ្រាន់តែបង្រៀន យើងតែងតែឈឺឆ្អាល និងរិះរកវិធីបង្រៀនដ៏ល្អបំផុតមួយតាមដែលអាចធ្វើបាន
                        </h2>
                        <p className="mt-3 text-gray-600">
                            យើងផ្តោតលើគុណភាពមេរៀននីមួយៗ ដោយធ្វើកំណែទម្រង់លើមាតិកា និងតែងតែធ្វើបច្ចុប្បន្នភាពមេរៀន ដើម្បីឲ្យគុណភាពអប់រំកាន់តែមានស្តង់ដារ។
                            ការបង្កើតធនធានមនុស្សជាមួយនឹងជំនាញដ៏ពិតប្រាកដមួយ ជាគោលដៅរបស់ស្ថាប័នក៏ដូចជាក្រុមរបស់យើងខ្ញុំ។ ភាពត្រេកអររបស់អ្នក ជាក្តីអំណររបស់ក្រុមយើងខ្ញុំ។
                        </p>
                        <NavLink
                            href="/get-started"
                            className="inline-block mt-4 font-medium text-sm text-white bg-indigo-600 hover:bg-indigo-700 active:bg-indigo-800"
                        >
                            ចូលរៀន
                        </NavLink>
                    </div>
                </div>
            </div>
        </SectionWrapper>
    )
}

export default CTA