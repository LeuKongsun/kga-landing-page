import Image from 'next/image'
import argis from '../../../../public/logos/arcgis-logo.png'
import argispro from '../../../../public/logos/arcgis-pro.png'
import qgis from '../../../../public/logos/qgis-logo.png'
import gee from '../../../../public/logos/gee-logo.png'
import snap from '../../../../public/logos/snap-logo.png'

const logos = [
    {
        src: argis,
        alt: "argis"
    },
    {
        src: argispro,
        alt: "argispro"
    },
    {
        src: qgis,
        alt: "qgis"
    },
    {
        src: gee,
        alt: "gee"
    },
    {
        src: snap,
        alt: "snap"
    }
]


const LogoGrid = () => (
    <div>
        <div className="custom-screen">
            <h2 className="font-semibold text-sm text-gray-600 text-center dark:text-gray-300">
                ជំនាញដែលយើងបាននឹងកំពុងបង្រៀន
            </h2>
            <div className="mt-6">
                <ul className="flex gap-x-10 gap-y-6 flex-wrap items-center justify-center md:gap-x-16">
                    {
                        logos.map((item, idx) => (
                            <li key={idx}>
                                <Image className='sm:grayscale sm:hover:grayscale-0' src={item.src} alt={item.alt} height="40" width="100%"/>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    </div>
)

export default LogoGrid