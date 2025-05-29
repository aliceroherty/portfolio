import { SxProps } from '@mui/material';
import { SvgIconComponent } from '@mui/icons-material';

export default interface ChipData {
    label: string;
    icon: SvgIconComponent;
    variant?: 'filled' | 'outlined';
    color?: 'primary' | 'secondary' | 'default' | 'error' | 'info' | 'success' | 'warning';
    sx?: SxProps;
    link?: string;
}