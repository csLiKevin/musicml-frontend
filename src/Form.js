import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  input: {
    margin: theme.spacing.unit,
  },
  button: {
    margin: theme.spacing.unit,
  },
});

function Inputs(props) {
  const { classes } = props;
  return (
    <div className={classes.container}>
      <div className="form-row">
        <Input
          defaultValue="First name"
          className={classes.input}
          inputProps={{
            'aria-label': 'First name',
          }}
        />
        <Input
          placeholder="Last name"
          className={classes.input}
          inputProps={{
            'aria-label': 'Last name',
          }}
        />
      </div>
      <div className="form-row">
      <Input
          placeholder="Email address"
          className={classes.input}
          inputProps={{
            'aria-label': 'Email address',
          }}
        />
      </div>
      <div className="form-row">
        <Button variant="contained" className={classes.button}>
          Submit
        </Button>
      </div>
    </div>
  );
}

Inputs.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Inputs);