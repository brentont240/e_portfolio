import { Box, Typography, Container } from "@mui/material";
import ContactCard from "../components/ContactCard";
import contact from "../data/contact.json"

function Contact() {
    return (
        <Box>
            <Container maxWidth="xl">
                <Typography variant="h1" align="center" sx={{ my:2 }}>
                    Contact
                </Typography>
                <Box sx={{ mb:2 }}>
                    <ContactCard contacts={contact}/>
                </Box>
            </Container>
        </Box>
    );
}

export default Contact;
