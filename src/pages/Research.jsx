import { useContent } from '../hooks/useContent';

const patents = [
  {
    id: 1,
    title: 'PORTABLE MATHEMATICS RESEARCH AND COMPUTATION SUPPORT DEVICE',
    details: 'Design Number: 475702-001, 03/10/2025',
  },
  {
    id: 2,
    title: 'AN IMAGE PLAGIARISM DETECTION SYSTEM',
    details: 'Application Number: 202511114525 A, Publication Date: 09/01/2026',
  },
];

const Research = () => {
  const { data, loading } = useContent('research');

  if (loading) return <div className="text-center py-10">Loading...</div>;

  if (data?.content || data?.blocks?.length > 0) {
    return (
      <div className="border border-[#913c07] p-2 sm:p-4 md:p-6 bg-[#fff4dc]">
        <div className="cms-content">
          {data.content && (
            <div dangerouslySetInnerHTML={{ __html: data.content }} />
          )}
          {data.blocks?.map(block => (
            <div key={block.id} className="mt-6">
              {block.type === 'text' && <div dangerouslySetInnerHTML={{ __html: block.content }} />}
              {block.type === 'image' && block.url && (
                <img src={block.url} alt="Research Block" className="max-w-full h-auto rounded-lg shadow-md mx-auto" />
              )}
            </div>
          ))}

          <div className="mt-8 border-t border-[#913c07] pt-4">
            <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-[#913c07] mb-3">
              Patents
            </h3>
            <ul className="space-y-3 text-sm sm:text-base text-secondary">
              {patents.map((patent) => (
                <li key={patent.id} className="leading-relaxed">
                  <span className="font-semibold text-[#913c07]">Title:</span> {patent.title}
                  <br />
                  <span>{patent.details}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
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

      <div className="mt-8 border-t border-[#913c07] pt-4">
        <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-[#913c07] mb-3">
          Patents
        </h3>
        <ul className="space-y-3 text-sm sm:text-base text-secondary">
          {patents.map((patent) => (
            <li key={patent.id} className="leading-relaxed">
              <span className="font-semibold text-[#913c07]">Title:</span> {patent.title}
              <br />
              <span>{patent.details}</span>
            </li>
          ))}
        </ul>
      </div>

    </div>
  );
};

export default Research;




