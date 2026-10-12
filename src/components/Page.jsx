import { Box } from "@mui/material";
import { Helmet } from "react-helmet-async";

const Page = ({ children, title = "", meta }) => (
    <>
        <Helmet>
            <title>{`Brenton Trebilcock | ${title}`}</title>
            {meta}
        </Helmet>
        <Box>{children}</Box>
    </>
);

export default Page;
