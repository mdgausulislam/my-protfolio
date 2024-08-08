import React from 'react';
import { useParams } from 'react-router-dom';

const ProjectDetails = () => {
  const { id } = useParams();

  // Here you would typically fetch the details for the specific project ID
  // For simplicity, we are just displaying the project ID
  return (
    <div className="p-4 mt-10">
      <h1 className="text-3xl font-bold">Project Details for: {id}</h1>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat, temporibus quas, nam quos aliquam amet porro rerum quidem assumenda, ab iure consequuntur error sunt atque facilis? Maxime reprehenderit laboriosam minus? Ipsum commodi, tempora, laudantium iusto dolorem sint quas eius, aperiam consectetur dicta distinctio saepe et nostrum quis consequatur rerum. Enim?</p>
    </div>
  );
}

export default ProjectDetails;

