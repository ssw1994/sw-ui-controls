export default function CardFooter(props) {
  return (
    <div className="sw-card-footer" {...props}>
      {props.children}
    </div>
  );
}
