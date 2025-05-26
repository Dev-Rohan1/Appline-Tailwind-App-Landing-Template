import React from "react";

const AppLayout = ({ children }) => {
  return (
    <main className="container mx-auto px-6 lg:px-12 py-4">{children}</main>
  );
};

export default AppLayout;
