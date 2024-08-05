import SectionWrapper from "../../SectionWrapper";
import call from "../../../../public/icons/call.svg";
import email from "../../../../public/icons/email.svg";
import location from "../../../../public/icons/location.svg";
import Image from "next/image";

const Contact = () => (
  <SectionWrapper>
    <div className="custom-screen">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
          ទំនាក់ទំនង
        </h2>
      </div>
      <div className="mt-10 py-10 border-t lg:flex flex-col">
        <div className="lg:flex justify-between">
          <div className="mb-6">
            <div className="flex gap-3">
              <Image src={call} height="24" width="24" alt="phone" />
              <h3 className="font-bold text-lg">លេខទំនាក់ទំនង</h3>
            </div>
            <p>012 345 678</p>
          </div>
          <div className="mb-6">
            <div className="flex gap-3">
              <Image src={email} height="24" width="24" alt="phone" />
              <h3 className="font-bold text-lg">អាស័យដ្ឋានអ៉ីម៉ែល</h3>
            </div>
            <p>chanmolneang@gmail.com</p>
          </div>
          <div className="mb-6">
            <div className="flex gap-3">
              <Image src={location} height="24" width="24" alt="phone" />
              <h3 className="font-bold text-lg">ទីតាំង</h3>
            </div>
            <p>អាគារលេខ៤៨ ផ្លូវ២៨៩ សង្កាត់បឹងកក់២ ខណ្ឌទួលគោក រាជធានីភ្នំពេញ</p>
          </div>
        </div>
        <div className="text-gray-400 w-full">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3908.672460431584!2d104.89702737511448!3d11.575321943950122!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x310951003092289b%3A0x471125801998e4d7!2sKhmer%20GRS%20Academy!5e0!3m2!1sen!2skh!4v1722774759078!5m2!1sen!2skh"
            width="100%"
            height="400"
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  </SectionWrapper>
);

export default Contact;
