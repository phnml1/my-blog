interface LineProps {
  mt:string
}
const Line: React.FC<LineProps> = (props) => {
  const margin = `mt-${props.mt}`;
  return (<hr className={`border-1 w-full border-neutral-200 dark:border-neutral-700 transition-all ${margin}`}></hr>)
}
export default Line;