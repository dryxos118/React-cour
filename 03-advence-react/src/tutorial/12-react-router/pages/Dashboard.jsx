import React from "react";

const Dashboard = ({ user }) => {
  return (
    <section className="section">
      <h4>bonjour, {user?.name}</h4>
    </section>
  );
};

export default Dashboard;
