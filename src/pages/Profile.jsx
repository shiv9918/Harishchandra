
import { CmsContent } from "../components/CmsContent";
import { useContent } from '../hooks/useContent';

const Profile = () => {
  const { data, loading } = useContent('profile');

  if (loading) {
    return <div className="text-center py-10">Loading...</div>;
  }

  if (data?.content || data?.blocks?.length > 0) {
    return (
      <div className="w-full border border-[#913c07] p-2 sm:p-4 md:p-6 bg-[#fff4dc]">
        <CmsContent content={data.content} blocks={data.blocks} />
      </div>
    );
  }

  return (
    <div className="w-full border border-[#913c07] p-2 sm:p-4 md:p-6 bg-[#fff4dc]">

      {/* Academic Background */}
      <section>
        <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-[#913c07]">
          Academic Background
        </h2>
        <hr className="my-2 sm:my-3 border-[#913c07]" />

        <div className="overflow-x-auto -mx-2 sm:mx-0">
          <table className="w-full border-collapse text-secondary font-primary text-xs sm:text-sm md:text-base">
            <thead>
              <tr className="text-left font-semibold border-b border-[#913c07] text-[#913c07]">
                <th className="py-2 px-1 sm:px-2">Degree</th>
                <th className="py-2 px-1 sm:px-2">Institute of Study</th>
                <th className="py-2 px-1 sm:px-2">Year</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Ph.D. (Mathematics)", "University of Lucknow", "2013"],
                ["UGC–JRF (NET) Qualified", "UGC", "2007"],
                ["M.Sc.", "University of Lucknow", "2007"],
                ["RBS–M MATE Fellowship", "RBS Foundation", "2006"],
                ["B.Sc.", "University of Lucknow", "2005"],
                ["Intermediate", "U.P. Board", "2002"],
                ["High School", "U.P. Board", "2000"],
              ].map((row, i) => (
                <tr key={i} className="border-t border-[#913c07]">
                  <td className="py-2 sm:py-3 px-1 sm:px-2">{row[0]}</td>
                  <td className="py-2 sm:py-3 px-1 sm:px-2">{row[1]}</td>
                  <td className="py-2 sm:py-3 px-1 sm:px-2">{row[2]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Work Experience */}
      <section className="mt-6 sm:mt-8 md:mt-10">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-[#913c07]">
          Work Experience
        </h2>
        <hr className="my-2 sm:my-3 border-[#913c07]" />

        <div className="overflow-x-auto -mx-2 sm:mx-0">
          <table className="w-full border-collapse text-secondary font-primary text-xs sm:text-sm md:text-base">
            <thead>
              <tr className="text-left font-semibold border-b border-[#913c07] text-[#913c07]">
                <th className="py-2 w-1/2">Position</th>
                <th className="py-2">Area</th>
              </tr>
            </thead>

            <tbody>
              {[
                ["Contractual Faculty", "Lucknow University (2007 – 2008)"],
                ["Guest Faculty (Under UGC Norms)", "Lucknow University (2008 – 2011)"],
                ["Senior Research Fellow", "BBD University, Lucknow (2012 – 2014)"],
                ["Assistant Professor", "Rajkiya PG College, Uttarkashi, Uttarakhand (2014 – 2015)"],
                ["Assistant Professor, Dept. of Mathematics and Scientific Computing", "MMMUT, Gorakhpur (2015 – Present)"],
                ["Officer In Charge, Lawn Tennis", "MMMUT, Gorakhpur (2015 – 2017)"],
                ["Member, Library Affairs Committee", "MMMUT, Gorakhpur (2015)"],
                ["Deputy Officer-in-Charge, Timetable", "MMMUT, Gorakhpur (2015 – 2021)"],
                ["Assistant Centre Superintendent (Examinations)", "MMMUT, Gorakhpur (2016)"],
                ["Officer In Charge, Guest House", "MMMUT, Gorakhpur (2017)"],
                ["Joint Controller of Examination", "MMMUT, Gorakhpur (2017)"],
                ["Member, Steering Committee", "MMMUT, Gorakhpur (2017 – 2018)"],
                ["Warden, Tilak Hostel", "MMMUT, Gorakhpur (2017 – 2018)"],
                ["Member, Cultural Society", "MMMUT, Gorakhpur (2017 – 2020)"],
                ["Warden, Sarojini Hostel", "MMMUT, Gorakhpur (2017 – 2020)"],
                ["Member, Women’s Grievance Redressal Cell", "MMMUT, Gorakhpur (2017 – 2021)"],
                ["Member, ITRC Management Committee", "MMMUT, Gorakhpur (2017)"],
                ["Officer In Charge, Horticulture", "MMMUT, Gorakhpur (2020)"],
                ["Member Secretary, Campus Development Cell (CDC)", "MMMUT, Gorakhpur (2020)"],
                ["Officer In Charge, Cultural Sub-Council", "MMMUT, Gorakhpur (2020)"],
                ["Officer In Charge, Badminton", "MMMUT, Gorakhpur (2020)"],
                ["Warden, Tagore Hostel", "MMMUT, Gorakhpur (2020)"],
                ["Member, EDP Cell", "MMMUT, Gorakhpur (2021)"],
              ].map((row, i) => (
                <tr key={i} className="border-t border-[#913c07]">
                  <td className="py-4 pr-8">{row[0]}</td>
                  <td className="py-4">{row[1]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};

export default Profile;



