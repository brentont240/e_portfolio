import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";

export function CheckScreenSize(size) {
    const theme = useTheme();
    return useMediaQuery(theme.breakpoints.only(size));
}
