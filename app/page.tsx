import React from "react";
import Home from "@/components/Home";
import { Grid } from "@/components/Grid";

const page = () => {
  return (
    <div>
      <Grid components={<Home />} />
    </div>
  );
};

export default page;
