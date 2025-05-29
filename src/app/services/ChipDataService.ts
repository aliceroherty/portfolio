import ChipData from '../models/ChipData';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CodeIcon from '@mui/icons-material/Code';
import StarIcon from '@mui/icons-material/Star';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { SvgIconComponent } from '@mui/icons-material';

export interface ChipDataNoJSX extends Omit<ChipData, 'icon'> {
    icon: SvgIconComponent;
}

const chipData: Array<ChipDataNoJSX> = [
    {
        icon: CodeIcon,
        label: 'Software Developer',
        variant: 'filled',
        sx: {
            fontWeight: 600,
            fontSize: '1.15rem',
            backgroundColor: 'rgba(249, 168, 212, 0.15)',
            color: 'white',
            '& .MuiChip-icon': { color: '#f9a8d4' },
        },
    },
    {
        icon: StarIcon,
        label: '4+ Years Experience',
        variant: 'outlined',
        color: 'primary',
        sx: {
            fontWeight: 600,
            fontSize: '1rem',
            backgroundColor: '#23232a',
            borderColor: '#f9a8d4',
            color: '#f9a8d4',
            '& .MuiChip-icon': { color: '#f9a8d4' },
        },
    },
    {
        icon: LocationOnIcon,
        label: 'Montréal, QC',
        variant: 'outlined',
        color: 'primary',
        sx: {
            fontWeight: 600,
            fontSize: '1rem',
            backgroundColor: '#23232a',
            borderColor: '#f9a8d4',
            color: '#f9a8d4',
            '& .MuiChip-icon': { color: '#f9a8d4' },
        },
    },
    {
        icon: GitHubIcon,
        label: 'GitHub',
        variant: 'outlined',
        color: 'primary',
        link: 'https://github.com/aliceroherty',
        sx: {
            fontWeight: 600,
            fontSize: '1rem',
            backgroundColor: '#23232a',
            borderColor: '#f9a8d4',
            color: '#f9a8d4',
            cursor: 'pointer',
            '& .MuiChip-icon': { color: '#f9a8d4' },
            '&:hover': {
                backgroundColor: '#2d2d34',
                boxShadow: '0 0 0 2px #f9a8d4',
            },
        },
    },
    {
        icon: LinkedInIcon,
        label: 'LinkedIn',
        variant: 'outlined',
        color: 'primary',
        link: 'https://www.linkedin.com/in/alice-roherty-carrier-971268193/',
        sx: {
            fontWeight: 600,
            fontSize: '1rem',
            backgroundColor: '#23232a',
            borderColor: '#f9a8d4',
            color: '#f9a8d4',
            cursor: 'pointer',
            '& .MuiChip-icon': { color: '#f9a8d4' },
            '&:hover': {
                backgroundColor: '#2d2d34',
                boxShadow: '0 0 0 2px #f9a8d4',
            },
        },
    },
];

export default class ChipDataService {
    static getAboutSectionData(): Array<ChipDataNoJSX> {
        return chipData;
    }
}