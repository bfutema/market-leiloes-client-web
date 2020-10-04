import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
// import FilterListIcon from '@material-ui/icons/FilterList';

import { useToolbarStyles } from './styles';

export default function EnhancedTableToolbar({ title, numSelected }) {
  const classes = useToolbarStyles();

  return (
    <Toolbar
      className={String(clsx(classes.root), {
        [classes.highlight]: numSelected > 0,
      })}
    >
      {numSelected > 0 ? (
        <Typography
          className={classes.title}
          color="inherit"
          variant="subtitle1"
          component="div"
        >
          {numSelected} selecionados
        </Typography>
      ) : (
        <Typography
          className={classes.title}
          variant="h6"
          id="tableTitle"
          component="div"
        >
          {title}
        </Typography>
      )}
      {numSelected > 0 && (
        <Tooltip title="Deletar">
          <IconButton aria-label="delete">
            <DeleteIcon />
          </IconButton>
        </Tooltip>
      )}
    </Toolbar>
  );
}

// ) : (
//   <Tooltip title="Filtrar">
//     <IconButton aria-label="filter list">
//       <FilterListIcon />
//     </IconButton>
//   </Tooltip>
// )}

EnhancedTableToolbar.defaultProps = {
  numSelected: 0,
};

EnhancedTableToolbar.propTypes = {
  title: PropTypes.string.isRequired,
  numSelected: PropTypes.number,
};
