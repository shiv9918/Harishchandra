import { CmsContent } from "../components/CmsContent";
import { useContent } from "../hooks/useContent";

const Awarded = () => {
  const { data, loading } = useContent('awarded');

  if (loading) return null;

  if (data?.content || data?.blocks?.length > 0) {
    return (
      <div className="p-3 sm:p-4 md:p-6 bg-[#fff4dc]">
        <CmsContent content={data.content} blocks={data.blocks} />
      </div>
    );
  }

  const phdAwarded = [
    {
      name: "Ms. Suchi Bhatt",
      regNo: "",
      title: "Study of Lie Properties of Group Algebras and their Unit Groups",
      date: "September 03, 2021"
    },
    {
      name: "Lacchita Soni",
      regNo: "2020088003",
      title: "Design of Secure Post-Quantum Cryptographic Schemes with Applications",
      date: "August 14, 2025"
    },
    {
      name: "Akanksha Singh",
      regNo: "2020088001",
      title: "Design and Analysis of Cryptographic Protocols from Classical to Post-Quantum Cryptography",
      date: "August 23, 2025"
    }
  ];

  const phdUndergoing = [
    { name: "Ms. Deeksha Upadhyay", year: "2021--" },
    { name: "Ms. Padmaja Tripathi", year: "2021--" },
    { name: "Ms. Sujata Singh", year: "2022--" },
    { name: "Mr. Mukul Bhatt", year: "2025--" }
  ];

  const mscAwarded = [
    {
      name: "Ms. Nikita Srivastava",
      rollNo: "",
      title: "Structure of Group Algebras of Units of Certain Finite Group Algebras"
    },
    {
      name: "Mr. Kuldeep Singh",
      rollNo: "",
      title: "Classification of Modular Group Algebras with small Lie Nilpotency Indices"
    },
    {
      name: "Mr. Divyanshu Srivastava",
      rollNo: "",
      title: "Unit Group Structure of commutative group algebras over finite fields"
    },
    {
      name: "Mr. Ashustosh Mishra",
      rollNo: "",
      title: "The strongly Upper Lie Nilpotency Indices of Modular Group Algebras"
    },
    {
      name: "Mr. Vikrant Rai",
      rollNo: "2020083007",
      title: "Cryptography using Generalized Hessenberg Matrices with Affine-Hill Cipher"
    },
    {
      name: "Ms. Jagriti Tripathi",
      rollNo: "2020083003",
      title: "A new Approach of Classical Hill Cipher in Public Key Cryptography by using orthogonal Matrix"
    },
    {
      name: "Mr. Abhishek Kumar",
      rollNo: "2021083001",
      title: "A new encryption scheme based on Legendre's transform"
    },
    {
      name: "Mr. Snagam Tripathi",
      rollNo: "2021083006",
      title: "Strong key generation through LU decomposition of complete graph matrix for secure encryption"
    },
    {
      name: "Arvind Kumar Patwa",
      rollNo: "2022083003",
      title: "A new Encryption Scheme based on Sawi-Elzaki Transform"
    },
    {
      name: "Disha",
      rollNo: "2022083004",
      title: "An Encryption and Decryption Technique using planer graph with self-invertible matrix"
    },
    {
      name: "Jyoti Panchal",
      rollNo: "2022083005",
      title: "A new public Key Cryptography using Generalized Fibonacci Matrices"
    },
    {
      name: "Md. Arif Alam",
      rollNo: "2022083006",
      title: "Data Encryption and Decryption using Elzaki transform"
    },
    {
      name: "Pragati Chaturvedi",
      rollNo: "2022083009",
      title: "A new Encryption Scheme based on Kamal and Mohand Transform using ASCII-value"
    },
    {
      name: "Ms. Kshama Yadav",
      rollNo: "2023113003",
      title: "On the Structure of the Unit Group of Some Finite Group Algebras and Their Normal Complements"
    },
    {
      name: "Sakshi Pathak",
      rollNo: "2023113005",
      title: "An Efficient ECC-Based Key Exchange Protocol for Secure Multi-User Communication"
    }
  ];

  return (
    <div className="p-3 sm:p-4 md:p-6 space-y-6 sm:space-y-8 bg-[#fff4dc]">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#913c07] mb-4 sm:mb-6">
        Research Supervision
      </h1>

      {/* PhD Awarded */}
      <div className="bg-[#fff4dc] rounded-lg border-2 border-[#913c07] shadow-sm overflow-hidden">
        <h2 className="text-xl sm:text-2xl font-bold text-[#913c07] px-3 sm:px-4 py-3 bg-gray-50">
          Ph.D. Awarded
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm sm:text-base">
            <thead>
              <tr className="bg-[#913c07]">
                <th className="px-3 sm:px-4 py-2 sm:py-3 text-left font-semibold text-white">S.No.</th>
                <th className="px-3 sm:px-4 py-2 sm:py-3 text-left font-semibold text-white">Name</th>
                <th className="px-3 sm:px-4 py-2 sm:py-3 text-left font-semibold text-white">Reg. No.</th>
                <th className="px-3 sm:px-4 py-2 sm:py-3 text-left font-semibold text-white">Thesis Title</th>
                <th className="px-3 sm:px-4 py-2 sm:py-3 text-left font-semibold text-white">Awarded Date</th>
              </tr>
            </thead>
            <tbody>
              {phdAwarded.map((student, index) => (
                <tr key={index} className="border-b border-secondary/20 hover:bg-bgColorDark">
                  <td className="px-3 sm:px-4 py-2 sm:py-3">{index + 1}</td>
                  <td className="px-3 sm:px-4 py-2 sm:py-3">{student.name}</td>
                  <td className="px-3 sm:px-4 py-2 sm:py-3">{student.regNo || '-'}</td>
                  <td className="px-3 sm:px-4 py-2 sm:py-3">{student.title}</td>
                  <td className="px-3 sm:px-4 py-2 sm:py-3">{student.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* PhD Undergoing */}
      <div className="bg-[#fff4dc] rounded-lg border-2 border-[#913c07] shadow-sm overflow-hidden">
        <h2 className="text-xl sm:text-2xl font-bold text-[#913c07] px-3 sm:px-4 py-3 bg-gray-50">
          Ph.D. Undergoing
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm sm:text-base">
            <thead>
              <tr className="bg-[#913c07]">
                <th className="px-3 sm:px-4 py-2 sm:py-3 text-left font-semibold text-white">S.No.</th>
                <th className="px-3 sm:px-4 py-2 sm:py-3 text-left font-semibold text-white">Name</th>
                <th className="px-3 sm:px-4 py-2 sm:py-3 text-left font-semibold text-white">Year</th>
              </tr>
            </thead>
            <tbody>
              {phdUndergoing.map((student, index) => (
                <tr key={index} className="border-b border-secondary/20 hover:bg-bgColorDark">
                  <td className="px-3 sm:px-4 py-2 sm:py-3">{index + 1}</td>
                  <td className="px-3 sm:px-4 py-2 sm:py-3">{student.name}</td>
                  <td className="px-3 sm:px-4 py-2 sm:py-3">{student.year}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* M.Sc. Dissertation Awarded */}
      <div className="bg-[#fff4dc] rounded-lg border-2 border-[#913c07] shadow-sm overflow-hidden">
        <h2 className="text-xl sm:text-2xl font-bold text-[#913c07] px-3 sm:px-4 py-3 bg-gray-50">
          M.Sc. Dissertation Awarded
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm sm:text-base">
            <thead>
              <tr className="bg-[#913c07]">
                <th className="px-3 sm:px-4 py-2 sm:py-3 text-left font-semibold text-white">S.No.</th>
                <th className="px-3 sm:px-4 py-2 sm:py-3 text-left font-semibold text-white">Name</th>
                <th className="px-3 sm:px-4 py-2 sm:py-3 text-left font-semibold text-white">Roll No.</th>
                <th className="px-3 sm:px-4 py-2 sm:py-3 text-left font-semibold text-white">Dissertation Title</th>
              </tr>
            </thead>
            <tbody>
              {mscAwarded.map((student, index) => (
                <tr key={index} className="border-b border-secondary/20 hover:bg-bgColorDark">
                  <td className="px-3 sm:px-4 py-2 sm:py-3">{index + 1}</td>
                  <td className="px-3 sm:px-4 py-2 sm:py-3">{student.name}</td>
                  <td className="px-3 sm:px-4 py-2 sm:py-3">{student.rollNo || '-'}</td>
                  <td className="px-3 sm:px-4 py-2 sm:py-3">{student.title}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Awarded;




