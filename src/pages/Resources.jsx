import React from "react";
import { useContent } from "../hooks/useContent";

const websites = [
  {
    url: "https://crazyproject.wordpress.com/",
    label: "crazyproject.wordpress.com/",
    note: "Very useful site. It contains the solution of the famous book Dummit and Foote",
  },
];

const downloads = [
  {
    name: "Adobe Reader X",
    desc: "Allows you to open and view .pdf files.",
    link: "https://get.adobe.com/reader/",
  },
  {
    name: "Adobe Flash Player",
    desc: "Allows you to view flash animations, videos, and play flash games.",
    link: "https://www.adobe.com/products/flashplayer/end-of-life.html",
  },
  {
    name: "Microsoft PowerPoint viewer",
    desc: "Allows you to open and view slide shows created with Power Point.",
    link: "https://www.microsoft.com/en-us/microsoft-365/free-office-online-for-the-web",
  },
  {
    name: "Microsoft Word viewer",
    desc: "Allows you to open, copy, view, and print documents created with Word.",
    link: "https://www.microsoft.com/en-us/microsoft-365/free-office-online-for-the-web",
  },
  {
    name: "Java",
    desc: "Java software allows your computer to run online games and applications.",
    link: "https://www.java.com/download/",
  },
];

const Resources = () => {
  const { data, loading } = useContent('resources');

  if (loading) return null;

  if (data?.content || data?.blocks?.length > 0) {
    return (
      <div className="border border-[#913c07] p-6 bg-[#fff4dc] w-fit mx-auto my-8 shadow-sm font-primary">
        <div className="cms-content">
          {data.content && (
            <div dangerouslySetInnerHTML={{ __html: data.content }} />
          )}
          {data.blocks?.map(block => (
            <div key={block.id} className="mt-6">
              {block.type === 'text' && <div dangerouslySetInnerHTML={{ __html: block.content }} />}
              {block.type === 'image' && block.url && (
                <img src={block.url} alt="Resource Block" className="max-w-full h-auto rounded-lg shadow-md mx-auto" />
              )}
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="border border-[#913c07] p-6 bg-[#fff4dc] w-fit mx-auto my-8 shadow-sm font-primary">
      {/*Header*/}
      <h2 className="text-2xl md:text-3xl font-semibold text-[#913c07] mb-6 border-b border-[#913c07]/30 pb-2">
        RESOURCES
      </h2>

      {/*Websites Section*/}
      <section className="mb-8">
        <h3 className="text-lg font-bold text-[#913c07] mb-2">Websites</h3>
        {websites.map(({ url, label, note }) => (
          <div key={url} className="pl-2">
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#563c29] hover:text-[#913c07] font-medium block hover:underline"
            >
              {label}
            </a>
            <p className="text-[#563c29] text-sm italic mt-1">{note}</p>
          </div>
        ))}
      </section>

      {/*Helpful Downloads Section*/}
      <section>
        <h3 className="text-lg font-bold text-[#913c07] mb-2">Helpful Downloads</h3>
        <p className="text-[#563c29] text-sm mb-4">
          Below you will find links to download free helpful software for your home computer:
        </p>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-t border-b border-[#913c07] text-left text-[#913c07] font-bold">
                <th className="py-2 px-3">Software</th>
                <th className="py-2 px-3">Purpose</th>
                <th className="py-2 px-3">Link</th>
              </tr>
            </thead>
            <tbody>
              {downloads.map(({ name, desc, link }) => (
                <tr
                  key={name}
                  className="border-b border-[#913c07]/20 hover:bg-[#913c07]/5 transition-colors"
                >
                  <td className="py-3 px-3 font-semibold text-[#913c07]">{name}</td>
                  <td className="py-3 px-3 text-[#563c29] leading-tight">{desc}</td>
                  <td className="py-3 px-3">
                    <a
                      href={link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#563c29] font-bold hover:text-[#913c07] hover:underline whitespace-nowrap"
                    >
                      Download
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};

export default Resources;
