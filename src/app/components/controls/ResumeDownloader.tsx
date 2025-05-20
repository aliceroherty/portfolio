import Button from '@mui/material/Button';
import CloudDownloadIcon from '@mui/icons-material/CloudDownload'

const ResumeDownloader = () => {
    return (
        <div>
            <Button
                variant='outlined'
                color='primary'
                className=''
                style={{ animationDelay: '2.25s' }}
                download='Alice Roherty-Carrier - Resume.pdf'
                href='/resume.pdf'
            >
                Download Resume
                <CloudDownloadIcon
                    className='ml-2 flex justify-center align-center text-base'
                    style={{ fontSize: '1.1rem' }}
                />
            </Button>
        </div>
    );
}

export default ResumeDownloader;