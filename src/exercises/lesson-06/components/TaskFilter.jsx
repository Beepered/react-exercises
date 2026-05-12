export default function TaskFilter({ onClick }) {
  return (
    <div>
      <button onClick={() => onClick('all')}>All</button>
      <button onClick={() => onClick('completed')}>Completed</button>
      <button onClick={() => onClick('pending')}>Pending</button>
      <p>Current filter: {}</p>
    </div>
  );
}
