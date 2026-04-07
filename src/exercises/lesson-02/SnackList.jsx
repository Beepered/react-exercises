export default function SnackList() {
  /*
  instructions are weird and ask for a rank, but then ask to sort it
  You can't sort by rank, so I'll make it an array with "rank" in the name and leave it as this ugly ordered list
  */

  let snacks = [
    '5. peeled bread',
    '4. jerky',
    '3. ice cream',
    '2. apples',
    '1. peanuts',
  ];

  return (
    <ol>
      {snacks.toSorted().map((snack) => (
        <li>{snack}</li>
      ))}
    </ol>
  );
}
