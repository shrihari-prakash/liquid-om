import React from "react";
import { Box, Button, Card, CardContent, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="App">
      <Box
        sx={{
          display: "flex",
          "& > :not(style)": {
            m: 1,
            width: "100%",
            padding: 1,
          },
        }}
      >
        <Card variant="outlined">
          <CardContent>
            <Typography
              variant="h5"
              component="div"
              color="text.secondary"
              sx={{ display: "flex", alignItems: "center" }}
            >
              <img
                src="https://github.com/shrihari-prakash/liquid/raw/main/src/public/images/app-icon-mini-light.png"
                style={{ height: "1em" }}
              ></img>
              Liquid Option Manager
            </Typography>
            <Typography sx={{ mb: 1.5 }} variant="body2">
              A web app to edit and export your{" "}
              <a href="https://github.com/shrihari-prakash/liquid">Liquid</a>
              &nbsp;backend configurations.
            </Typography>
            <Link to="/backend">
              <Button variant="contained" sx={{ mr: "15px" }}>
                Backend
              </Button>
            </Link>
            <Link to="/frontend">
              <Button variant="contained">Frontend</Button>
            </Link>
          </CardContent>
        </Card>
      </Box>
    </div>
  );
}
