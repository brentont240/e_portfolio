import GroupsIcon from "@mui/icons-material/Groups";
import HtmlIcon from '@mui/icons-material/Html';
import IntegrationInstructionsIcon from '@mui/icons-material/IntegrationInstructions';
import CloudIcon from '@mui/icons-material/Cloud';
import CodeIcon from '@mui/icons-material/Code';
import AssignmentIcon from '@mui/icons-material/Assignment';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import DatasetIcon from '@mui/icons-material/Dataset';
import CloudSyncIcon from '@mui/icons-material/CloudSync';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const iconMap = {
    GroupsIcon: GroupsIcon,
    HtmlIcon: HtmlIcon,
    IntegrationInstructionsIcon: IntegrationInstructionsIcon,
    CloudIcon: CloudIcon,
    CodeIcon: CodeIcon,
    AssignmentIcon: AssignmentIcon,
    MenuBookIcon: MenuBookIcon,
    DatasetIcon: DatasetIcon,
    CloudSyncIcon: CloudSyncIcon,
    EmailIcon: EmailIcon,
    GitHubIcon: GitHubIcon,
    LinkedInIcon: LinkedInIcon,
};

function IconImg({ iconName, size }) {
    const IconComponent = iconMap[iconName];

    return IconComponent ? <IconComponent fontSize={size}/> : null;
}

export default IconImg;
