import React from "react";
import Cards from "../_components/Cards";
import Charts from "../_components/Charts";
import Layout from "../Layout";
const Dashboard = () => {
  return (
    <Layout pageTitle="Dashboard">
      <Cards />
      <Charts />
    </Layout>
  );
};
export default Dashboard;
