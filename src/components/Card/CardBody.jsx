export default function CardBody(props) {
  return (
    <div className="sw-card-body" {...props}>
      {props.children}
    </div>
  );
}
