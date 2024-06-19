import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

export default function Services() {
  return (
    <div>
      <h1 className="text-3xl px-10 text-orange-500 font-bold py-6 text-center">
        My services
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 items-center lg:px-10 w-full pb-6">
        <Card
          sx={{ maxWidth: { xs: "100%", lg: 300 }, width: "100%" }}
          className="mx-auto mt-5 lg:mt-0"
        >
          <CardContent className="mx-5">
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              className="text-center font-semibold text-orange-500 text-base"
            >
              Front-end Developer
            </Typography>
            <p className="text-base space-y-10">
              Transform I digital presence with expert front-end development! I
              craft stunning, responsive, and user-friendly designs that not
              only captivate but also convert visitors into loyal customers.
              Specializing in modern technologies and best practices, I bring
              your vision to life with precision and creativity.
            </p>
          </CardContent>
          <CardActions className="flex justify-center my-3">
            <button className="button text-white font-bold px-10 py-2">
              Order Now
            </button>
          </CardActions>
        </Card>
        <Card
          sx={{ maxWidth: { xs: "100%", lg: 300 }, width: "100%" }}
          className="mx-auto mt-16 lg:mt-0"
        >
          <CardContent className="mx-4">
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              className="text-center font-semibold text-orange-500 text-base"
            >
              Mern Stack Developer
            </Typography>
            <p className="text-base space-y-10">
              Elevate I web applications with expert MERN stack development! I
              specialize in building powerful, scalable, and high-performance
              applications using MongoDB, Express, React, and Node.js. From
              dynamic front-end interfaces to robust back-end solutions, I bring
              your ideas to life with precision and efficiency.
            </p>
          </CardContent>
          <CardActions className="flex justify-center my-3">
            <button className="button text-white font-bold px-10 py-2">
              Order Now
            </button>
          </CardActions>
        </Card>
        <Card
          sx={{ maxWidth: { xs: "100%", lg: 300 }, width: "100%" }}
          className="mx-auto mt-16 lg:mt-0"
        >
          <CardContent className="mx-6">
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              className="text-center font-semibold text-orange-500 text-base"
            >
              UI/UX Designer
            </Typography>
            <p className="text-base space-y-10">
              Transform I digital experience with expert UI/UX design! I
              specialize in crafting intuitive, user-friendly interfaces that
              not only look stunning but also enhance user engagement and
              satisfaction. From wireframes to prototypes, I bring your vision
              to life with a focus on usability and aesthetics.
            </p>
          </CardContent>
          <CardActions className="flex justify-center my-3">
            <button className="button text-white font-bold px-10 py-2">
              Order Now
            </button>
          </CardActions>
        </Card>
      </div>
    </div>
  );
}
