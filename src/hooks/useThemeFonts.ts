import { useTheme } from "@mui/material/styles";

export const useThemeFonts = () => {
  const theme = useTheme();

  const h1 = {
    ...theme.typography.h1,
    fontSize: "48px",
    lineHeight: "50px",
    fontWeight: 600,
  }; // semibold обычно соответствует 600
  const h2 = {
    ...theme.typography.h2,
    fontSize: "32px",
    lineHeight: "40px",
    fontWeight: 600,
  };
  const h3 = {
    ...theme.typography.h3,
    fontSize: "24px",
    lineHeight: "30px",
    fontWeight: 600,
  };
  const h4 = {
    ...theme.typography.h4,
    fontSize: "20px",
    lineHeight: "20px",
    fontWeight: "bold",
  };
  const h5 = {
    ...theme.typography.h5,
    fontSize: "14px",
    lineHeight: "20px",
    fontWeight: "bold",
  };

  const bodyL = {
    ...theme.typography.body1,
    fontSize: "16px",
    lineHeight: "20px",
    fontWeight: "regular",
  };
  const bodyM = {
    ...theme.typography.body2,
    fontSize: "14px",
    lineHeight: "20px",
    fontWeight: "regular",
  };
  const bodyS = {
    ...theme.typography.subtitle1,
    fontSize: "12px",
    lineHeight: "18px",
    fontWeight: "regular",
  };

  const notes = {
    ...theme.typography.caption,
    fontSize: "10px",
    lineHeight: "10px",
    fontWeight: "regular",
  };

  return {
    h1,
    h2,
    h3,
    h4,
    h5,
    bodyL,
    bodyM,
    bodyS,
    notes,
  };
};
