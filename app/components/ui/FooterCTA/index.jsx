import SectionWrapper from "../../SectionWrapper";
import NavLink from "../NavLink";

const FooterCTA = () => (
  <SectionWrapper>
    <div className="custom-screen">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-gray-800 text-3xl font-semibold sm:text-4xl dark:text-gray-300">
          ចុះឈ្មោះចូលរៀនឥលូវនេះ
        </h2>
        <p className="mt-3 text-gray-600 dark:text-gray-300">
          រៀននៅថ្ងៃនេះ ជាស្ពានចម្លងទៅអនាគត និងអ្នកជំនាន់ក្រោយ។
          មើលពីភាពរីកចម្រើនពីក្នុងខ្លួន និងប្រជែងជាមួយខ្លួនឯងពីមួយថ្ងៃទៅមួយថ្ងៃ។
          រៀនជាមួយ​ KGA រៀនដោយទំនុកចិត្ត និងរៀនដោយភាពច្បាសល់លាស់។
        </p>
        <NavLink
          href="https://t.me/khmergrsacademy"
          className="mt-4 inline-block font-medium text-sm text-white bg-gray-800 hover:bg-gray-600 active:bg-gray-900"
        >
          ឆាតតេលេក្រាម
        </NavLink>
      </div>
    </div>
  </SectionWrapper>
);

export default FooterCTA;
