import { useEffect, useState } from 'react';
import { Filter } from './utils/Filter';
import { DataFetch } from './hooks/DataFetch';
import Profile from './components/Profile';
import TaskItem from './components/TaskItem';
import TaskFilter from './components/TaskFilter';

export default function StudentWork() {
  const [filter, setFilter] = useState('all');

  //  #1: Data fetching + state + UI logic all mixed together
  const { tasks, loading } = DataFetch();

  // #2: Filtering logic inside component
  let visibleTasks = Filter(tasks, filter);

  if (loading) {
    return <p>Loading tasks...</p>;
  }

  return (
    <div>
      {/* #3: Hardcoded UI, not reusable */}
      <Profile name={'Beeb'}></Profile>

      {/* #4: Repeated button JSX */}
      <TaskFilter onClick={setFilter}></TaskFilter>

      {/* #5: Inline list rendering */}
      <ul>
        {visibleTasks.map((task) => (
          <li key={task.id}>
            <TaskItem title={task.title} completed={task.completed}></TaskItem>
          </li>
        ))}
      </ul>
    </div>
  );
}
