import React from 'react';
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';
import Icon from 'material-ui/Icon';
import { Link } from 'react-router-dom';
import { compose } from 'recompose';
import { withRouter } from 'react-router-dom';

const Header = ({ classes, location }) => {
  return (
    <header>
      <AppBar position="static">
        <Toolbar>
          <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="title" color="inherit" className={classes.flex}>
            React/Redux Starter Kit based on create-react-app
          </Typography>
          <Link to="/">
            <Button color="secondary" variant="raised">
              Sign In
            <Icon className={classes.signout}>input</Icon>
            </Button>
          </Link>
        </Toolbar>
      </AppBar>
    </header>
  )
}

const styles = {
  root: {
    flexGrow: 1
  },
  flex: {
    flex: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  },
  signout: {
    marginLeft: 10
  }
};

Header.propTypes = {
  classes: PropTypes.object.isRequired,
  router: PropTypes.object
};

export default compose(
  withStyles(styles),
  withRouter
)(Header);