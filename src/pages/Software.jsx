import React from "react";
import { useContent } from "../hooks/useContent";
import { CmsContent } from "../components/CmsContent";

const Software = () => {
  const { data, loading } = useContent('software');

  if (loading) return null;

  if (data?.content || data?.blocks?.length > 0) {
    return (
      <div className=" p-2 sm:p-4 md:p-6 bg-[#fff4dc]">
        <CmsContent content={data.content} blocks={data.blocks} />
      </div>
    );
  }

  return (
    <div className=" p-2 sm:p-4 md:p-6 bg-[#fff4dc] w-fit mx-auto my-4">

      {/* ================= Header Section ================= */}
      <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-[#913c07] mb-4 sm:mb-6">
        Softwares
      </h2>

      {/* ================= Software List / Table ================= */}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse text-secondary text-xs sm:text-sm md:text-base font-primary">
          <thead>
            <tr className="border-t border-b border-[#913c07] font-semibold text-left text-[#913c07]">
              <th className="py-2 sm:py-3 px-2 w-12 sm:w-16">S.No.</th>
              <th className="py-2 sm:py-3 px-2">Software & Description</th>
              <th className="py-2 sm:py-3 px-2 text-center w-24 sm:w-32 md:w-40">Action</th>
            </tr>
          </thead>
          <tbody>
            {/* SageMath */}
            <tr className="border-b border-[#913c07] hover:bg-white/30 transition-colors">
              <td className="py-4 px-2 align-top">1.</td>
              <td className="py-4 px-2 max-w-md md:max-w-2xl">
                <span className="font-bold text-[#913c07] block mb-1">Sage</span>
                <p className="text-[#563c29] leading-relaxed">
                  Sage is a free open-source mathematics software system licensed under the GPL. It combines the power of many existing open-source packages into a common Python-based interface. It is a free open source alternative to Magma, Maple, Mathematica and Matlab.
                </p>
              </td>
              <td className="py-4 px-2 text-center align-middle">
                <a
                  href="http://www.sagemath.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#913c07] hover:underline font-semibold"
                >
                  Visit Site
                </a>
              </td>
            </tr>

            {/* Texmaker */}
            <tr className="border-b border-[#913c07] hover:bg-white/30 transition-colors">
              <td className="py-4 px-2 align-top">2.</td>
              <td className="py-4 px-2 max-w-md md:max-w-2xl">
                <span className="font-bold text-[#913c07] block mb-1">Texmaker</span>
                <p className="text-[#563c29] leading-relaxed">
                  Texmaker is a free, modern and cross-platform LaTeX editor for linux, macosx and windows systems that integrates many tools needed to develop documents with LaTeX, in just one application. Texmaker includes unicode support, spell checking, auto-completion, code folding and a built-in pdf viewer with synctex support and continuous view mode. Texmaker is released under the GPL license.
                </p>
              </td>
              <td className="py-4 px-2 text-center align-middle">
                <a
                  href="http://www.xm1math.net/texmaker/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#913c07] hover:underline font-semibold"
                >
                  Visit Site
                </a>
              </td>
            </tr>

            {/* Adobe Reader X */}
            <tr className="hover:bg-white/30 transition-colors">
              <td className="py-4 px-2 align-top">3.</td>
              <td className="py-4 px-2 max-w-md md:max-w-2xl">
                <span className="font-bold text-[#913c07] block mb-1">Adobe Reader X</span>
                <p className="text-[#563c29] leading-relaxed">
                  Allows you to open and view .pdf files.
                </p>
              </td>
              <td className="py-4 px-2 text-center align-middle">
                <a
                  href="https://get.adobe.com/reader/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#913c07] hover:underline font-semibold"
                >
                  Visit Site
                </a>
              </td>
            </tr>

            {/* Adobe Flash Player */}
            <tr className="border-b border-[#913c07] hover:bg-white/30 transition-colors">
              <td className="py-4 px-2 align-top">4.</td>
              <td className="py-4 px-2 max-w-md md:max-w-2xl">
                <span className="font-bold text-[#913c07] block mb-1">Adobe Flash Player</span>
                <p className="text-[#563c29] leading-relaxed">
                  Allows you to view flash animations, videos, and play flash games.
                </p>
              </td>
              <td className="py-4 px-2 text-center align-middle italic text-gray-500">
                EOL
              </td>
            </tr>

            {/* Microsoft PowerPoint Viewer */}
            <tr className="border-b border-[#913c07] hover:bg-white/30 transition-colors">
              <td className="py-4 px-2 align-top">5.</td>
              <td className="py-4 px-2 max-w-md md:max-w-2xl">
                <span className="font-bold text-[#913c07] block mb-1">Microsoft PowerPoint Viewer</span>
                <p className="text-[#563c29] leading-relaxed">
                  Allows you to open and view slide shows created with PowerPoint.
                </p>
              </td>
              <td className="py-4 px-2 text-center align-middle italic text-gray-500">
                EOL
              </td>
            </tr>

            {/* Microsoft Word Viewer */}
            <tr className="border-b border-[#913c07] hover:bg-white/30 transition-colors">
              <td className="py-4 px-2 align-top">6.</td>
              <td className="py-4 px-2 max-w-md md:max-w-2xl">
                <span className="font-bold text-[#913c07] block mb-1">Microsoft Word Viewer</span>
                <p className="text-[#563c29] leading-relaxed">
                  Allows you to open, copy, view, and print documents created with Word.
                </p>
              </td>
              <td className="py-4 px-2 text-center align-middle italic text-gray-500">
                EOL
              </td>
            </tr>

            {/* Java */}
            <tr className="border-b border-[#913c07] hover:bg-white/30 transition-colors">
              <td className="py-4 px-2 align-top">7.</td>
              <td className="py-4 px-2 max-w-md md:max-w-2xl">
                <span className="font-bold text-[#913c07] block mb-1">Java</span>
                <p className="text-[#563c29] leading-relaxed">
                  Java software allows your computer to run online games and applications.
                </p>
              </td>
              <td className="py-4 px-2 text-center align-middle">
                <a
                  href="https://www.java.com/en/download/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#913c07] hover:underline font-semibold"
                >
                  Visit Site
                </a>
              </td>
            </tr>

            {/* Other Resources */}
            <tr className="hover:bg-white/30 transition-colors">
              <td className="py-4 px-2 align-top">8.</td>
              <td className="py-4 px-2 max-w-md md:max-w-2xl">
                <span className="font-bold text-[#913c07] block mb-1">Other Resources</span>
                <p className="text-[#563c29] mb-2">Other important free open source software can be downloaded through the following sites:</p>
                <ul className="list-disc list-inside text-[#913c07] space-y-1">
                  <li>
                    <a href="http://www.damicon.com/resources/opensoftware.html" target="_blank" rel="noopener noreferrer" className="hover:underline">Damicon Resources</a>
                  </li>
                  <li>
                    <a href="http://www.tripwiremagazine.com/2010/03/20-most-popular-open-source-software-ever-2.html" target="_blank" rel="noopener noreferrer" className="hover:underline">Tripwire Magazine List</a>
                  </li>
                </ul>
              </td>
              <td className="py-4 px-2 text-center align-middle italic text-gray-500">
                -
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Software;

