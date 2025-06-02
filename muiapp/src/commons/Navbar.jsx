import React, { useEffect, useState } from 'react';
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    setIsAuthenticated(!!token);
  }, []);

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  const navLinks = [
    { text: "HOME", path: "/" },
    { text: "FEATURES", path: "/features" },
    { text: "INTERNSHIPS", path: "/internships" },
    { text: "COURSES", path: "/courses" }
  ];

  return (
    <nav className="w-full bg-white shadow-md px-4 sm:px-6 py-4 flex items-center justify-between">
      {/* Logo */}
      <div className="text-2xl font-bold text-blue-700">MboaConnect</div>

      {/* Desktop Nav Items */}
      <ul className="hidden md:flex gap-8 font-bold text-black">
        {navLinks.map(({ text, path }) => (
          <li key={text} className="hover:text-blue-700 cursor-pointer">
            <Link to={path}>{text}</Link>
          </li>
        ))}
      </ul>

      {/* Auth Buttons (Desktop) */}
      <div className="hidden md:flex gap-4">
        {!isAuthenticated ? (
          <>
            <Link to="/login">
              <Button variant="outlined" className="!border-blue-700 !text-blue-700 hover:!bg-blue-100">
                Log In
              </Button>
            </Link>
            <Link to="/signup">
              <Button variant="contained" className="!bg-blue-700 !font-bold !text-white">
                Sign Up
              </Button>
            </Link>
          </>
        ) : (
          <Link to="/dashboard">
            <Button className="!bg-blue-700 !text-white">
              Dashboard
            </Button>
          </Link>
        )}
      </div>

      {/* Hamburger Menu (Mobile) */}
      <div className="md:hidden">
        <IconButton onClick={toggleDrawer(true)}>
          <MenuIcon className="text-blue-700" />
        </IconButton>
        <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
          <div className="w-[250px]" role="presentation" onClick={toggleDrawer(false)}>
            <List>
              {navLinks.map(({ text, path }) => (
                <Link key={text} to={path}>
                  <ListItem button>
                    <ListItemText primary={text} />
                  </ListItem>
                </Link>
              ))}
            </List>
            <Divider />
            <div className="p-4 flex flex-col gap-2">
              {!isAuthenticated ? (
                <>
                  <Link to="/login">
                    <Button variant="outlined" className="!border-blue-700 !text-blue-700 hover:!bg-blue-100" fullWidth>
                      Log In
                    </Button>
                  </Link>
                  <Link to="/signup">
                    <Button variant="contained" className="!bg-blue-700 !text-white !font-bold" fullWidth>
                      Sign Up
                    </Button>
                  </Link>
                </>
              ) : (
                <Link to="/dashboard">
                  <Button variant="contained" className="!bg-blue-700 !text-white" fullWidth>
                    Dashboard
                  </Button>
                </Link>
              )}
            </div>
          </div>
        </Drawer>
      </div>
    </nav>
  );
};

export default Navbar;
