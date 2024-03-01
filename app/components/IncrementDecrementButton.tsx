export default function IncrementDecrementButton({
   count,
   setCount,
}: {
   count: number;
   setCount: (previousCount: number) => void;
}) {
   return (
      <div>
         <button onClick={() => setCount(count - 1)}>-</button>
         <span>{count}</span>
         <button onClick={() => setCount(count + 1)}>+</button>
      </div>
   );
}
