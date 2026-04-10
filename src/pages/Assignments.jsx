import { ExternalLink } from "lucide-react";
import { CmsContent } from "../components/CmsContent";
import { useContent } from "../hooks/useContent";

const Assignments = () => {
  const { data, loading } = useContent('assignments');

  if (loading) return null;

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
        Assignments
      </h2>

      <div className="bg-white border border-[#913c07] rounded-lg p-4 sm:p-6 md:p-8">
        <p className="text-base sm:text-lg md:text-xl text-secondary font-primary mb-4 sm:mb-6">
          Following are the assignments of Mathematics for B. Tech.I and M. Tech I
        </p>

        <a
          href="https://drive.google.com/drive/u/0/folders/0B7Lzs_siOkGZRkNiOFFZTWJxalU"
          target="_blank"
          rel="noopener noreferrer"
          className="
            inline-flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3
            bg-[#913c07] text-white font-primary font-semibold
            rounded-md shadow-md
            hover:bg-[#7a3306] hover:shadow-lg
            transition-all duration-300 ease-out
            transform hover:scale-105
          "
        >
          <span>View Assignments on Google Drive</span>
          <ExternalLink size={18} />
        </a>
      </div>

    </div>
  );
};

export default Assignments;

