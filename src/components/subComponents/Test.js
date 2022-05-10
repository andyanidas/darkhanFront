import { FC } from "react";
// import { Box, ThemeProps } from "@nest/components";
import {
  Grid,
  Box,
  Container,
  Typography,
  Stack,
  AppBar,
  styled,
  alpha,
  Link,
  Divider,
  useMediaQuery,
  Grow,
  useTheme,
  Skeleton,
  ClickAwayListener,
  Dialog,
  Tooltip,
  Pagination,
} from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    overflow: "hidden",
    display: "flex",
    width: "100vw",
    "& > *:not(:last-child)": {
      marginRight: theme.spacing(7),
    },
    [theme.breakpoints.down("sm")]: {
      "& > *:not(:last-child)": {
        marginRight: theme.spacing(4),
      },
    },
    "&:hover": {
      "& > *": {
        animationPlayState: "paused",
      },
    },
  },
  marquee: {
    flex: "0 0 auto",
    zIndex: 1,
    animation: "$slide 250s infinite linear",
    alignItems: "center",
    display: "flex",
    minWidth: "100%",
    "& > *:not(:last-child)": {
      marginRight: theme.spacing(7),
    },
    [theme.breakpoints.down("sm")]: {
      "& > *:not(:last-child)": {
        marginRight: theme.spacing(4),
      },
    },
  },
  "@keyframes slide": {
    "0%": {
      transform: "translateX(0%)",
    },
    "100%": {
      transform: "translateX(-100%)",
    },
  },
}));

const Test = ({ direction = "left", children }) => {
  const styles = useStyles();

  return (
    <Box data-testid="marquee" className={styles.container}>
      <Box
        className={styles.marquee}
        style={{
          animationDirection: direction === "left" ? "normal" : "reverse",
        }}
      >
        {children}
      </Box>
      <Box
        className={styles.marquee}
        style={{
          animationDirection: direction === "left" ? "normal" : "reverse",
        }}
      >
        {children}
      </Box>
    </Box>
  );
};
export default Test;
