import React from "react";
import { CmsContent } from "../components/CmsContent";
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
    note: "Very useful siteâ€”it contains solutions to Dummit and Foote",
  },
  { url: "http://en.bookfi.org/", label: "Bookfi" },
  { url: "http://www.bookboon.com/", label: "Bookboon" },
  { url: "http://www.getfreeebooks.com/", label: "GetFreeEbooks" },
  { url: "http://www.onlinefreeebooks.net/", label: "OnlineFreeEbooks" },
  { url: "http://www.freebookspot.es/", label: "FreeBookSpot" },
];

const normalizeCellText = (value = "") =>
  String(value)
    .toLowerCase()
    .replace(/\s+/g, " ")
    .trim();

const normalizeWebLinksContent = (html) => {
  if (!html || typeof window === "undefined") return html;

  const wrapper = document.createElement("div");
  wrapper.innerHTML = html;

  const knownLinksByName = new Map(
    webLinks.map((item) => [normalizeCellText(item.label), item.url])
  );

  const tables = Array.from(wrapper.querySelectorAll("table"));
  if (tables.length === 0) return wrapper.innerHTML;

  const rows = [];
  const seenNames = new Set();

  tables.forEach((table) => {
    const trList = Array.from(table.querySelectorAll("tbody tr, tr"));

    trList.forEach((row) => {
      const cells = Array.from(row.querySelectorAll("th, td"));
      if (cells.length === 0) return;

      const name = cells[0]?.textContent?.trim() || "";
      const normalizedName = normalizeCellText(name);

      // Skip header-like or malformed rows.
      if (!normalizedName || normalizedName === "name" || normalizedName === "namelinknotes") return;
      if (seenNames.has(normalizedName)) return;

      const rawLinkCell = cells[1];
      const anchor = rawLinkCell?.querySelector("a");
      const rawLinkText = rawLinkCell?.textContent?.trim() || "";
      const mappedLink = knownLinksByName.get(normalizedName) || "";

      let link = anchor?.getAttribute("href")?.trim() || "";
      if (!link && rawLinkText && rawLinkText !== "-") {
        link = rawLinkText;
      }
      if (!link || link === "-") {
        link = mappedLink;
      }

      const notes = cells[2]?.textContent?.trim() || "-";

      rows.push({ name, link, notes });
      seenNames.add(normalizedName);
    });
  });

  if (rows.length === 0) return wrapper.innerHTML;

  const canonicalTable = document.createElement("table");
  const canonicalHead = document.createElement("thead");
  const headRow = document.createElement("tr");

  ["Name", "Link", "Notes"].forEach((header) => {
    const th = document.createElement("th");
    th.textContent = header;
    headRow.appendChild(th);
  });

  canonicalHead.appendChild(headRow);
  canonicalTable.appendChild(canonicalHead);

  const canonicalBody = document.createElement("tbody");
  rows.forEach(({ name, link, notes }) => {
    const tr = document.createElement("tr");

    const nameTd = document.createElement("td");
    nameTd.textContent = name;
    tr.appendChild(nameTd);

    const linkTd = document.createElement("td");
    if (link) {
      const a = document.createElement("a");
      a.href = link;
      a.target = "_blank";
      a.rel = "noopener noreferrer";
      a.textContent = link;
      linkTd.appendChild(a);
    } else {
      linkTd.textContent = "-";
    }
    tr.appendChild(linkTd);

    const notesTd = document.createElement("td");
    notesTd.textContent = notes || "-";
    tr.appendChild(notesTd);

    canonicalBody.appendChild(tr);
  });

  canonicalTable.appendChild(canonicalBody);

  const firstTable = tables[0];
  firstTable.replaceWith(canonicalTable);
  tables.slice(1).forEach((table) => table.remove());

  return wrapper.innerHTML;
};

const WebLinks = () => {
  const { data, loading } = useContent('web-links');

  if (loading) return null;

  if (data?.content || data?.blocks?.length > 0) {
    const normalizedContent = normalizeWebLinksContent(data.content);

    return (
      <div className="max-w-4xl mx-auto my-10 px-6">
        <div className="bg-[#fff4dc]  rounded-lg shadow-md p-6">
          <CmsContent content={normalizedContent} blocks={data.blocks} />
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto my-10 px-6">
      <div className="bg-[#fff4dc]  rounded-lg shadow-md p-6">
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

