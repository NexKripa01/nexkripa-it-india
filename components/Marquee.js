export default function Marquee({ items = [] }) {
  const doubled = [...items, ...items];
  return <div className="marquee"><div className="marquee-track">{doubled.map((x,i)=><span key={i}>{x}<b>✦</b></span>)}</div></div>;
}
