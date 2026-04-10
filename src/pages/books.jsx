import React from "react";
import { CmsContent } from "../components/CmsContent";
import { useContent } from "../hooks/useContent";

const Books = () => {
  const { data, loading } = useContent('books');

  if (loading) return null;

  if (data?.content || data?.blocks?.length > 0) {
    return (
      <div className="border border-[#913c07] p-2 sm:p-4 md:p-6 bg-[#fff4dc]">
        <CmsContent content={data.content} blocks={data.blocks} />
      </div>
    );
  }

  const bookLinks = [
    { name: "http://www.getfreeebooks.com/", url: "http://www.getfreeebooks.com/" },
    { name: "http://www.freebookspot.es/", url: "http://www.freebookspot.es/" },
    { name: "http://www.onlinefreeebooks.net/", url: "http://www.onlinefreeebooks.net/" },
    { name: "http://en.bookfi.org", url: "http://en.bookfi.org" },
    { name: "http://www.bookboon.com", url: "http://www.bookboon.com" },

  ];

  return (
    <div className="border border-[#913c07] p-2 sm:p-4 md:p-6 bg-[#fff4dc] w-fit mx-auto my-8 shadow-md">

      {/*Header Section*/}
      <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-[#913c07] mb-2 sm:mb-3">
        Free Books of Mathematics
      </h2>
      <p className="text-sm sm:text-base text-[#563c29] mb-6 sm:mb-8 font-primary italic">
        Here are some useful books of mathematics which can be easily downloaded.
      </p>

      {/* Books Section */}
      <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-[#913c07] mb-2">
        Print Sources (Books)
      </h3>
      <p className="text-sm sm:text-base text-[#563c29] mb-4 font-primary">
        Following websites are very useful for books:
      </p>
      <ul className="list-decimal list-inside text-sm sm:text-base text-[#563c29] mb-8 font-primary space-y-1">
        {bookLinks.map((book, index) => (
          <li key={index}>
            <a
              href={book.url}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              {book.name}
            </a>
          </li>
        ))}
      </ul>


    </div>
  );
};

export default Books;