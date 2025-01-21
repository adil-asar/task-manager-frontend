import React from "react";
import PageHeader from "../components/common/PageHeader";
import Container from "../components/tasks/Container";

const Home = () => {
  return (
    <div className="w-full  ">
      <PageHeader name="All Tasks" />
      <Container />
    </div>
  );
};

export default Home;
