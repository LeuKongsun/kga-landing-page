import SectionWrapper from "../../SectionWrapper"
import Image from "next/image"
import wordpress from "../../../../public/icons/kga-logo.svg"
import course from "../../../../public/icons/course.svg"
import student from "../../../../public/icons/student.svg"
import video from "../../../../public/icons/video.svg"
import service from "../../../../public/icons/service.svg"
import scholarship from "../../../../public/icons/scholarship.svg"

const ToolKit = () => {

    const descriptions = [
        {
            icon: wordpress,
            title: "KGA",
            desc: "Khmer GRS Academy គឺជាស្ថាប័នអប់រំផ្តោតទៅលើទីតាំងភូមិសាស្រ្តដែលបានបង្កើតឡើងក្នុងឆ្នាំ២០១៨។"
        },
        {
            icon: course,
            title: "មុខវិជ្ជា",
            desc: "បច្ចុប្បន្នយើងកំពុងផ្តោតលើមុខវិជ្ជាបីធំៗ ArcGIS, ArcGIS Pro និង QGIS។ ដោយឡែកយើងក៏មានមុខវិជ្ជាផ្សេងៗមួយចំនួនស្ថិតក្នុងការស្រាវជ្រាវផងដែរ។"
        },
        {
            icon: student,
            title: "សិស្សរបស់យើង",
            desc: "រហូតមកដល់ពេលនេះ យើងបានបង្រៀនសិស្សជាង៨០០នាក់រួចមកហើយ រួមមានទាំងស្ថាប័នឯកជន និងរដ្ឋដែលបានមកសិក្សានៅ KGA។"
        },
        {
            icon: video,
            title: "វីដេអូ",
            desc: "យើងផលិតវីដេអូ ទាំងកំឡុងពេលបង្រៀន និងសម្រាប់អ្នកដែលមិនអាចមករៀននៅក្នុងថ្នាក់ផ្ទាល់បាន អាចជាវបានជាមួយនឹងគុណភាព និងតម្លៃសមរម្យ។"
        },
        {
            icon: service,
            title: "សេវាកម្ម",
            desc: "ក្រៅអំពីការបង្រៀន យើងក៏មានផ្តល់ជាសេវាកម្មប្រឹក្សា ប្រមូល រៀបចំ សម្អាត និងវិភាគទិន្នន័យទៅលើផ្នែកដែលពាក់ព័ន្ធ។"
        },
        {
            icon: scholarship,
            title: "ឱកាស និងអាហារូបករណ៍",
            desc: "យើងតែងតែផ្តល់ជាអាហារូបករណ៍ដល់សិស្សានុសិស្សដែលចង់ចាប់យក និងផ្តោតលើជំនាញផែនទី។ ព័ត៌មានបន្ថែមសូមទំនាក់ទំនងមកកាន់យើងខ្ញុំ។"
        },
    ]

    return (
        <SectionWrapper>
            <div id="toolkit" className="max-w-screen-xl mx-auto px-4 text-gray-600 md:px-8">
                <div className="max-w-2xl mx-auto space-y-3 sm:text-center">
                    <h2 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
                        ខ្មែរ ជី អា អេសអាខាដឺមី
                    </h2>
                    <p>
                        ស្គាល់ពីស្ថាប័ន ស្គាល់ពីយើង និងចាប់ផ្តើមជាមួយគ្នា
                    </p>
                </div>
                <div className="mt-12">
                    <ul className="grid gap-y-8 gap-x-12 sm:grid-cols-2 lg:grid-cols-3">
                        {
                            descriptions.map((item, idx) => (
                                <li key={idx} className="flex gap-x-4">
                                    <div className="flex-none w-12 h-12 gradient-border rounded-full flex items-center justify-center">
                                        <Image src={item.icon} alt={item.title} />
                                    </div>
                                    <div>
                                        <h4 className="text-lg text-gray-800 font-semibold">
                                            {item.title}
                                        </h4>
                                        <p className="mt-3">
                                            {item.desc}
                                        </p>
                                    </div>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </SectionWrapper>
    )
}

export default ToolKit