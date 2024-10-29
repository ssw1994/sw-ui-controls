export default function CardMedia(props) {
  return (
    <div className="sw-card-media" {...props}>
      {props.children}
    </div>
  );
}
