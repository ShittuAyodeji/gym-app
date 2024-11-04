/*eslint-disable*/

import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import Git from "../assets/images/Git.png";

const Footer = () => (
  <Box mt="80px" bgcolor="#FFF3F4">
    <Stack
      gap="40px"
      sx={{ alignItems: "center" }}
      flexWrap="wrap"
      px="40px"
      pt="24px"
    >
      <a href="https://github.com/ShittuAyodeji" target="_blank">
        <img src={Git} alt="logo" style={{ width: "41px", height: "41px" }} />
      </a>
    </Stack>
    <Typography
      variant="h5"
      sx={{ fontSize: { lg: "28px", xs: "20px" } }}
      mt="41px"
      textAlign="center"
      pb="40px"
    >
      Ayodeji Shittu
    </Typography>
  </Box>
);

export default Footer;
