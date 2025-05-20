import "./Icon.scss"

export default function CornerDotsIcon(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" {...props}>
      <circle cx="5" cy="5" r="5" />
      <circle cx="27" cy="5" r="5" />
      <circle cx="5" cy="27" r="5" />
      <circle cx="27" cy="27" r="5" />
    </svg>
  );
}