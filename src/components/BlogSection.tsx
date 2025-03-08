"use client";
import React from "react";

interface BlogPost {
  image: string;
  author: string;
  date: string;
  title: string;
  description: string;
  categories: Array<{
    text: string;
    color: string;
    bgColor: string;
  }>;
}

const BlogSection: React.FC = () => {
  const blogPosts: BlogPost[] = [
    {
      image: "/BlogSection/Small_business.png",
      author: "Prabhash Mishra",
      date: "1 Jan 2023",
      title: "Small business & Startup",
      description:
        "Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?",
      categories: [
        {
          text: "Tax & Audit",
          color: "text-violet-700",
          bgColor: "bg-purple-50",
        },
        {
          text: "Management",
          color: "text-indigo-900",
          bgColor: "bg-slate-50",
        },
      ],
    },
    {
      image: "/BlogSection/Scale-Up_Company.png",
      author: "Mahesh Kumar",
      date: "1 Jan 2023",
      title: "Scale-Up Company Offer",
      description:
        "Mental models are simple expressions of complex processes or relationships.",
      categories: [
        { text: "Tax", color: "text-sky-700", bgColor: "bg-sky-50" },
        { text: "Research", color: "text-indigo-700", bgColor: "bg-indigo-50" },
        {
          text: "Complience",
          color: "text-orange-700",
          bgColor: "bg-orange-50",
        },
      ],
    },
    // Add more blog posts as needed
  ];

  const BlogCard: React.FC<{ post: BlogPost }> = ({ post }) => {
    return (
      <article className="flex-1 shrink basis-0 min-w-60">
        <img
          src={post.image}
          className="object-contain w-full aspect-[1.6]"
          alt={post.title}
        />
        <div className="mt-8 w-full">
          <div className="w-full">
            <p className="text-sm font-semibold leading-none text-gray-500">
              {post.author} • {post.date}
            </p>
            <div className="flex gap-4 items-start mt-3 w-full">
              <h3 className="flex-1 shrink text-2xl font-bold leading-none basis-0 text-zinc-900">
                {post.title}
              </h3>
              <div className="pt-1 w-6">
                <img
                  src="/BlogSection/Icon.svg"
                  className="object-contain w-6 aspect-square"
                  alt="Icon"
                />
              </div>
            </div>
            <p className="mt-3 text-base leading-6 text-gray-500">
              {post.description}
            </p>
          </div>
          <div className="flex gap-2 items-start mt-6 w-full text-sm font-medium leading-none text-center">
            {post.categories.map((category, index) => (
              <div
                key={index}
                className={`flex items-start ${category.color} bg-blend-multiply`}
              >
                <div
                  className={`self-stretch px-2.5 py-0.5 ${category.bgColor} rounded-2xl`}
                >
                  {category.text}
                </div>
              </div>
            ))}
          </div>
        </div>
      </article>
    );
  };

  return (
    <section className="flex flex-col items-center px-8 mt-14 w-full max-w-screen-xl max-md:px-5 max-md:mt-10 max-md:max-w-full">
      <span className="self-center text-sm tracking-widest text-center text-amber-500">
        EXPLORE OUR BLOGS
      </span>

      <h2 className="self-center mt-7 text-3xl font-bold tracking-normal leading-tight text-center text-yellow-950 max-md:max-w-full">
        Accelerate Digital Transformation
      </h2>

      <div className="flex flex-wrap gap-8 justify-center mt-8">
        {blogPosts.map((post, index) => (
          <BlogCard key={index} post={post} />
        ))}
      </div>

      <button className="flex overflow-hidden gap-1.5 justify-center items-center self-center px-5 py-3 mt-12 text-base font-semibold leading-none text-white bg-cyan-900 rounded-md">
        <span>Show more blogs</span>
        <img
          src="/BlogSection/Show_more.svg"
          className="object-contain shrink-0 self-stretch my-auto w-5 aspect-square"
          alt="Show more"
        />
      </button>
    </section>
  );
};

export default BlogSection;
