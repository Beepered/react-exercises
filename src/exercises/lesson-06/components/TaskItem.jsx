export default function TaskItem({ title, completed }) {
  return (
    <p>
      {title} {completed ? '✅' : '⏳'}
    </p>
  );
}
