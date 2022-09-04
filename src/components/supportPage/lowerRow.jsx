export default function (props) {
  return (
    <div className="relative text-white">
      <img src={props.img} alt="" />
      <div className="w-full h-full flex items-end justify-start md:items-center absolute top-0 left-0">
        <div className="p-4 pb-6">
          <div className="md:text-base text-2xl font-semibold">
            {props.heading}
          </div>
          {props.text ? <div className="text-sm">{props.text}</div> : null}
        </div>
      </div>
    </div>
  );
}
{
  /* <div
  className={` items-end justify-start flex-1 basis-full grid flex-col ${url} bg-cover bg-center`}
>
  <div className="p-4 pb-6">
    <div className="text-2xl font-semibold">{props.heading}</div>
    {props.text ? <div className="text-sm">{props.text}</div> : null}
  </div>
</div>; */
}
