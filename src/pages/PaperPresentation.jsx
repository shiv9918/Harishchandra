import { CmsContent } from "../components/CmsContent";
import { useContent } from "../hooks/useContent";

const PaperPresentation = () => {
  const { data, loading } = useContent('paper-presentation');

  const presentations = [
    {
      title: "The History of Algebraic Geometry",
      date: "January 15-16, 2008",
      venue: "3rd National Symposium in Modern Trends in Differential Geometry and Mathematical Modelling in Bio-Sciences, Department of Mathematics and Astronomy, University of Lucknow",
      status: "Presented"
    },
    {
      title: "The Study of Derived Length and Nilpotency of Group Algebras",
      date: "December 22-23, 2008",
      venue: "National Conference on Mathematics, Department of Mathematics and Astronomy, University of Lucknow",
      status: "Presented"
    },
    {
      title: "LaTeX and its Application",
      date: "November 22-26, 2011",
      venue: "Workshop on LaTeX and SciLab, Department of Mathematics and Astronomy, University of Lucknow",
      status: "Presented"
    },
    {
      title: "Group algebras with unit groups of derived length three",
      date: "February 2-4, 2012",
      venue: "National Conference on Recent Advances in Mathematics NCRAM-2012, University of Lucknow",
      status: "Presented"
    },
    {
      title: "A note on unit group algebras of derived length three in characteristic three",
      date: "March 24, 2013",
      venue: "National Conference on Mathematics, Lucknow University",
      status: "Presented"
    },
    {
      title: "Strongly Lie nilpotent group algebras of class at most",
      date: "August 24, 2013",
      venue: "Seminar on the frontier area of Mathematics, Lucknow University",
      status: "Presented"
    },
    {
      title: "Study of Unit Group Algebras of Derived Length 3",
      date: "July 10-12, 2015",
      venue: "International conference in recent trends in Mathematics, University of Allahabad",
      status: "Presented"
    },
    {
      title: "Study of the derived length of group algebras",
      date: "November 1, 2015",
      venue: "One-day symposium on LaTeX and Allied Topics, HRD Center Lucknow University",
      status: "Presented"
    },
    {
      title: "Recent results related to the derived length of unit group algebras",
      date: "November 18-19, 2017",
      venue: "National Conference on Mathematical Analysis and Applications, Department of Mathematics and Astronomy, Lucknow University",
      status: "Presented"
    },
    {
      title: "Lie Nilpotent Group Algebras of index 14",
      date: "April 13-15, 2018",
      venue: "International Conference on Emerging Trends in Physical Sciences, Department of Mathematics, RML Awadh University, Faizabad",
      status: "Presented"
    },
    {
      title: "Recent Results in Nilpotent Group Algebras",
      date: "August 9-11, 2018",
      venue: "International Conference on Algebra and Applied Analysis (ICAAA-2018), Integral University, Lucknow",
      status: "Presented"
    },
    {
      title: "A Note on Group Algebras of small Nilpotency Indices",
      date: "November 10-11, 2018",
      venue: "National Conference on Recent Trends in Mathematics, Department of Mathematics and Astronomy, Lucknow University",
      status: "Presented"
    },
    {
      title: "A Note on the derived length of solvable group Algebras",
      date: "November 23-25, 2018",
      venue: "International Conference on Algebra and Continuum Mechanics, Department of Mathematics and Statistics, Himachal Pradesh University, Shimla",
      status: "Presented"
    },
    {
      title: "Unit groups of group algebras of Abelian Groups of small order",
      date: "October 8-12, 2021",
      venue: "Second International Workshop on Advanced Topics in Mathematics-2021, Centre for Applied Mathematics, International Institute of Information Technology Naya Raipur",
      status: "Presented"
    },
    {
      title: "Groups of Units of Certain Finite Group Algebras",
      date: "December 21-22, 2021",
      venue: "4th International Conference on Frontiers in Industrial and Applied Mathematics (FIAM-2021), Department of Mathematics SLIET, Longowal",
      status: "Presented"
    },
    {
      title: "On the unit group of certain finite group algebras",
      date: "July 19-21, 2022",
      venue: "SXC Centenary Year- International Conference on Recent Developments in Pure and Applied Mathematics, PG and Research Department of Mathematics, St. Xavier's College, Palayamkottai, Tirunelveli",
      status: "Presented"
    },
    {
      title: "AN EFFICIENT UNDENIABLE SIGNATURE SCHEME BASED ON RING LEARNING WITH ERROR",
      date: "February 27-28, 2024",
      venue: "International Conference on Recent Trends in Data Science (ICRTDS@2024), Department of Data Science and Mathematics, St. Xavier's College (Autonomous), Palayamkottai, Tamilnadu",
      status: "Presented"
    },
    {
      title: "Cryptography Based oN Elzaki-Sawi Transform",
      date: "October 25-26, 2024",
      venue: "International Conference on Applications of Mathematics in Data Science (ICAMD 2024), Department of Data Science, St. Xavier's College (Autonomous), Palayamkottai, Tamilnadu",
      status: "Presented"
    },
    {
      title: "A LIGHTWEIGHT IDENTITY-BASED ENCRYPTION WITH EQUALITY TEST FOR CLOUD SERVICE",
      date: "October 25-26, 2024",
      venue: "International Conference on Recent Trends in Data Science (ICRTDS 2024), Department of Data Science, St. Xavier's College (Autonomous), Palayamkottai, Tamilnadu",
      status: "Presented"
    },
    {
      title: "On the structure of unit groups of the group algebra of non-abelian groups of order 36",
      date: "November 20-22, 2024",
      venue: "2nd International Conference on Evolution in Pure & Applied Mathematics (ICEPAM-2024), Department of Mathematics, Akal University, Talwandi Sabo, Bathinda, Punjab",
      status: "Presented"
    },
    {
      title: "An Efficient ECC-Based Key Exchange Protocol for Secure Multi-User Communication (by Sakshi Pathak, Harish Chandra, and Lacchita Soni)",
      date: "May 10-11, 2025",
      venue: "3rd International Conference on Recent Trends in Mathematical Sciences (ICRTMS-2025), Himachal Ganita Parishad (HGP), Himachal Pradesh University, Shimla",
      status: "Presented"
    },
    {
      title: "ON THE STRUCTURE OF UNIT GROUP OF SOME FINITE GROUP ALGEBRA AND THEIR NORMAL COMPLEMENT (by Kshama Yadav, Harish Chandra, and Diksha Upadhyay)",
      date: "May 10-11, 2025",
      venue: "3rd International Conference on Recent Trends in Mathematical Sciences (ICRTMS-2025), Himachal Ganita Parishad (HGP), Himachal Pradesh University, Shimla",
      status: "Presented"
    },
    {
      title: "Public Key Encryption and Signature Schemes with Smaller Key Size",
      date: "December 26-29, 2025",
      venue: "91st Annual Conference of the Indian Mathematical Society - An International Meet, University of Lucknow",
      status: "Presented"
    }
  ];

  if (loading) return null;

  if (data?.content || data?.blocks?.length > 0) {
    return (
      <div className="border border-[#913c07] p-2 sm:p-4 md:p-6 bg-[#fff4dc]">
        <CmsContent content={data.content} blocks={data.blocks} />
      </div>
    );
  }

  return (
    <div className="p-2 sm:p-4 md:p-6 bg-[#fff4dc]">
      <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-[#913c07] mb-3 sm:mb-4 md:mb-6">
        Paper Presentations
      </h1>

      <div className="bg-[#fff4dc] rounded-lg border-2 border-[#913c07] shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-xs sm:text-sm md:text-base">
            <thead>
              <tr className="bg-[#913c07]">
                <th className="px-2 sm:px-3 md:px-4 py-2 sm:py-2.5 md:py-3 text-left font-semibold text-white whitespace-nowrap">S.No.</th>
                <th className="px-2 sm:px-3 md:px-4 py-2 sm:py-2.5 md:py-3 text-left font-semibold text-white">Paper Title</th>
                <th className="px-2 sm:px-3 md:px-4 py-2 sm:py-2.5 md:py-3 text-left font-semibold text-white">Date</th>
                <th className="px-2 sm:px-3 md:px-4 py-2 sm:py-2.5 md:py-3 text-left font-semibold text-white">Venue</th>
                <th className="px-2 sm:px-3 md:px-4 py-2 sm:py-2.5 md:py-3 text-left font-semibold text-white">Status</th>
              </tr>
            </thead>
            <tbody>
              {presentations.length > 0 ? (
                presentations.map((presentation, index) => (
                  <tr key={index} className="border-b border-secondary/20 hover:bg-bgColorDark">
                    <td className="px-3 sm:px-4 py-2 sm:py-3">{index + 1}</td>
                    <td className="px-3 sm:px-4 py-2 sm:py-3">{presentation.title}</td>
                    <td className="px-3 sm:px-4 py-2 sm:py-3">{presentation.date}</td>
                    <td className="px-3 sm:px-4 py-2 sm:py-3">{presentation.venue}</td>
                    <td className="px-3 sm:px-4 py-2 sm:py-3">{presentation.status}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="5" className="px-3 sm:px-4 py-8 text-center text-secondary/70 font-primary">
                    No paper presentations added yet.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default PaperPresentation;




