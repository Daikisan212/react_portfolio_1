import React from 'react';
import Box from '@mui/material/Box'
import Avatar from '@mui/material/Avatar'
import Typography from '@mui/material/Typography'
import Link from '@mui/material/Link'
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import { green, purple } from '@mui/material/colors'

function Contact () {
    return (
    <>
        <Box p={2}>
            <Box display='flex' justifyContent='center' p={1} >
                <Typography variant='h5' >
                    Contact
                </Typography>
            </Box>
            <Box display='flex' justifyContent='center' p={1}> 
                {/* Eメールのアイコン */}
                <Link href='mailto:daikii0212@gmail.com' color='inherit'>
                    <Avatar sx={{bgcolor:green[500]}}>
                        <EmailIcon />
                    </Avatar>
                </Link>
                {/* GitHubのアイコン */}
                <Link href='https://github.com/Daikisan212' target="_blank" color='inherit' marginLeft={3}>
                    <Avatar sx={{bgcolor:purple[500]}}>
                        <GitHubIcon />
                    </Avatar>
                </Link>
            </Box>
        </Box>
    </>
    );
}

export default Contact;