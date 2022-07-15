import './menu.scss'
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MenuIcon from '@mui/icons-material/Menu';
import React from 'react';

function MobileMenu() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const styling = {
        color: "black",
        "padding": "10px",
        "text-decoration": "none",
    };

    return (
        <div className="menu-button">
                <Button
                    id="basic-button"
                    aria-controls={open ? 'basic-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleClick}
                    sx={{
                        margin: "50px",
                        "background-color": "#637786",
                        "background-opacity": "50%",
                        "border-radius": "50%",
                        padding: "10px",

                        "&:hover": {
                            "background-color": "snow",
                        },
                    }}
                >
                    <MenuIcon sx={{
                        color: "#06101e",
                        "font-size": "3rem",
                    }} />
                </Button>
                <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                    'aria-labelledby': 'basic-button',
                    }}
                    sx={{
                        "ul": {
                            "background-color": "snow",
                        },
                    }}
                >
                    <MenuItem onClick={handleClose}><a style={styling}  href="#intro">Home</a></MenuItem>
                    <MenuItem onClick={handleClose}><a style={styling} href="#about">About</a></MenuItem>
                    <MenuItem onClick={handleClose}><a style={styling} href="#works">Projects</a></MenuItem>
                    <MenuItem onClick={handleClose}><a style={styling} href="#contact">Contact</a></MenuItem>
                </Menu>
            </div>
    )
}

export default MobileMenu
