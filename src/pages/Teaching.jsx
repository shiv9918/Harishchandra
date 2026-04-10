import { useContent } from '../hooks/useContent';
import { CmsContent } from "../components/CmsContent";

const Teaching = () => {
  const { data, loading } = useContent('teaching');

  if (loading) return <div className="text-center py-10">Loading...</div>;

  if (data?.content || data?.blocks?.length > 0) {
    return (
      <div className=" p-2 sm:p-4 md:p-6 bg-[#fff4dc]">
        <CmsContent content={data.content} blocks={data.blocks} />
      </div>
    );
  }

  return (
    <div className=" p-2 sm:p-4 md:p-6 bg-[#fff4dc]">

      <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-[#913c07] mb-3 sm:mb-4">
        Subjects Taught
      </h2>

      <div className="overflow-x-auto -mx-2 sm:-mx-3 md:mx-0">
        <table className="w-full border-collapse text-secondary text-xs sm:text-sm md:text-base font-primary">
          <tbody>
            <tr className="border-b border-[#913c07]">
              <td className="py-2 sm:py-3 md:py-4 px-1 sm:px-2 font-semibold text-[#913c07] w-20 sm:w-28 md:w-40 whitespace-nowrap">BAS 01</td>
              <td className="py-2 sm:py-3 md:py-4 px-1 sm:px-2">Engineering Mathematics I</td>
            </tr>

            <tr className="border-b border-[#913c07]">
              <td className="py-2 sm:py-3 md:py-4 px-1 sm:px-2 font-semibold text-[#913c07] whitespace-nowrap">BAS 07</td>
              <td className="py-2 sm:py-3 md:py-4 px-1 sm:px-2">Engineering Mathematics II</td>
            </tr>

            <tr className="border-b border-[#913c07]">
              <td className="py-2 sm:py-3 md:py-4 px-1 sm:px-2 font-semibold text-[#913c07] whitespace-nowrap">BAS 23</td>
              <td className="py-2 sm:py-3 md:py-4 px-1 sm:px-2">Engineering Mathematics IV</td>
            </tr>

            <tr className="border-b border-[#913c07]">
              <td className="py-2 sm:py-3 md:py-4 px-1 sm:px-2 font-semibold text-[#913c07] whitespace-nowrap">BAS 24</td>
              <td className="py-2 sm:py-3 md:py-4 px-1 sm:px-2">Applied Computational Mathematics</td>
            </tr>

            <tr className="border-b border-[#913c07]">
              <td className="py-2 sm:py-3 md:py-4 px-1 sm:px-2 font-semibold text-[#913c07] whitespace-nowrap">BAS 29</td>
              <td className="py-2 sm:py-3 md:py-4 px-1 sm:px-2">Numerical Methods</td>
            </tr>

            <tr className="border-b border-[#913c07]">
              <td className="py-2 sm:py-3 md:py-4 px-1 sm:px-2 font-semibold text-[#913c07] whitespace-nowrap">MAS 112</td>
              <td className="py-2 sm:py-3 md:py-4 px-1 sm:px-2">Advanced Engineering Mathematics</td>
            </tr>

            <tr className="border-b border-[#913c07]">
              <td className="py-3 sm:py-4 font-semibold text-[#913c07]">MMS-102</td>
              <td className="py-3 sm:py-4">Linear Algebra and Matrix Theory</td>
            </tr>

            <tr className="border-b border-[#913c07]">
              <td className="py-3 sm:py-4 font-semibold text-[#913c07]">MMS-108</td>
              <td className="py-3 sm:py-4">Abstract Algebra</td>
            </tr>

            <tr className="border-b border-[#913c07]">
              <td className="py-3 sm:py-4 font-semibold text-[#913c07]">MMS-202</td>
              <td className="py-3 sm:py-4">Theory of Computing</td>
            </tr>
          </tbody>
        </table>
      </div>

    </div>
  );
};

export default Teaching;





