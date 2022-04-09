import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Chip, Divider } from "@mui/material";

function JobCard({ job }) {
  return (
    <>
      <Card
        sx={{
          minWidth: 275,
          height: 300,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          paddingBottom: "15px",
        }}
      >
        <CardContent>
          <Typography sx={{ fontSize: 20, textAlign: "center" }} gutterBottom>
            {job.title}
          </Typography>
          <Divider light sx={{ mt: "1px ", mb: "10px" }} />
          {job.skills.slice(0, 4).map((skill) => (
            <Chip
              sx={{ mr: "5px ", mb: "10px" }}
              color="error"
              size="small"
              label={skill}
            />
          ))}
          <Typography variant="body2" color="text.secondary">
            {job.description}
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            variant="contained"
            color="warning"
            sx={{ textAlign: "center", margin: "auto" }}
          >
            Learn More
          </Button>
        </CardActions>
      </Card>
    </>
  );
}

export default JobCard;
