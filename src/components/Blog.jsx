import { Typography, Card, CardBody } from "@material-tailwind/react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Blog1 from "../assets/rag day/DJI_0001-1.jpg";
import Blog2 from "../assets/rag day/DJI_0002-1.jpg";
import Blog3 from "../assets/rag day/DJI_0003-1.jpg";
import Blog4 from "../assets/rag day/DJI_0008-1.jpg";
import Blog5 from "../assets/rag day/DSC05861.jpg";
import Blog6 from "../assets/rag day/DSC05863.jpg";
import Blog7 from "../assets/rag day/DSC05865.jpg";
import Blog8 from "../assets/rag day/DSC05873.jpg";

function ContentCard({ img, title, desc }) {
  return (
    <Card
      className="relative grid min-h-[30rem] items-end overflow-hidden rounded-xl"
      color="transparent"
    >
      <img
        src={img}
        alt="bg"
        className="absolute inset-0 h-full w-full object-cover object-center"
      />
      <div className="absolute inset-0 bg-black/70" />
      <CardBody className="relative flex flex-col justify-end">
        <Typography variant="h4" color="white">
          {title}
        </Typography>
        <Typography
          variant="paragraph"
          color="white"
          className="my-2 font-normal"
        >
          {desc}
        </Typography>
      </CardBody>
    </Card>
  );
}

const contents = [
  {
    img: Blog1,
    title: "CSE 191 Batch",
  },
  {
    img: Blog2,
    title: "CSE 191 Batch",
  },
  {
    img: Blog3,
    title: "CSE 191 Rag Day",
  },
  {
    img: Blog4,
    title: "Rag Day ",
  },
  {
    img: Blog5,
    title: "Rag Day ",
  },
  {
    img: Blog6,
    title: "Rag Day ",
  },
  {
    img: Blog7,
    title: "Rag Day ",
  },
  {
    img: Blog8,
    title: "Rag Day ",
  },
];

function Blog() {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <section className="container mx-auto pb-10 lg:px-10 lg:py-28">
        <Typography
          variant="h2"
          color="blue-gray"
          className="text-3xl px-10 text-orange-500 font-bold py-6 text-center"
        >
          Blog
        </Typography>
        <div className="mt-10">
          <Slider {...settings}>
            {contents.map(({ img, title, desc }) => (
              <div key={title} className="px-2">
                <ContentCard img={img} title={title} desc={desc} />
              </div>
            ))}
          </Slider>
        </div>
      </section>
    </>
  );
}

export default Blog;
