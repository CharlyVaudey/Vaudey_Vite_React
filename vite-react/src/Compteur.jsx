export default function Compteur({count, setCount, incr}) {
  return <button onClick={() => setCount(count + incr)}>+ {incr}</button>
}