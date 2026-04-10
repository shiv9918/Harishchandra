import { CmsContent } from "../components/CmsContent";
import { useContent } from '../hooks/useContent';

const Research = () => {
  const { data, loading } = useContent('research');

  if (loading) return <div className="text-center py-10">Loading...</div>;

  if (data?.content || data?.blocks?.length > 0) {
    return (
      <div className="border border-[#913c07] p-2 sm:p-4 md:p-6 bg-[#fff4dc]">
        <CmsContent content={data.content} blocks={data.blocks} />
      </div>
    );
  }

  return (
    <div className="border border-[#913c07] p-2 sm:p-4 md:p-6 bg-[#fff4dc]">

      {/* Page Title */}
      <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-[#913c07]">
        Research Projects
      </h2>
      <hr className="my-2 sm:my-3 border-[#913c07]" />

      <div className="overflow-x-auto -mx-2 sm:-mx-3 md:mx-0">
        <table className="w-full border-collapse text-secondary text-xs sm:text-sm md:text-base font-primary">
          <tbody>

            {/* Project Title */}
            <tr className="border-t border-[#913c07]">
              <td colSpan="2" className="py-3 sm:py-4 px-2 sm:px-0 font-semibold text-[#913c07]">
                Study of Derived Length and Nilpotency Class of Group Algebras
              </td>
            </tr>

            {/* Period */}
            <tr className="border-t border-[#913c07]">
              <td className="py-2 sm:py-3 px-2 sm:px-0 w-1/3 sm:w-1/4 font-semibold text-[#913c07]">
                Period
              </td>
              <td className="py-2 sm:py-3 px-2 sm:px-0">
                2017 – 2020
              </td>
            </tr>

            {/* Funding */}
            <tr className="border-t border-[#913c07]">
              <td className="py-3 font-semibold text-[#913c07]">
                Funding
              </td>
              <td className="py-3">
                DST (SERB), New Delhi
              </td>
            </tr>

            {/* Amount */}
            <tr className="border-t border-[#913c07]">
              <td className="py-3 font-semibold text-[#913c07]">
                Amount
              </td>
              <td className="py-3 text-[#913c07] font-semibold">
                Rs. 5.45 Lac
              </td>
            </tr>

          </tbody>
        </table>
      </div>

    </div>
  );
};

export default Research;




