"use client";

import React, { useState, useEffect } from "react";
import {
  Box,
  Button,
  Typography,
  IconButton,
  useTheme,
  useMediaQuery,
  Fade,
  Paper,
} from "@mui/material";

interface SlideData {
  id: number;
  image: string;
  title: string;
  subtitle?: string;
  buttons: {
    text: string;
    href: string;
    variant?: "contained" | "outlined";
  }[];
  overlayPosition?: "left" | "center" | "right";
}
interface PhotoSlideshowProps {
  slides: SlideData[];
  autoPlay?: boolean;
  autoPlayInterval?: number;
  height?: string | number;
}

const PhotoSlideshow: React.FC<PhotoSlideshowProps> = ({
  slides,
  autoPlay = true,
  autoPlayInterval = 5000,
  height = "70vh",
}) => {
  //Finish Lines 42 -82
  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        height: height,
        overflow: "hidden",
      }}
    >
      {/* This first box is the main larger scale image*/}
    </Box>
  );
};

export default PhotoSlideshow;
