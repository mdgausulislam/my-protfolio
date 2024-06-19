import React, { useState } from "react";
import Blog1 from "../assets/bannerImg.png";

function Blog() {
  const [visiblePosts, setVisiblePosts] = useState(3);
  const [allPostsLoaded, setAllPostsLoaded] = useState(false);

  const handleLoadMore = () => {
    const newVisiblePosts = visiblePosts + 3;
    if (newVisiblePosts >= posts.length) {
      setVisiblePosts(posts.length);
      setAllPostsLoaded(true);
    } else {
      setVisiblePosts(newVisiblePosts);
    }
  };

  const posts = [
    {
      img: { Blog1 },
      title: "In usu laoreet repudiare legendos",
      date: "January 21, 2021",
      description:
        "Mei ex aliquid eleifend forensibus, quo ad dicta apeirian neglegentur, ex has tantas percipit perfecto. At per tempor albucius perfecto, ei probatus consulatu patrioque mea, ei vocent delicata indoctum pri.",
    },
    {
      img: "https://source.unsplash.com/random/480x360?2",
      title: "In usu laoreet repudiare legendos",
      date: "January 22, 2021",
      description:
        "Mei ex aliquid eleifend forensibus, quo ad dicta apeirian neglegentur, ex has tantas percipit perfecto. At per tempor albucius perfecto, ei probatus consulatu patrioque mea, ei vocent delicata indoctum pri.",
    },
    {
      img: "https://source.unsplash.com/random/480x360?3",
      title: "In usu laoreet repudiare legendos",
      date: "January 23, 2021",
      description:
        "Mei ex aliquid eleifend forensibus, quo ad dicta apeirian neglegentur, ex has tantas percipit perfecto. At per tempor albucius perfecto, ei probatus consulatu patrioque mea, ei vocent delicata indoctum pri.",
    },
    {
      img: "https://source.unsplash.com/random/480x360?4",
      title: "In usu laoreet repudiare legendos",
      date: "January 24, 2021",
      description:
        "Mei ex aliquid eleifend forensibus, quo ad dicta apeirian neglegentur, ex has tantas percipit perfecto. At per tempor albucius perfecto, ei probatus consulatu patrioque mea, ei vocent delicata indoctum pri.",
    },
    {
      img: "https://source.unsplash.com/random/480x360",
      title: "In usu laoreet repudiare legendos",
      date: "January 25, 2021",
      description:
        "Mei ex aliquid eleifend forensibus, quo ad dicta apeirian neglegentur, ex has tantas percipit perfecto. At per tempor albucius perfecto, ei probatus consulatu patrioque mea, ei vocent delicata indoctum pri.",
    },
    {
      img: "https://source.unsplash.com/random/480x360?6",
      title: "In usu laoreet repudiare legendos",
      date: "January 26, 2021",
      description:
        "Mei ex aliquid eleifend forensibus, quo ad dicta apeirian neglegentur, ex has tantas percipit perfecto. At per tempor albucius perfecto, ei probatus consulatu patrioque mea, ei vocent delicata indoctum pri.",
    },
  ];

  return (
    <>
      <section className="dark:bg-gray-100 dark:text-gray-800">
        <div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
          <a
            rel="noopener noreferrer"
            href="#"
            className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 dark:bg-gray-50"
          >
            <img
              src={Blog1}
              alt=""
              className="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7 dark:bg-gray-500"
            />
            <div className="p-6 space-y-2 lg:col-span-5">
              <h3 className="text-2xl font-semibold sm:text-4xl group-hover:underline group-focus:underline">
                Noster tincidunt reprimique ad pro
              </h3>
              <span className="text-xs dark:text-gray-600">
                February 19, 2021
              </span>
              <p>
                Ei delenit sensibus liberavisse pri. Quod suscipit no nam. Est
                in graece fuisset, eos affert putent doctus id.
              </p>
            </div>
          </a>
          <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {posts.slice(0, visiblePosts).map((post, index) => (
              <a
                key={index}
                rel="noopener noreferrer"
                href="#"
                className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-50"
              >
                <img
                  role="presentation"
                  className="object-cover w-full rounded h-44 dark:bg-gray-500"
                  src={post.img}
                />
                <div className="p-6 space-y-2">
                  <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
                    {post.title}
                  </h3>
                  <span className="text-xs dark:text-gray-600">
                    {post.date}
                  </span>
                  <p>{post.description}</p>
                </div>
              </a>
            ))}
          </div>
          {!allPostsLoaded && (
            <div className="flex justify-center">
              <button
                type="button"
                className="px-6 py-3 text-sm rounded-md hover:underline dark:bg-gray-50 dark:text-gray-600"
                onClick={handleLoadMore}
              >
                Load more posts...
              </button>
            </div>
          )}
        </div>
      </section>
    </>
  );
}

export default Blog;
