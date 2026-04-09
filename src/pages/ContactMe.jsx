import { Phone, Mail, MapPin, ImageIcon } from "lucide-react";
import { useContent } from '../hooks/useContent';

const contactProfileLinks = [
  {
    url: "https://www.researchgate.net/profile/Harish-Chandra-4?ev=hdr_xprf",
    label: "ResearchGate",
    logoText: "RG",
    logoClass: "bg-[#00CCBB] text-white",
  },
  {
    url: "https://www.linkedin.com/in/harish-chandra-1335086a/",
    label: "LinkedIn",
    logoText: "in",
    logoClass: "bg-[#0A66C2] text-white",
  },
  {
    url: "https://scholar.google.com/citations?user=VeAyaAgAAAAJ&hl=en",
    label: "Google Scholar",
    logoText: "GS",
    logoClass: "bg-[#4285F4] text-white",
  },
  {
    url: "https://orcid.org/my-orcid?orcid=0000-0001-5232-6043",
    label: "ORCID",
    logoText: "iD",
    logoClass: "bg-[#A6CE39] text-[#1f3d08]",
  },
];

const Contact = () => {
  const { data, loading } = useContent('contact');

  if (loading) return <div className="text-center py-10">Loading...</div>;

  if (data?.content || data?.blocks?.length > 0) {
    return (
      <div className="border border-[#913c07] p-3 sm:p-4 md:p-6 bg-[#fff4dc] text-secondary font-primary">
        <div className="cms-content">
          {data.content && (
            <div dangerouslySetInnerHTML={{ __html: data.content }} />
          )}
          {data.blocks?.map(block => (
            <div key={block.id} className="mt-6">
              {block.type === 'text' && <div dangerouslySetInnerHTML={{ __html: block.content }} />}
              {block.type === 'image' && block.url && (
                <div className="flex items-center gap-2 text-sm">
                  <ImageIcon size={18} className="text-[#913c07]" />
                  <a
                    href={block.url}
                    target="_blank"
                    rel="noreferrer"
                    className="underline underline-offset-2"
                  >
                    {block.title || block.name || "Contact Image"}
                  </a>
                </div>
              )}
            </div>
          ))}

          <div className="mt-8">
            <h3 className="text-lg font-semibold text-[#913c07] mb-3">Contact</h3>
            <div className="flex flex-wrap gap-2">
              {contactProfileLinks.map(({ url, label, logoText, logoClass }) => (
                <a
                  key={url}
                  href={url}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-md border border-[#913c07]/30 px-3 py-1.5 text-sm hover:bg-[#913c07]/10 transition-colors"
                >
                  <span className={`inline-flex h-5 min-w-5 items-center justify-center rounded-sm px-1 text-[10px] font-semibold ${logoClass}`}>
                    {logoText}
                  </span>
                  {label}
                </a>
              ))}
            </div>
          </div>
        </div>
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

        <div className="mt-6">
          <h4 className="text-sm sm:text-base font-semibold text-[#913c07] mb-2">Contact</h4>
          <div className="flex flex-wrap gap-2">
            {contactProfileLinks.map(({ url, label, logoText, logoClass }) => (
              <a
                key={url}
                href={url}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-md border border-[#913c07]/30 px-3 py-1.5 text-xs sm:text-sm hover:bg-[#913c07]/10 transition-colors"
              >
                <span className={`inline-flex h-5 min-w-5 items-center justify-center rounded-sm px-1 text-[10px] font-semibold ${logoClass}`}>
                  {logoText}
                </span>
                {label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
