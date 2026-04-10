import { Phone, Mail, MapPin } from "lucide-react";
import { CmsContent } from "../components/CmsContent";
import { useContent } from '../hooks/useContent';

const Contact = () => {
  const { data, loading } = useContent('contact');

  if (loading) return <div className="text-center py-10">Loading...</div>;

  if (data?.content || data?.blocks?.length > 0) {
    return (
      <div className="border border-[#913c07] p-3 sm:p-4 md:p-6 bg-[#fff4dc] text-secondary font-primary">
        <CmsContent content={data.content} blocks={data.blocks} contentClassName="contact-cms-content" />
      </div>
    );
  }

  return (
    <div className=" border border-[#913c07] p-3 sm:p-4 md:p-6 bg-[#fff4dc] text-secondary font-primary">
      {/* Title */}
      <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-[#913c07] mb-4 sm:mb-6">
        Contact Details
      </h2>

      {/* Gradient Card */}
      <div
        className="
          rounded-lg sm:rounded-xl p-4 sm:p-6
          w-full
          text-secondary
          font-primary
        "
      >
        <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2 font-secondary">
          Dr. Harish Chandra
        </h3>

        <p className="text-xs sm:text-sm mb-3 sm:mb-4">Assistant Professor</p>

        <div className="space-y-1 text-xs sm:text-sm mb-4 sm:mb-6">
          <p>Department of Mathematics and Scientific Computing</p>
          <p>Madan Mohan Malaviya University of Technology</p>
          <p>
            Gorakhpur, Uttar Pradesh –{" "}
            <span className="!font-mono tabular-nums">273010</span>, India
          </p>
        </div>

        <div className="flex items-start gap-4 sm:gap-4 mb-3 sm:mb-4">
          <div className="bg-white/20 p-1.5 sm:p-2 rounded-lg flex-shrink-0">
            <Phone size={16} className="sm:w-[18px] sm:h-[18px]" />
          </div>
          <p className="!font-mono tabular-nums text-xs sm:text-sm break-words">
            +91-9450565757
            <br /> +91-9235501647
          </p>
        </div>

        <div className="flex items-start gap-4 sm:gap-4 mb-3 sm:mb-4">
          <div className="bg-white/20 p-1.5 sm:p-2 rounded-lg flex-shrink-0">
            <Mail size={18} />
          </div>
          <p className="text-sm ">
            Official Email:-{" "}
            <span className="underline underline-offset-2">
              hcmsc@mmmut.ac.in;
            </span>
            <br />
            Personal Email:-{" "}
            <span className="underline underline-offset-2">
              hc<span className="!font-mono tabular-nums">19856</span>{" "}
              @gmail.com
            </span>
          </p>
        </div>

        <div className="flex items-start gap-4 sm:gap-4 mb-3 sm:mb-4">
          <div className="bg-white/20 p-1.5 sm:p-2 rounded-lg flex-shrink-0">
            <MapPin size={18} />
          </div>
          <p className="text-sm pt-1.5 !font-mono tabular-nums">
            26°43′53.2″N 83°25′59.3″E
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
