import { Box, Typography, Divider } from "@mui/material";
import SkillCard from "./SkillCard";

function SkillSection({ title, skills }) {
    return (
        <Box>
            <Divider
                textAlign="left"
                sx={{
                    "&::before, &::after": {
                        borderColor: "primary.main",
                        borderWidth: 3,
                    },
                    mb: 2,
                }}
            >
                <Typography variant="h2" color="">
                    {title}
                </Typography>
            </Divider>
            <SkillCard skills={skills} />
        </Box>
    );
}

export default SkillSection;
