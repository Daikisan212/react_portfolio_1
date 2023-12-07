import React from 'react';
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Card from '@mui/material/Card'
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent'
import { Button,CardActions } from '@mui/material';

//画像のインポート
import portfolio_pic1 from '../static/images/2023-12-01 072909.png';
import portfolio_pic2 from '../static/images/2023-12-01 080621.png';

//ナビゲーションバー
function PortFolio() {
    return (
        <>
             <Box p={3} >
                <Box display='flex' justifyContent='center' p={1} >
                    <Typography variant='h5' >
                        PortFolio
                    </Typography>
                </Box>
                <Box display='flex' justifyContent='center' p={1}>
                    <Typography variant='body1' align='left'>
                        こちらに記載しているポートフォリオは学生の時に作成したサイト、アプリになります。
                    </Typography>
                </Box>
                <Box display='flex' justifyContent='center' p={1} margin={2}>
                    <Card sx={{width:500,maxWidth: '95%'}}>
                        <CardMedia
                            sx={{ height: 140}}
                            image={portfolio_pic1}
                            title="portfolio-site"
                        />
                        <CardContent style={{backgroundColor: 'darkgray'}}>
                            <Typography gutterBottom variant="h5" component="div">
                                新卒の就職活動で使用したポートフォリオ
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                当時はデザインについて疎くコードを書きながらデザインを<br />決めていたため、
                                とても見づらい物となっております。
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button href="https://github.com/Daikisan212/portfolio_site" target="_blank" size="small" color="primary">
                            GitHub
                            </Button>
                            <Button href="https://daikisan212.github.io/portfolio_site/" target="_blank" size="small" color="primary">
                            サイト
                            </Button>
                        </CardActions>
                    </Card>
                </Box>
                <Box display='flex' justifyContent='center' p={5}>
                    <Card sx={{width:500,maxWidth: '95%'}}>
                        <CardMedia
                            sx={{ height: 140}}
                            image={portfolio_pic2}
                            title="portfolio-site"
                        />
                        <CardContent style={{backgroundColor: 'darkgray'}}>
                            <Typography gutterBottom variant="h5" component="div">
                                Swiftを使用したメモ帳
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button href="https://github.com/Daikisan212/portfolio_Swift_ios" target="_blank" size="small" color="primary">
                            GitHub
                            </Button>
                        </CardActions>
                    </Card>
                </Box>
            </Box>
        </>
    );
}

export default PortFolio;