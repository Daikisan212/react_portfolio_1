import React from 'react';
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'

//スキル
function Skills () {
    return (
        <>
            <Box p={2} >
                <Box display='flex' justifyContent='center' p={1} >
                    <Typography variant='h5' >
                        Skills
                    </Typography>
                </Box>
                <Box display='flex' justifyContent='center' p={1} margin={2}>
                    <Card sx={{width:750,maxWidth: '100%'}}>
                        <CardContent>
                            <Typography variant="h6">
                                言語
                            </Typography>
                            <Typography color="textSecondary">
                                HTML / JavaScript / TypeScript / PHP / Python / PowerApps
                            </Typography>
                        </CardContent>
                    </Card>
                </Box>
                <Box display='flex' justifyContent='center' p={1} margin={2}>
                    <Card sx={{width:750,maxWidth: '100%'}}>
                        <CardContent>
                            <Typography variant="h6">
                                フレームワーク
                            </Typography>
                            <Typography color="textSecondary">
                                React / jQuery 
                            </Typography>
                        </CardContent>
                    </Card>
                </Box>
                <Box display='flex' justifyContent='center' p={1} margin={2}>
                    <Card sx={{width:750,maxWidth: '100%'}}>
                        <CardContent>
                            <Typography variant="h6">
                                データベース
                            </Typography>
                            <Typography color="textSecondary">
                                MySQL / PostgreSQL
                            </Typography>
                        </CardContent>
                    </Card>
                </Box>
                <Box display='flex' justifyContent='center' p={1} margin={2}>
                    <Card sx={{width:750,maxWidth: '100%'}}>
                        <CardContent>
                            <Typography variant="h6">
                                AWS
                            </Typography>
                            <Typography color="textSecondary">
                                EC2 / Lambda / SNS / ELB / S3 / RDS / CloudWatch / EventBridge
                            </Typography>
                        </CardContent>
                    </Card>
                </Box>
                <Box display='flex' justifyContent='center' p={1} margin={2}>
                    <Card sx={{width:750,maxWidth: '100%'}}>
                        <CardContent>
                            <Typography variant="h6">
                                Azure
                            </Typography>
                            <Typography color="textSecondary">
                                Virtual Machines / Disk Storage / SQL Database / Blob Storage
                            </Typography>
                        </CardContent>
                    </Card>
                </Box>
                
            </Box>
        </>
    );
}

export default Skills;