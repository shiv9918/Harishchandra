import { useContent } from "../hooks/useContent";
import { CmsContent } from "../components/CmsContent";

const ExtraAcademicActivity = () => {
  const { data, loading } = useContent('extra-academic-activity');

  if (loading) return null;

  if (data?.content || data?.blocks?.length > 0) {
    return (
      <div className="p-2 sm:p-4 md:p-6 bg-[#fff4dc]">
        <CmsContent content={data.content} blocks={data.blocks} />
      </div>
    );
  }

  const activities = [
    {
      achievement: "Winning Member of Cricket team of VC XI Vs Student XI",
      event: "Cricket Match",
      year: "2016",
      position: "Winner"
    },
    {
      achievement: "400m faculty race",
      event: "Annual Sports MMMUT",
      year: "2017",
      position: "Winner"
    },
    {
      achievement: "Tug of war team of Faculty Vs Student",
      event: "Annual Sports MMMUT",
      year: "2017",
      position: "Winner"
    },
    {
      achievement: "Yoga practice on the occasion of International Yoga Day",
      event: "International Yoga Day",
      year: "June 21, 2017",
      position: "Second"
    },
    {
      achievement: "Faculty 200m Race",
      event: "Annual Sports meet, MMMUT",
      year: "2018",
      position: "Second"
    },
    {
      achievement: "Faculty 100m Race",
      event: "Annual Sports meet, MMMUT",
      year: "2018",
      position: "Third"
    },
    {
      achievement: "Tug of war team of Faculty Vs Student",
      event: "Annual Sports MMMUT",
      year: "2018",
      position: "Winner"
    },
    {
      achievement: "Faculty 400m Race",
      event: "Annual Sports meet, MMMUT",
      year: "2019",
      position: "First"
    },
    {
      achievement: "Faculty 200m Race",
      event: "Annual Sports meet, MMMUT",
      year: "2019",
      position: "Third"
    },
    {
      achievement: "Tug of War Team of Faculty vs Faculty",
      event: "Annual Sports meet, MMMUT",
      year: "2019",
      position: "Runner Up"
    },
    {
      achievement: "200m faculty race",
      event: "Annual Sports Meet AYAAS-2020, MMMUT",
      year: "2020",
      position: "Winner"
    },
    {
      achievement: "400m faculty race",
      event: "Annual Sports Meet AYAAS-2020, MMMUT",
      year: "2020",
      position: "Winner"
    },
    {
      achievement: "Tug of War Team of Faculty",
      event: "AYAS-2020 MMMUT",
      year: "2020",
      position: "Winner"
    },
    {
      achievement: "Faculty 100m Race",
      event: "Annual Sports Meet (AYAAS-2025), MMMUT",
      year: "2025",
      position: "Third"
    },
    {
      achievement: "Tug of War Team of Faculty vs Staff",
      event: "Annual Sports Meet (AYAAS-2025), MMMUT",
      year: "2025",
      position: "Runner Up"
    }
  ];

  return (
    <div className="p-2 sm:p-4 md:p-6 bg-[#fff4dc]">
      <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-[#913c07] mb-3 sm:mb-4 md:mb-6">
        Extra Academic Activities
      </h1>

      <div className="bg-[#fff4dc] rounded-lg shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-xs sm:text-sm md:text-base">
            <thead>
              <tr className="bg-[#913c07]">
                <th className="px-3 sm:px-4 py-2 sm:py-3 text-left font-semibold text-white">S.No.</th>
                <th className="px-3 sm:px-4 py-2 sm:py-3 text-left font-semibold text-white">Achievement</th>
                <th className="px-3 sm:px-4 py-2 sm:py-3 text-left font-semibold text-white">Event</th>
                <th className="px-3 sm:px-4 py-2 sm:py-3 text-left font-semibold text-white">Year</th>
                <th className="px-3 sm:px-4 py-2 sm:py-3 text-left font-semibold text-white">Position</th>
              </tr>
            </thead>
            <tbody>
              {activities.map((activity, index) => (
                <tr key={index} className="border-b border-secondary/20 hover:bg-bgColorDark">
                  <td className="px-3 sm:px-4 py-2 sm:py-3">{index + 1}</td>
                  <td className="px-3 sm:px-4 py-2 sm:py-3">{activity.achievement}</td>
                  <td className="px-3 sm:px-4 py-2 sm:py-3">{activity.event}</td>
                  <td className="px-3 sm:px-4 py-2 sm:py-3">{activity.year}</td>
                  <td className="px-3 sm:px-4 py-2 sm:py-3">{activity.position}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ExtraAcademicActivity;





