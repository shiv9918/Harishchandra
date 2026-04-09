import { useContent } from "../hooks/useContent";

const Talks = () => {
  const { data, loading } = useContent('talks');

  if (loading) return null;

  if (data?.content || data?.blocks?.length > 0) {
    return (
      <div className="p-2 sm:p-4 md:p-6 bg-[#fff4dc]">
        <div className="cms-content">
          {data.content && (
            <div dangerouslySetInnerHTML={{ __html: data.content }} />
          )}
          {data.blocks?.map(block => (
            <div key={block.id} className="mt-6">
              {block.type === 'text' && <div dangerouslySetInnerHTML={{ __html: block.content }} />}
              {block.type === 'image' && block.url && (
                <img src={block.url} alt="Talk Block" className="max-w-full h-auto rounded-lg shadow-md mx-auto" />
              )}
            </div>
          ))}
        </div>
      </div>
    );
  }

  const talks = [
    {
      title: "A study of Lie solvable group algebras of derived length three",
      date: "August 18-19, 2012",
      venue: "National Conference on Algebra Analysis and Their Applications, Gov. MAM College Jammu",
      audience: "Conference Participants"
    },
    {
      title: "Invited talk on LaTeX",
      date: "February 28, 2014",
      venue: "Refresher Course in Math's, Statistics, Computer Science & Astronomy (February 14 – March 07, 2014), HRD Center Lucknow University, Lucknow",
      audience: "Refresher Course Participants"
    },
    {
      title: "Invited Talk on LaTeX",
      date: "March 3, 2014",
      venue: "Refresher Course in Math's, Statistics, Computer Science & Astronomy (February 14 – March 07, 2014), HRD Center Lucknow University, Lucknow",
      audience: "Refresher Course Participants"
    },
    {
      title: "Study of Nilpotency class of group Algebras",
      date: "February 18-19, 2016",
      venue: "National Conference on Topological Algebra & Analysis, Deptt. of Mathematics, Gov. Gandhi Memorial Science College Jammu",
      audience: "Conference Participants"
    },
    {
      title: "LaTeX and Type setting",
      date: "October 24-30, 2018",
      venue: "One-week Short Term Course on Research Methodology and Statistics, Department of Applied Science, MMM University of Technology, Gorakhpur",
      audience: "Faculty & Researchers"
    },
    {
      title: "LaTeX Typesetting",
      date: "January 14, 2019",
      venue: "Refresher Course on Maths, Statistics, Computer Science & Astronomy (January 2 – January 23, 2019), HRD Center Lucknow University, Lucknow",
      audience: "Refresher Course Participants"
    },
    {
      title: "Presentation with LaTeX",
      date: "January 22, 2019",
      venue: "Refresher Course on Maths, Statistics, Computer Science & Astronomy (January 2 – January 23, 2019), HRD Center Lucknow University, Lucknow",
      audience: "Refresher Course Participants"
    },
    {
      title: "Modular Group Algebras with Lie Nilpotency Indices",
      date: "February 21-22, 2019",
      venue: "National conference on Recent Trends in Mathematics and Applications, Faculty of Mathematical and Statistical Sciences, SRMU, Lucknow",
      audience: "Conference Participants"
    },
    {
      title: "Linear Algebra and Matrix Theory",
      date: "September 30, 2019",
      venue: "DVNPG College, Gorakhpur",
      audience: "Students & Faculty"
    },
    {
      title: "A note on the structure of unit groups of certain group algebras",
      date: "January 30-31, 2020",
      venue: "2nd National conference on Recent Trends in Mathematics and Applications, Faculty of Mathematical and Statistical Sciences, SRMU, Lucknow",
      audience: "Conference Participants"
    },
    {
      title: "Typesetting with LaTeX",
      date: "February 29, 2020",
      venue: "Refresher Course on Mathematics, Statistics, Computer Science & Astronomy (MD) (February 17 – February 29, 2020), HRD Center Lucknow University, Lucknow",
      audience: "Refresher Course Participants"
    },
    {
      title: "LaTeX: A Document Preparation and Typesetting System",
      date: "November 25, 2020",
      venue: "Guru Dakshta (Faculty Induction Programme), HRD Center Lucknow University, Lucknow",
      audience: "New Faculty Members"
    },
    {
      title: "An Introduction to SciLab",
      date: "July 8, 2021",
      venue: "Seven Days Online Workshop on Research Methodology in Mathematical Sciences (July 4-10, 2021), Department of Mathematics and Statistics, DDU Gorakhpur University",
      audience: "Workshop Participants (Online)"
    },
    {
      title: "Documentation with LaTeX",
      date: "August 16-20, 2021",
      venue: "One-week online Faculty development programme on Mathematical Tools and Recent Advances in Applied Mathematics (MTRAAM-2021), Department of Mathematics and Scientific Computing, MMM University of Technology, Gorakhpur",
      audience: "Faculty Members (Online)"
    },
    {
      title: "LaTeX: Scientific Document Preparation System",
      date: "March 27, 2022",
      venue: "One week workshop on Scientific Computing in Mathematical Sciences (March 23-28, 2022), Department of Mathematics and Statistics, DDU Gorakhpur University, Gorakhpur, UP INDIA",
      audience: "Workshop Participants"
    },
    {
      title: "LaTeX: Scientific Document Preparation System",
      date: "March 27, 2022",
      venue: "One week workshop on Scientific Computing in Mathematical Sciences (March 23-28, 2022), Department of Mathematics and Statistics, DDU Gorakhpur University, Gorakhpur, UP INDIA",
      audience: "Workshop Participants"
    },
    {
      title: "Scientific Typesetting",
      date: "December 8, 2022",
      venue: "One week ACITE-MMMUT MoU Activities Faculty Development Programme on Modern Research Methods and Analytical Tools (MRMAT-2022) (December 05-09, 2022), Department of Humanities and Management Science, MMMUT, Gorakhpur",
      audience: "Faculty Members"
    },
    {
      title: "Creating a Presentation with LaTeX",
      date: "December 14, 2022",
      venue: "One week ACITE-MMMUT MoU Activities Faculty Development Programme on Recent Advances in Applied Mathematics using Mathematical Tools (RAAMMT-2022) (December 14-18, 2022), Department of Mathematics and Scientific Computing, MMMUT, Gorakhpur",
      audience: "Faculty Members"
    },
    {
      title: "Turnitin's Software for new faculty members",
      date: "April 22, 2025",
      venue: "Two weeks Faculty Induction Programme (April 7-27, 2025), Madan Mohan Malaviya University of Technology, Gorakhpur, UP, India",
      audience: "New Faculty Members"
    },
    {
      title: "Security protocol for new faculty members",
      date: "April 17, 2025",
      venue: "Two weeks Faculty Induction Programme (April 7-27, 2025), Madan Mohan Malaviya University of Technology, Gorakhpur, UP, India",
      audience: "New Faculty Members"
    }
  ];

  return (
    <div className="p-2 sm:p-4 md:p-6 bg-[#fff4dc]">
      <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-[#913c07] mb-3 sm:mb-4 md:mb-6">
        Talks Delivered
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
                <th className="px-2 sm:px-3 md:px-4 py-2 sm:py-2.5 md:py-3 text-left font-semibold text-white">Audience</th>
              </tr>
            </thead>
            <tbody>
              {talks.length > 0 ? (
                talks.map((talk, index) => (
                  <tr key={index} className="border-b border-secondary/20 hover:bg-bgColorDark">
                    <td className="px-2 sm:px-3 md:px-4 py-2 sm:py-2.5 md:py-3 whitespace-nowrap">{index + 1}</td>
                    <td className="px-2 sm:px-3 md:px-4 py-2 sm:py-2.5 md:py-3">{talk.title}</td>
                    <td className="px-2 sm:px-3 md:px-4 py-2 sm:py-2.5 md:py-3 whitespace-nowrap">{talk.date}</td>
                    <td className="px-2 sm:px-3 md:px-4 py-2 sm:py-2.5 md:py-3">{talk.venue}</td>
                    <td className="px-2 sm:px-3 md:px-4 py-2 sm:py-2.5 md:py-3">{talk.audience}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="5" className="px-3 sm:px-4 py-8 text-center text-secondary/70 font-primary">
                    No talk records added yet.
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

export default Talks;




