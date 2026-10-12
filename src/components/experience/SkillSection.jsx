import { Box, Typography, Divider } from "@mui/material";
import SkillCard from "./SkillCard";

function SkillSection({ title, skills }) {
    // TODO: ADD MB TO TYPOGRAPHY
    return (
        <Box>
            {/* <Divider
                textAlign="left"
                sx={{
                    "&::before, &::after": {
                        borderColor: "primary.main",
                        borderWidth: 3,
                    },
                    mb: 2,
                }}
            > */}
                <Typography GYT variant="h2">
                    {title}
                </Typography>
            {/* </Divider> */}
            <SkillCard skills={skills} />
        </Box>
    );
}

export default SkillSection;
