export function handleSelectAllClick(e, rows, setSelected) {
  if (e.target.checked) {
    const newSelecteds = rows.map((r) => r.id);
    setSelected(newSelecteds);
    return;
  }
  setSelected([]);
}

export function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);

  stabilizedThis.sort((a, b) => {
    const orderOp = comparator(a[0], b[0]);
    if (orderOp !== 0) return orderOp;
    return a[1] - b[1];
  });

  return stabilizedThis.map((el) => el[0]);
}

export function descendingComparator(a, b, orderByOp) {
  if (b[orderByOp] < a[orderByOp]) {
    return -1;
  }
  if (b[orderByOp] > a[orderByOp]) {
    return 1;
  }
  return 0;
}

export function getComparator(orderOp, orderByOp) {
  return orderOp === 'desc'
    ? (a, b) => descendingComparator(a, b, orderByOp)
    : (a, b) => -descendingComparator(a, b, orderByOp);
}

export function isSelected(id, selected) {
  return selected.indexOf(id) !== -1;
}

export function handleClick(event, id, selected, setSelected) {
  const selectedIndex = selected.indexOf(id);
  let newSelected = [];

  if (selectedIndex === -1) {
    newSelected = newSelected.concat(selected, id);
  } else if (selectedIndex === 0) {
    newSelected = newSelected.concat(selected.slice(1));
  } else if (selectedIndex === selected.length - 1) {
    newSelected = newSelected.concat(selected.slice(0, -1));
  } else if (selectedIndex > 0) {
    newSelected = newSelected.concat(
      selected.slice(0, selectedIndex),
      selected.slice(selectedIndex + 1)
    );
  }

  setSelected(newSelected);
}
