export default function (props) {
  const url = `bg-[url(${props.img})]`;
  return (
    <div
      className={` items-end justify-start flex-1 basis-full grid flex-col ${url} bg-cover bg-center`}
    >
      <div className="p-4 pb-6">
        <div className="text-2xl font-semibold">{props.heading}</div>
        {props.text ? <div className="text-sm">{props.text}</div> : null}
      </div>
    </div>
  );
}
