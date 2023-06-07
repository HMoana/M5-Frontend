import React from "react";
import RentalProperties from "./RentalProperties";
import BuildingManagement from "./BuildingManagement";
import ProjectManagement from "./ProjectManagement";
import PropertyAppraisal from "./PropertyAppraisal";

const MainContainer = () => {
  return (
    <div>
      <RentalProperties />
      <ProjectManagement />
      <BuildingManagement />
      <PropertyAppraisal />
    </div>
  );
};

export default MainContainer;
