import { CmsContent } from "../components/CmsContent";
import { useContent } from "../hooks/useContent";

const Achievements = () => {
  const { data, loading } = useContent('achievements');

  if (loading) return null;

  if (data?.content || data?.blocks?.length > 0) {
    return (
      <div className=" p-2 sm:p-4 md:p-6 bg-[#fff4dc]">
        <CmsContent content={data.content} blocks={data.blocks} />
      </div>
    );
  }

  return (
    <div className=" p-2 sm:p-4 md:p-6 bg-[#fff4dc]">

      {/* ================= Scholarships & Fellowships ================= */}
      <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-[#913c07] mb-3 sm:mb-4">
        Scholarships & Fellowships
      </h2>

      <div className="overflow-x-auto -mx-2 sm:-mx-3 md:mx-0">
        <table className="w-full border-collapse text-secondary mb-6 sm:mb-8 md:mb-10 text-xs sm:text-sm md:text-base font-primary">
          <thead>
            <tr className="border-t border-b border-[#913c07] font-semibold text-left text-[#913c07]">
              <th className="py-2 sm:py-3 px-1 sm:px-2 w-24 sm:w-32 md:w-40">Period</th>
              <th className="py-2 sm:py-3 px-1 sm:px-2">Title</th>
              <th className="py-2 sm:py-3 px-1 sm:px-2">Organization</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-[#913c07]">
              <td className="py-2 sm:py-3 md:py-4 px-1 sm:px-2">2010 â€“ 2012</td>
              <td className="py-2 sm:py-3 md:py-4 px-1 sm:px-2 font-medium">Senior Research Fellow</td>
              <td className="py-2 sm:py-3 md:py-4 px-1 sm:px-2">University Grant Commission (UGC), India</td>
            </tr>

            <tr className="border-b border-[#913c07]">
              <td className="py-2 sm:py-3 md:py-4 px-1 sm:px-2">2008 â€“ 2010</td>
              <td className="py-2 sm:py-3 md:py-4 px-1 sm:px-2 font-medium">Junior Research Fellow</td>
              <td className="py-2 sm:py-3 md:py-4 px-1 sm:px-2">University Grant Commission (UGC), India</td>
            </tr>

            <tr className="border-b border-[#913c07]">
              <td className="py-2 sm:py-3 md:py-4 px-1 sm:px-2">2006 â€“ 2007</td>
              <td className="py-2 sm:py-3 md:py-4 px-1 sm:px-2 font-medium">RBS M Mate Fellow</td>
              <td className="py-2 sm:py-3 md:py-4 px-1 sm:px-2">Lucknow University</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* ================= Qualifications ================= */}
      <h2 className="text-2xl sm:text-3xl font-semibold text-[#913c07] mb-4">
        Qualifications
      </h2>

      <div className="overflow-x-auto -mx-3 sm:mx-0">
        <table className="w-full border-collapse text-secondary mb-10 text-sm sm:text-base font-primary">
          <thead>
            <tr className="border-t border-b border-[#913c07] font-semibold text-left text-[#913c07]">
              <th className="py-3 w-40">Year</th>
              <th className="py-3">Qualification</th>
              <th className="py-3">Organization</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-[#913c07]">
              <td className="py-4">2007</td>
              <td className="py-4 font-medium">NET (JRF) â€“ Mathematics</td>
              <td className="py-4">University Grant Commission (UGC), India</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* ================= MOOC / AICTE Certifications ================= */}
      <h2 className="text-2xl sm:text-3xl font-semibold text-[#913c07] mb-4">
        MOOC / AICTE Certifications
      </h2>

      <div className="overflow-x-auto -mx-3 sm:mx-0">
        <table className="w-full border-collapse text-secondary text-sm sm:text-base font-primary">
          <thead>
            <tr className="border-t border-b border-[#913c07] font-semibold text-left text-[#913c07]">
              <th className="py-3 w-32">Year</th>
              <th className="py-3">Course Title</th>
              <th className="py-3">Details</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-[#913c07]">
              <td className="py-4">2020</td>
              <td className="py-4 font-medium">
                Mathematical Methods and its Application
              </td>
              <td className="py-4">
                12-week AICTE approved online course with Elite Certificate (SWAYAM)
              </td>
            </tr>

            <tr className="border-b border-[#913c07]">
              <td className="py-4">2019</td>
              <td className="py-4 font-medium">
                Introduction to Abstract and Linear Algebra
              </td>
              <td className="py-4">
                8-week AICTE approved online course with Elite Certificate (SWAYAM)
              </td>
            </tr>

            <tr className="border-b border-[#913c07]">
              <td className="py-4">2019</td>
              <td className="py-4 font-medium">Modern Algebra</td>
              <td className="py-4">
                8-week AICTE approved online course with Elite Certificate (SWAYAM)
              </td>
            </tr>
          </tbody>
        </table>
      </div>

    </div>
  );
};

export default Achievements;





