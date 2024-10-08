import NavLink from "../NavLink"

const Hero = () => (
    <section>
        <div className="custom-screen py-28 text-gray-600">
            <div className="space-y-2 max-w-4xl mx-auto text-center">
                <h1 className="text-4xl text-gray-800 font-extrabold mx-auto sm:text-6xl dark:text-gray-300">
                    KHMER GRS ACADEMY 
                </h1>
                <h1 className="text-4xl text-gray-800 font-extrabold mx-auto md:leading-snug sm:text-6xl dark:text-gray-300">សិក្សាលម្អិតទៅលើជំនាញគ្រប់គ្រងទិន្នន័យភូមិសាស្រ្ត និងផែនទី</h1>
                <p className="max-w-xl mx-auto dark:text-gray-300">
                    យើងផ្តល់ឲ្យនូវការបង្រៀនដែលយកចិត្តទុកដាក់ ប្រកបដោយគុណភាព និងទំនួលខុសត្រូវ។ ការពេញចិត្តរបស់អ្នក គឺជាតម្លៃរបស់យើង។
                </p>
                <div className="flex items-center justify-center gap-x-3 font-medium text-sm">
                    <NavLink
                        href="https://t.me/khmergrsacademy"
                        className="text-white bg-gray-800 hover:bg-gray-600 active:bg-gray-900 "
                    >
                        ចុះឈ្មោះឥលូវនេះ
                    </NavLink>
                    <NavLink
                        href="https://www.youtube.com/@Khmergisacademy"
                        className="text-gray-700 border hover:bg-gray-50 dark:text-gray-300 dark:hover:text-gray-700"
                        scroll={false}
                    >
                        មើលវីដេអូ​នៅ Youtube
                    </NavLink>
                </div>
            </div>
        </div>
    </section>
)

export default Hero