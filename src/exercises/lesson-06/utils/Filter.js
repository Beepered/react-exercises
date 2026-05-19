export function Filter(list, filter) {
  if (filter === 'completed') {
    return list.filter((task) => task.completed);
  } else if (filter === 'pending') {
    return list.filter((task) => !task.completed);
  } else {
    return list;
  }
}
