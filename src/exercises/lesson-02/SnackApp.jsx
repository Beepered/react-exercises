/*
Seems pretty pointless. 
Why not just put the other components into studentWork.jsx.
Following the instructions, though they actually don't say make this component until the end when it says to import
*/

import SnackHeader from './SnackHeader';
import SnackList from './SnackList';
import SnackFooter from './SnackFooter';

export default function SnackApp() {
  return (
    <div>
      {/* add JSX here */}
      <SnackHeader></SnackHeader>
      <SnackList></SnackList>
      <SnackFooter></SnackFooter>
    </div>
  );
}
