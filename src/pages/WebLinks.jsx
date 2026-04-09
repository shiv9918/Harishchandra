import React from "react";
import { useContent } from "../hooks/useContent";

const webLinks = [
  {
    url: "https://scholar.google.com/citations?user=VeAyaAgAAAAJ&hl=en",
    label: "Google Scholar",
  },
  {
    url: "https://orcid.org/my-orcid?orcid=0000-0001-5232-6043",
    label: "ORCID",
  },
  {
    url: "https://www.researchgate.net/profile/Harish-Chandra-4?ev=hdr_xprf",
    label: "ResearchGate",
  },
  {
    url: "https://www.linkedin.com/in/harish-chandra-1335086a/",
    label: "LinkedIn",
  },
  {
    url: "https://www.youtube.com/@harishmmmut",
    label: "YouTube",
  },
  {
    url: "https://sites.google.com/site/harishchandra858/",
    label: "Google Site",
  },
  { url: "http://www.sagemath.org/", label: "SageMath" },
  { url: "http://www.xm1math.net/texmaker/", label: "Texmaker" },
  { url: "http://www.damicon.com/resources/opensoftware.html", label: "Damicon Open Software Resources" },
  { url: "http://www.tripwiremagazine.com/2010/03/20-most-popular-open-source-software-ever-2.html", label: "Popular Open Source Software (Tripwire Magazine)" },
  {
    url: "https://crazyproject.wordpress.com/",
    label: "crazyproject.wordpress.com",
    note: "Very useful site—it contains solutions to Dummit and Foote",
  },
  { url: "http://en.bookfi.org/", label: "Bookfi" },
  { url: "http://www.bookboon.com/", label: "Bookboon" },
  { url: "http://www.getfreeebooks.com/", label: "GetFreeEbooks" },
  { url: "http://www.onlinefreeebooks.net/", label: "OnlineFreeEbooks" },
  { url: "http://www.freebookspot.es/", label: "FreeBookSpot" },
];

const WebLinks = () => {
  const { data, loading } = useContent('web-links');

  if (loading) return null;

  if (data?.content || data?.blocks?.length > 0) {
    return (
      <div className="max-w-4xl mx-auto my-10 px-6">
        <div className="bg-[#fff4dc] border border-[#913c07] rounded-lg shadow-md p-6">
          <div className="cms-content">
            {data.content && (
              <div dangerouslySetInnerHTML={{ __html: data.content }} />
            )}
            {data.blocks?.map(block => (
              <div key={block.id} className="mt-6">
                {block.type === 'text' && <div dangerouslySetInnerHTML={{ __html: block.content }} />}
                {block.type === 'image' && block.url && (
                  <img src={block.url} alt="Link Block" className="max-w-full h-auto rounded-lg shadow-md mx-auto" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto my-10 px-6">
      <div className="bg-[#fff4dc] border border-[#913c07] rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold text-[#913c07] mb-4">WEB LINKS</h2>
        <p className="text-sm text-[#563c29] mb-6">
          Here are links to free software and books:
        </p>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-[#913c07]/10 text-[#913c07] font-bold">
                <th className="py-2 px-3 text-left">Name</th>
                <th className="py-2 px-3 text-left">Link</th>
                <th className="py-2 px-3 text-left">Notes</th>
              </tr>
            </thead>
            <tbody>
              {webLinks.map(({ url, label, note }) => (
                <tr
                  key={url}
                  className="border-b border-[#913c07]/20 hover:bg-[#913c07]/5 transition-colors"
                >
                  <td className="py-2 px-3 font-semibold text-[#913c07]">
                    {label}
                  </td>
                  <td className="py-2 px-3">
                    <a
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#563c29] hover:text-[#913c07] hover:underline break-all"
                    >
                      {url}
                    </a>
                  </td>
                  <td className="py-2 px-3 text-[#563c29] italic">
                    {note || "-"}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default WebLinks;