import React from 'react';
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Button from '@mui/material/Button'
import AnchorLink from 'react-anchor-link-smooth-scroll'

//ナビゲーションバー
function NavBar() {
    return (
        <>
            <AppBar
            color='default'
            position='relative'
            style={{alignItems: 'center'}}
            >
                <Toolbar>
                    <AnchorLink href='#about' style={{
                        textDecoration: 'none',
                        color: 'inherit'
                    }}>
                        <Button>
                            ABOUT
                        </Button>
                    </AnchorLink>
                    <AnchorLink href='#skills' style={{
                        textDecoration: 'none',
                        color: 'inherit'
                    }}>
                        <Button color='inherit'>
                            SKILLS
                        </Button>
                    </AnchorLink>
                    <AnchorLink href='#contact' style={{
                        textDecoration: 'none',
                        color: 'inherit'
                    }}>
                        <Button color='inherit'>
                            CONTACT
                        </Button>
                    </AnchorLink>
                    <AnchorLink href='#contact' style={{
                        textDecoration: 'none',
                        color: 'inherit'
                    }}>
                        <Button color='inherit'>
                            PortFolio
                        </Button>
                    </AnchorLink>
                    
                    <Button color='inherit'>
                        Neko
                    </Button>
                </Toolbar>
            </AppBar>
        </>
    );
}

export default NavBar;