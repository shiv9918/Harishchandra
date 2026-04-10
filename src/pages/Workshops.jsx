import { CmsContent } from "../components/CmsContent";
import { useContent } from "../hooks/useContent";

const Workshops = () => {
  const { data, loading } = useContent('workshops');

  const workshops = [
    {
      title: "Mathematical Methods in Science and Technology (STCMMST-15)",
      date: "December 15-19, 2015",
      venue: "MMM University of Technology, Gorakhpur",
      type: "Deputy Coordinator"
    },
    {
      title: "Recent Trends in Mathematical Sciences (NCRTMS-16)",
      date: "April 12-13, 2016",
      venue: "Department of Applied Science, MMM University of Technology, Gorakhpur",
      type: "Organizing Secretary"
    },
    {
      title: "Application of Physical Sciences in Engineering and Technology (STCAPSET-16)",
      date: "July 2-8, 2016",
      venue: "Department of Applied Science, MMM University of Technology, Gorakhpur",
      type: "Deputy Coordinator"
    },
    {
      title: "Emerging trends in material sciences (STCETMS-17)",
      date: "March 23-29, 2017",
      venue: "Department of Applied Science, MMM University of Technology, Gorakhpur",
      type: "Deputy Coordinator"
    },
    {
      title: "Research Scholar Day (RSD-2017)",
      date: "December 12, 2017",
      venue: "Department of Applied Science, MMMUT Gorakhpur",
      type: "Convener"
    },
    {
      title: "Recent Advances in Pure and Applied Mathematics",
      date: "April 12-13, 2018",
      venue: "Department of Applied Science, MMM University of Technology, Gorakhpur",
      type: "Convener"
    },
    {
      title: "Research Scholar Day (RSD-2018)",
      date: "December 17, 2018",
      venue: "Department of Applied Science, MMMUT Gorakhpur",
      type: "Convener"
    },
    {
      title: "Smart Material, Devices and Sustainable Technologies (SMDST-19)",
      date: "March 15-16, 2019",
      venue: "Department of Applied Science, MMM University of Technology, Gorakhpur",
      type: "Organizing Secretary"
    },
    {
      title: "Recent Advances in Mathematics and Scientific Computing (RAMSC-19)",
      date: "April 5-6, 2019",
      venue: "Department of Applied Science, MMM University of Technology, Gorakhpur",
      type: "Coordinator"
    },
    {
      title: "Mathematical modelling and spread of COVID 19",
      date: "May 16, 2020",
      venue: "Department of Mathematics and Scientific Computing, MMM University of Technology, Gorakhpur",
      type: "Coordinator (Webinar)"
    },
    {
      title: "Mathematical Tools and Recent Advances in Mathematics (MTAM-2020)",
      date: "September 21-25, 2020",
      venue: "Department of Mathematics and Scientific Computing, MMM University of Technology, Gorakhpur",
      type: "Organizing Secretary"
    },
    {
      title: "Mathematical Tools and Recent Advances in Applied Mathematics (MTRAAM-2021) - Sponsored by AICTE ATAL",
      date: "August 16-20, 2021",
      venue: "Department of Mathematics and Scientific Computing, MMM University of Technology, Gorakhpur",
      type: "Coordinator"
    },
    {
      title: "4th International Conference on Frontiers in Industrial and Applied Mathematics (FIAM-2021)",
      date: "December 21-22, 2021",
      venue: "Department of Mathematics SLIET, Longowal",
      type: "Session Chair"
    },
    {
      title: "Recent Advances in Applied Mathematics using Mathematical Tools (RAAMMT-2022)",
      date: "December 14-18, 2022",
      venue: "Department of Mathematics and Scientific Computing MMMUT, Gorakhpur",
      type: "Convener"
    },
    {
      title: "Research Scholar Day",
      date: "March 14, 2024",
      venue: "Department of Mathematics and Scientific Computing, MMM University of Technology, Gorakhpur",
      type: "Convener"
    },
    {
      title: "Bhartiya Gyan Parampara ka Vikshit Bharat Mein Yogdan",
      date: "October 13, 2024",
      venue: "MMM University of Technology and Bhartiya Shikshan Mandal Goraksha Prant",
      type: "Organizing Secretary"
    },
    {
      title: "National Workshop on LaTeX and PSTricks",
      date: "November 22-26, 2010",
      venue: "Bhaskaracharya Pratishthana, Pune",
      type: "Attended"
    },
    {
      title: "National Workshop on Computer Algebra system (CAS)",
      date: "January 27-31, 2011",
      venue: "Bhaskaracharya Pratishthana, Pune",
      type: "Attended"
    },
    {
      title: "National Workshop on LaTeX and Scilab",
      date: "November 22-26, 2011",
      venue: "Department of Mathematics and Astronomy, University of Lucknow",
      type: "Attended & Presented Paper"
    },
    {
      title: "TEQIP-II Basic pedagogy training on objective and outcome based education system",
      date: "June 12-16, 2015",
      venue: "MMM University of Technology, Gorakhpur",
      type: "Attended"
    },
    {
      title: "National Workshop on LaTeX and Allied topics",
      date: "October 27 - November 2, 2015",
      venue: "Academic Staff College, University of Lucknow",
      type: "Attended"
    },
    {
      title: "Faculty Development for Improved Competencies on Entrepreneurship",
      date: "February 12-16, 2016",
      venue: "M.M.M. University of Technology, Gorakhpur",
      type: "Attended"
    },
    {
      title: "28 days orientation programme",
      date: "May 20 - June 16, 2017",
      venue: "Academic staff College, DDU University, Gorakhpur",
      type: "Attended"
    },
    {
      title: "Short Term Course on Research Methodology and Statistics",
      date: "October 24-30, 2018",
      venue: "Department of Applied Science, MMM University of Technology, Gorakhpur",
      type: "Attended"
    },
    {
      title: "National Workshop on LaTeX and Its Applications",
      date: "March 11-15, 2019",
      venue: "Department of Computer Science and Engineering, MMM University of Technology, Gorakhpur",
      type: "Attended"
    },
    {
      title: "ICT in Advance Teaching and Learning for Academicians: A Gateway to Excellence",
      date: "October 14-18, 2019",
      venue: "Electronics and ICT Academy, NIT Patna and Department of Humanities and Management Science, MMMUT Gorakhpur",
      type: "Attended"
    },
    {
      title: "Data Analytics and IOT",
      date: "November 4-8, 2019",
      venue: "Department of Computer Science and Engineering, MMMUT Gorakhpur",
      type: "Attended"
    },
    {
      title: "Introduction to Abstract and Linear Algebra (NPTEL)",
      date: "July - November 2019",
      venue: "8 week AICTE approved FDP through NPTEL",
      type: "Completed"
    },
    {
      title: "Modern Algebra (NPTEL)",
      date: "July - November 2019",
      venue: "8 week AICTE approved FDP through NPTEL",
      type: "Completed"
    },
    {
      title: "Research Methods and Data Analysis Using SPSS & AMOS",
      date: "January 27-31, 2020",
      venue: "Department of Humanities and Management Science, MMMUT Gorakhpur",
      type: "Attended"
    },
    {
      title: "Mathematical Methods and its Applications (NPTEL)",
      date: "January - April 2020",
      venue: "12 week AICTE approved FDP through NPTEL",
      type: "Passed"
    },
    {
      title: "Transform Calculus and its applications in Differential Equations (NPTEL)",
      date: "January - April 2020",
      venue: "12 week AICTE approved FDP through NPTEL",
      type: "Passed"
    },
    {
      title: "Curriculum design, Delivery and Assessment for Outcome based Education",
      date: "May 11-16, 2020",
      venue: "Internal Quality Assurance Cell (IQAC), M.M.M. University of Technology, Gorakhpur",
      type: "Attended"
    },
    {
      title: "Nascent Research Methods, Challenges and various Analytical Tools and Techniques",
      date: "June 24-29, 2020",
      venue: "Department of Humanities and Management Science, MMMUT, Gorakhpur (TEQIP III with SVNIT Surat)",
      type: "Attended"
    },
    {
      title: "Advanced Concepts for Developing MOOCS",
      date: "July 2-17, 2020",
      venue: "Teaching Learning Centre Ramanujan College, University of Delhi with MHRD",
      type: "Attended"
    },
    {
      title: "ARPIT course for CAS promotion on Pedagogical Innovations and Research Methodology",
      date: "December 1, 2020 - March 31, 2021",
      venue: "16-week course through Swayam",
      type: "Passed"
    },
    {
      title: "Online refresher course in Mathematics",
      date: "March 16-30, 2021",
      venue: "Department of Mathematics, Ramanujan College",
      type: "Attended"
    },
    {
      title: "Examination Reform",
      date: "March 26-30, 2022",
      venue: "AICTE, New Delhi and Madan Mohan Malaviya University of Technology, Gorakhpur",
      type: "Attended"
    },
    {
      title: "Online refresher course in Mathematics",
      date: "November 2-15, 2022",
      venue: "UGC-HRDC, University of Allahabad",
      type: "Attended (Grade A)"
    },
    {
      title: "Advance Statistical Data Analysis using SPSS",
      date: "January 21-27, 2023",
      venue: "Uttar Pradesh Medical University and Science Tech Institute, Lucknow",
      type: "Attended"
    },
    {
      title: "Outcome Based Education and Application of Generative AI in Teaching and Research",
      date: "April 17-24, 2024",
      venue: "IQAC of Gauhati University with ipsr solutions limited",
      type: "Attended (Grade A)"
    },
    {
      title: "Research Methodology",
      date: "March 17-22, 2025",
      venue: "UGC-MMTTC with Department of Statistics, Patna University, Patna",
      type: "Attended (Grade A)"
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
        Workshops & Events
      </h1>

      <div className="bg-[#fff4dc] rounded-lg border-2 border-[#913c07] shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-xs sm:text-sm md:text-base">
            <thead>
              <tr className="bg-[#913c07]">
                <th className="px-2 sm:px-3 md:px-4 py-2 sm:py-2.5 md:py-3 text-left font-semibold text-white whitespace-nowrap">S.No.</th>
                <th className="px-2 sm:px-3 md:px-4 py-2 sm:py-2.5 md:py-3 text-left font-semibold text-white">Title</th>
                <th className="px-2 sm:px-3 md:px-4 py-2 sm:py-2.5 md:py-3 text-left font-semibold text-white">Date</th>
                <th className="px-2 sm:px-3 md:px-4 py-2 sm:py-2.5 md:py-3 text-left font-semibold text-white">Venue</th>
                <th className="px-2 sm:px-3 md:px-4 py-2 sm:py-2.5 md:py-3 text-left font-semibold text-white">Type</th>
              </tr>
            </thead>
            <tbody>
              {workshops.length > 0 ? (
                workshops.map((workshop, index) => (
                  <tr key={index} className="border-b border-secondary/20 hover:bg-bgColorDark">
                    <td className="px-2 sm:px-3 md:px-4 py-2 sm:py-2.5 md:py-3 whitespace-nowrap">{index + 1}</td>
                    <td className="px-2 sm:px-3 md:px-4 py-2 sm:py-2.5 md:py-3">{workshop.title}</td>
                    <td className="px-2 sm:px-3 md:px-4 py-2 sm:py-2.5 md:py-3 whitespace-nowrap">{workshop.date}</td>
                    <td className="px-2 sm:px-3 md:px-4 py-2 sm:py-2.5 md:py-3">{workshop.venue}</td>
                    <td className="px-2 sm:px-3 md:px-4 py-2 sm:py-2.5 md:py-3">{workshop.type}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="5" className="px-3 sm:px-4 py-8 text-center text-secondary/70 font-primary">
                    No workshops or paper presentations added yet.
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

export default Workshops;




