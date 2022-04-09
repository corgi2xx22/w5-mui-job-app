import React from "react";
import JobCard from "./JobCard";
import { Grid, Pagination } from "@mui/material";
import { Box } from "@mui/system";

const LIMIT = 5;

function JobList({ jobs }) {
  const [page, setPage] = React.useState(1);
  const handleChange = (event, value) => {
    setPage(value);
  };
  const totalPage = Math.ceil(jobs.length / LIMIT);
  return (
    <>
      <Grid container spacing={4} sx={{ mt: "10px" }}>
        {jobs.slice((page - 1) * LIMIT, page * LIMIT).map((job) => (
          <Grid item md={4} xs={12}>
            <JobCard job={job} key={job.id} />
          </Grid>
        ))}
      </Grid>
      <Box sx={{ display: "flex", justifyContent: "center", mt: "10px" }}>
        <Pagination
          count={totalPage}
          page={page}
          onChange={handleChange}
          color="error"
        />
      </Box>
    </>
  );
}

export default JobList;
