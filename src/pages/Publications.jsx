import { ExternalLink } from "lucide-react";
import { useContent } from "../hooks/useContent";

const Publications = () => {
  const { data, loading } = useContent('publications');

  const publications = [
    {
      id: 1,
      year: 2010,
      title: "Chandra, H. and Sahai, M. Group algebras with unit groups of derived length three, J. Algebra Appl. 9 (2) (2010), 305-314 (Q2, SCI, IF: 0.76). (ISSN No. 02194988)",
      link: "https://doi.org/10.1142/S0219498810003938",
    },
    {
      id: 2,
      year: 2012,
      title: "Chandra, H. and Sahai, M. Lie solvable group algebras of derived length three in characteristic three, J. Algebra Appl. 11 (5) (2012), 1250098 (12 pages) (Q2, SCI, IF: 0.76). (ISSN No. 02194988)",
      link: "https://doi.org/10.1142/S0219498812500983",
    },
    {
      id: 3,
      year: 2013,
      title: "Chandra, H. and Sahai, M. On group algebras with unit groups of derived length three in characteristic three, Publ. Math. Debrecen, 82 (3-4) (2013). (Q3, SCI, IF: 0.69) (ISSN No. 00333883)",
      link: "https://doi.org/10.5486/PMD.2013.5461",
    },
    {
      id: 4,
      year: 2014,
      title: "Chandra, H. and Sahai, M. Strongly Lie Nilpotent Group Algebras of Class at most 7, J. Algebra Appl. 13 (7) (2014), 1450044 [9 pages]. (Q2, SCI, IF: 0.76) (ISSN No. 02194988)",
      link: "https://doi.org/10.1142/S0219498814500443",
    },
    {
      id: 5,
      year: 2016,
      title: "Bhatt, B., Prasad, L., Chandra, H. et al. Solar flares associated coronal mass ejections in case of type II radio bursts, Astrophys Space Sci (2016) 361:265. (Q3, SCI, IF: 1.8) (ISSN No. 0004640X)",
      link: "https://doi.org/10.1007/s10509-016-2857-2",
    },
    {
      id: 6,
      year: 2017,
      title: "Beena Bhatt, Harish Chandra, Solar flare associated coronal mass ejections causing geo-effectiveness and Forbush decreases, Astrophys Space Sci (2017) 362:41. (Q3, SCI, IF: 1.8) (ISSN No. 0004640X)",
      link: "https://doi.org/10.1007/s10509-017-3024-0",
    },
    {
      id: 7,
      year: 2017,
      title: "Verma A., Chandra H., Generalization of Mittag-Leffler Function and Its Properties, GANITA, 67(1), 2017, 79-88. (UGC Care) (ISSN No. 0046-5402)",
    },
    {
      id: 8,
      year: 2018,
      title: "Harish Chandra, Beena Bhatt, Solar flares associated coronal mass ejection accompanied with DH type II radio burst in relation with interplanetary magnetic field, geomagnetic storms and cosmic ray intensity, New Astronomy, 60, 2018, 22-32. (Q2, SCI, IF: 2.1). (ISSN No. 13841092)",
      link: "https://doi.org/10.1016/j.newast.2017.10.001",
    },
    {
      id: 9,
      year: 2020,
      title: "Suchi Bhatt, Harish Chandra and Meena Sahai, Group algebras of Lie nilpotency index 14, Asian-European Journal of Mathematics, 13(05), 2050088 (2020). (Q3, Scopus, ESCI, IF: 0.5) (ISSN No. 17937183)",
      link: "https://doi.org/10.1142/S1793557120500886",
    },
    {
      id: 10,
      year: 2020,
      title: "Beena Bhatt and Harish Chandra, Relationship Between Rising Phase of Solar Cycle 23rd and 24th with Respect to Geoeffectiveness, Adv. Sci. Eng. Med. 12, 70-74 (2020). (ISSN No. 2164-6627)",
      link: "https://doi.org/10.1166/asem.2020.2518",
    },
    {
      id: 11,
      year: 2020,
      title: "Suchi Bhatt and Harish Chandra, Modular Group Algebras with Small Upper Lie Nilpotency Index, Adv. Sci. Eng. Med. 12, 108-111 (2020). (ISSN No. 2164-6627)",
      link: "https://doi.org/10.1166/asem.2020.2517",
    },
    {
      id: 12,
      year: 2021,
      title: "Suchi Bhatt and Harish Chandra, Structure of Unit Group of F_q D_(60), Asian-European Journal of Mathematics, 14(05), 2150075 (2021). (Q3, Scopus, ESCI, IF: 0.5) (ISSN No. 17937183)",
      link: "https://doi.org/10.1142/S1793557121500753",
    },
    {
      id: 13,
      year: 2021,
      title: "Suchi Bhatt and Harish Chandra, Unit Groups of group algebras of abelian groups of order 32, Proyecciones (Antofagasta) 40(5):1341-1356 (2021). (Q3, Scopus) (ISSN No. 07160917)",
      link: "https://doi.org/10.22199/issn.0717-6279-4374",
    },
    {
      id: 14,
      year: 2022,
      title: "Suchi Bhatt and Harish Chandra, A Note on Modular Group Algebras with Upper Lie Nilpotency Indices, Algebra and Discrete Mathematics, 33(02), 2022, 1-20. (Q3, Scopus, ESCI, IF: 0.3). (ISSN No. 17263255)",
      link: "https://admjournal.luguniv.edu.ua/index.php/adm/article/view/1694",
    },
    {
      id: 15,
      year: 2022,
      title: "Harish Chandra and Shivangani Mishra, The Group of Units of Group Algebras of Abelian Groups of Order 36 and C3 x A4 over any finite field, International Electronic Journal of Algebra, 32, 2022, 176-191. (Q3, Scopus, ESCI, IF: 0.3). (ISSN No. 1306-6048)",
      link: "https://doi.org/10.24330/ieja.1077623",
    },
    {
      id: 16,
      year: 2022,
      title: "Nikita Srivastava, Harish Chandra and Suchi Bhatt, The Structure of The Unit Group of A Group Algebra of A Group of Order 37, South East Asian Journal of Mathematics and Mathematical Sciences, 18(1), 85-96, 2022 (Q4, Scopus). (ISSN No. 09727752)",
    },
    {
      id: 17,
      year: 2022,
      title: "Suchi Bhatt and Harish Chandra, Unit groups of group algebras on certain Quasidihedral groups, Surveys in Mathematics and its Application, 17 (2022), 357-366. (Q3, Scopus). (ISSN No. 18437265)",
    },
    {
      id: 18,
      year: 2022,
      title: "Beena Bhatt and Harish Chandra, 23rd Solar Cycle: Solar Activity Parameters and Associated Forbush Decreases, Advances in Space Research (Q1, SCI, IF: 2.8) (ISSN No. 02731137)",
      link: "https://doi.org/10.1016/j.asr.2022.10.046",
    },
    {
      id: 19,
      year: 2022,
      title: "Harish Chandra and Beena Bhatt, A comparison of Solar Cycle 23rd and 24th for Solar type II radio bursts associated with Coronal Mass Ejection in relation to interplanetary Features, Astrophysics and Space Science, 367, 128 (2022). (Q3, SCI, IF: 1.8) (ISSN No. 0004640X)",
      link: "https://doi.org/10.1007/s10509-022-04156-0",
    },
    {
      id: 20,
      year: 2023,
      title: "Lachhita Soni, Harish Chandra, Daya Sagar Gupta and Ram Keval, Quantum-Resistant Public-key Encryption and Signature Schemes with Smaller Key Sizes, Cluster Computing (Q1, SCI, IF: 2.3). (ISSN No. 13867857)",
      link: "https://doi.org/10.1007/s10586-022-03955-y",
    },
    {
      id: 21,
      year: 2023,
      title: "Suchi Bhatt and Harish Chandra, On the Unit Group of Certain finite group algebras, Mapana - Journal of Sciences 2023, Vol. 22, Special Issue 1, 89-99 (UGC-Care). (ISSN No. 09753303)",
      link: "https://doi.org/10.12723/mjs.sp1.8",
    },
    {
      id: 22,
      year: 2023,
      title: "Harish Chandra, Kuldeep Singh, Suchi Bhatt, Modular Group Algebra with upper Lie Nilpotency Index 11p-9, Algebraic Structures and Their Applications, Vol. 11 No. 2 (2024), pp. 115-130. (Q3, SCImago, Scopus). (ISSN No. 24233447)",
      link: "https://doi.org/10.22034/AS.2023.17039.1440",
    },
    {
      id: 23,
      year: 2023,
      title: "Gupta, D.S., Soni, L., Chandra, H. (2023). Quantum-defended Digital Signature on Lattice for IoT-enabled Systems. In: Internet of Things (IoT): Key Digital Trends Shaping the Future. LNNS, vol 616, Springer. (Book Chapter) (SCImago, Scopus). (ISSN No. 2367-3389)",
      link: "https://doi.org/10.1007/978-981-19-9719-8_26",
    },
    {
      id: 24,
      year: 2023,
      title: "Diksha Upadhyay, Harish Chandra, On the normal complement problem of finite group algebra, Asian-European Journal of Mathematics (AEJM). (Q3, Scopus, ESCI, IF: 0.5) (ISSN No. 17937183)",
      link: "https://doi.org/10.1142/S1793557123502029",
    },
    {
      id: 25,
      year: 2023,
      title: "Beena Bhatt and Harish Chandra, comparison of solar activity parameters and associated Forbush decreases in solar cycles 23 and 24, Solar Physics (2023, Q2, SCI, IF: 2.7). (ISSN No. 00380938)",
      link: "https://doi.org/10.1007/s11207-023-02227-1",
    },
    {
      id: 26,
      year: 2023,
      title: "Abhishek Kumar, Harish Chandra, Amit Kumar Barnwal and Dayashankar Singh, A new encryption scheme based on Legendre's transform, Mathematics in Engineering, Science & Aerospace (MESA) 14(4), 1099-1108. (Q4, Scopus, 2023). (ISSN No. 20413173)",
    },
    {
      id: 27,
      year: 2023,
      title: "Akanksha Singh, Harish Chandra, Saurabh Rana, and Deepak Chhikara, Blockchain-Based Authentication and Access Control Protocol for IoT, Multimedia Tools and Applications (2023, Q1, SCI, IF: 3.0). (ISSN No. 1380-7501)",
      link: "https://doi.org/10.1007/s11042-023-17607-9",
    },
    {
      id: 28,
      year: 2023,
      title: "Nikhil Srivastava, Amit K. Barnwal, Avinash Kumar Srivastava and Harish Chandra, A matrix technique based numerical treatment of a non-local singular boundary value problems, Mathematical Methods in the Applied Sciences (2023, Q1, SCI, IF: 3.0). (ISSN No. 0170-4214)",
      link: "https://doi.org/10.1002/mma.9809",
    },
    {
      id: 29,
      year: 2024,
      title: "Lachhita Soni, Harish Chandra and Daya Sagar Gupta, Post-quantum attack resilience blockchain-assisted data authentication protocol for smart healthcare system, Software: Practice and Experience (Q2, SCI, IF: 3.2). (ISSN No. 1097-024X)",
      link: "https://doi.org/10.1002/spe.3336",
    },
    {
      id: 30,
      year: 2024,
      title: "Ashutosh Mishra, Harish Chandra and Suchi Bhatt, Group Algebras of Lie Nilpotency Index 15, Southeast Asian Bulletin of Mathematics (2024) 48:259-271 (ESCI, IF: 0.2). (ISSN No. 0129-2021)",
    },
    {
      id: 31,
      year: 2024,
      title: "Jyoti Panchal, Harish Chandra and Akanksha Singh, A New Public Key Cryptography Using Generalized Fibonacci Matrices, Surveys in Mathematics and its Applications, Volume 19 (2024), 301-316 (Q3, Scopus). (ISSN 1842-6298 electronic, 1843-7265 print)",
    },
    {
      id: 32,
      year: 2024,
      title: "Disha Gupta, Harish Chandra, and Lacchita Soni, An encryption and decryption technique using a planar graph with self-invertible matrix, Mathematics in Engineering, Science and Aerospace (MESA), Vol. 15, No. 4, pp. 1335-1346, 2024 (Q4, Scopus).",
    },
    {
      id: 33,
      year: 2025,
      title: "Lacchita Soni, Harish Chandra and Daya Sagar Gupta, Lattice-Based Authentication Scheme for Smart Agriculture System, Proceedings of ICNSBT 2024, LNNS vol 1158, Springer, Singapore. (Scopus)",
      link: "https://doi.org/10.1007/978-981-97-8051-8_12",
    },
    {
      id: 34,
      year: 2025,
      title: "Akanksha Singh, Harish Chandra and Saurabh Rana, A Robust Lattice Based Post-Quantum Three-Party Key Exchange Scheme for Mobile Devices, Concurrency and Computation: Practice and Experience (Q2, SCIE, IF: 1.5). ISSN: 15320626, 15320634.",
      link: "https://doi.org/10.1002/cpe.70036",
    },
    {
      id: 35,
      year: 2025,
      title: "P. Tripathi, H. Chandra, and Ramkeval, Network Malaria Model on Account of Wide Communication, 2024 International Conference on IoT, Communication and Automation Technology (ICICAT), Gorakhpur, India, 2024, pp. 1507-1511.",
      link: "https://doi.org/10.1109/ICICAT62666.2024.10923044",
    },
    {
      id: 36,
      year: 2025,
      title: "P. Tripathi, H. Chandra, R. Keval, A. Kesarvani, and K. Singh, IoT based malaria website model using Digital Binary Code: A Mathematical Study, 2024 International Conference on IoT, Communication and Automation Technology (ICICAT), Gorakhpur, India, 2024, pp. 1671-1676.",
      link: "https://doi.org/10.1109/ICICAT62666.2024.10923427",
    },
    {
      id: 37,
      year: 2025,
      title: "Akanksha Singh, Harish Chandra, and Saurabh Rana, An efficient and secure undeniable signature scheme based on Ring learning with error, International Journal of Ad Hoc and Ubiquitous Computing (Accepted, SCIE, IF: 0.7).",
    },
    {
      id: 38,
      year: 2025,
      title: "Singh, A., Chandra, H., Rana, S. SIS-Based Signature Schemes and Their Countermeasures: From Vulnerability to Vigilance. In: Security and Privacy. ICSP 2024. CCIS, vol 2489. Springer, Cham. (SCImago, Scopus).",
      link: "https://doi.org/10.1007/978-3-031-90587-2_1",
    },
    {
      id: 39,
      year: 2025,
      title: "Diksha Upadhyay and Harish Chandra, Unit group of group algebras of non-abelian groups of order up to 30, Boletim da Sociedade Paranaense de Matematica (43), 1-17, 2025 (Accepted, SCImago, Scopus, ESCI, IF: 0.4). E-ISSN-2175-1188 ISSN-0037-8712.",
      link: "https://doi.org/10.5269/bspm.76165",
    },
    {
      id: 40,
      year: 2025,
      title: "Padmaja Tripathi, Harish Chandra and Ram Keval, Analysis and Prediction of Future Malaria and Typhoid Outbreaks Based on Time-Varying Contact Rates: An ARIMA Approach, Journal of Applied Nonlinear Dynamics (Accepted, ESCI, SJR, Scopus).",
    },
    {
      id: 41,
      year: 2025,
      title: "Diksha Upadhyay and Harish Chandra, Units group of semisimple group algebra of groups of order 36, Annales Mathematicae et Informaticae (Accepted, ESCI, SJR, Scopus).",
      link: "https://doi.org/10.33039/ami.2025.10.014",
    },
    {
      id: 42,
      year: 2025,
      title: "Padmaja Tripathi, Harish Chandra and Ram Keval, Optimal control of malaria with medicine and insecticide: A mathematical model, Mathematics in Engineering, Science and Aerospace (MESA), Vol. 16, No. 3, pp. 817-837, 2025. (Scopus, SJR).",
    },
    {
      id: 43,
      year: 2025,
      title: "Lachhita Soni, Harish Chandra, and Daya Sagar Gupta, LB-RFID: Provably Secure Post-quantum Authentication Protocol for RFID Devices in Resource-constrained IoT Environment, Wireless Personal Communications (Accepted, Q2, SCI, IF: 2.1).",
    },
    {
      id: 44,
      year: 2025,
      title: "Akanksha Singh, Harish Chandra, and Saurabh Rana, Lightweight Hybrid Lattice-Based Session Key Agreement Protocol for Multimedia IoT, Annals of Telecommunications (Accepted, SCI, Q2, IF: 2.2).",
      link: "https://doi.org/10.1007/s12243-025-01122-z",
    },
    {
      id: 45,
      year: 2025,
      title: "Arvind Patwa, Harish Chandra, and Lachhita Soni, Cryptography Based on SAWI-ELZAKI Transform, Palestine Journal of Mathematics, Vol 14 (Special Issue IV), 2025, 216-223. (Q3, Scopus).",
    },
    {
      id: 46,
      year: 2026,
      title: "Lachhita Soni, Harish Chandra, and Daya Sagar Gupta, SmartAgri-IDQ: Quantum-Resistant Identity-Based Data Authentication Protocol for Smart Agriculture IoT, Security and Privacy, 2026;9:e70189 (SCI, IF: 2.1).",
      link: "https://doi.org/10.1002/spy2.70189",
    },
    {
      id: 47,
      year: 2026,
      title: "Diksha Upadhyay, Harish Chandra, On the unit group of F_q SL(2,Z_7) and its normal complement, International Journal of Group Theory (Accepted, Q2, ESCI, IF: 1.3, Scopus).",
    },
    {
      id: 48,
      year: 2026,
      title: "Sujata Singh and Harish Chandra, Identity-Based Encryption with Equality Test via Lattice-Based Programmable Hash Functions: A Resilient and Efficient Construction, International Journal of Computational Science and Engineering (Accepted, Q3, ESCI, Scopus, IF: 1.2).",
    },
    {
      id: 49,
      year: 2026,
      title: "Padmaja Tripathi, Harish Chandra, Ram Keval and Vinod Bania, Exploring the Co-dynamics of Malaria and Typhoid: An In-Depth Analysis of a Mathematical Model and Cost-effectiveness Optimal Control, Differential Equations and Dynamical Systems (Accepted, Q3, ESCI, Scopus, IF: 0.9).",
    },
  ];

  if (loading) return null;

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
                <img src={block.url} alt="Publication Block" className="max-w-full h-auto rounded-lg shadow-md mx-auto" />
              )}
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="p-2 sm:p-4 md:p-6 bg-[#fff4dc]">
      <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-[#913c07] mb-3 sm:mb-4 md:mb-6">
        Publications
      </h1>

      <div className="bg-[#fff4dc] rounded-lg border-2 border-[#913c07] shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-xs sm:text-sm md:text-base">
            <thead>
              <tr className="bg-[#913c07]">
                <th className="px-2 sm:px-3 md:px-4 py-2 sm:py-2.5 md:py-3 text-left font-semibold text-white whitespace-nowrap">S.No.</th>
                <th className="px-2 sm:px-3 md:px-4 py-2 sm:py-2.5 md:py-3 text-left font-semibold text-white">Title</th>
                <th className="px-2 sm:px-3 md:px-4 py-2 sm:py-2.5 md:py-3 text-left font-semibold text-white whitespace-nowrap">Year</th>
                <th className="px-2 sm:px-3 md:px-4 py-2 sm:py-2.5 md:py-3 text-left font-semibold text-white whitespace-nowrap">Link</th>
              </tr>
            </thead>
            <tbody>
              {publications.length > 0 ? (
                publications.map((pub, index) => (
                  <tr key={pub.id} className="border-b border-secondary/20 hover:bg-bgColorDark">
                    <td className="px-2 sm:px-3 md:px-4 py-2 sm:py-2.5 md:py-3 whitespace-nowrap">{index + 1}</td>
                    <td className="px-2 sm:px-3 md:px-4 py-2 sm:py-2.5 md:py-3">
                      <span className="text-[#563c29] text-xs sm:text-sm md:text-base">{pub.title}</span>
                    </td>
                    <td className="px-2 sm:px-3 md:px-4 py-2 sm:py-2.5 md:py-3 whitespace-nowrap">{pub.year}</td>
                    <td className="px-2 sm:px-3 md:px-4 py-2 sm:py-2.5 md:py-3 text-center">
                      {pub.link && pub.link.trim() ? (
                        <a
                          href={pub.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center w-8 h-8 bg-[#913c07] text-white rounded-full hover:bg-[#913c07] transition-colors duration-300"
                        >
                          <ExternalLink size={16} />
                        </a>
                      ) : (
                        <span className="text-secondary/50 font-primary">-</span>
                      )}
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="4" className="px-3 sm:px-4 py-8 text-center text-secondary/70 font-primary">
                    No publications added yet.
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

export default Publications;




