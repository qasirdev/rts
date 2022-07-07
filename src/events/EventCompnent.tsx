const EventComponent = () => {
  const onChangeHandle = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e);
  };
  const onDragStartHandle = (e: React.DragEvent<HTMLDivElement>) => {
    console.log(e);
  };
  return (
    <div>
      <input onChange={onChangeHandle} />;
      <div draggable onDragStart={onDragStartHandle}></div>
    </div>
  );
};

export default EventComponent;
