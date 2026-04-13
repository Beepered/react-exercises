//Lesson-03 Component Lifecycle, Hooks, State, and Props
//Exercise: React Bug Hunt – Fix the broken components in this folder
//Impport components here
import BugEffectLoop from './BugEffectLoop';
import BugMutatedState from './BugMutatedState';
import BugProps from './BugProps';

export default function StudentWork() {
  return (
    <div>
      {/* add components here */}
      <h3>1. Bug Effect Loop</h3>
      <BugEffectLoop></BugEffectLoop>
      <h3>2. Bug Mutated State</h3>
      <BugMutatedState></BugMutatedState>
      <h3>3. Bug Props</h3>
      <BugProps></BugProps>
    </div>
  );
}
