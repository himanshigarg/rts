const EventComponent: React.FC = () => {
  const onChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    console.log(event.target.value);
  };

  const onDragStart = (event: React.DragEvent<HTMLDivElement>) => {
    console.log('I am being dragged');
    console.log(event);
  };

  return (
    <div>
      <input onChange={onChange} />
      {/* //Inline event handler */}
      <input
        onChange={(e) => {
          console.log(e);
        }}
      />
      <div draggable onDragStart={onDragStart}>
        Drage Me!
      </div>
    </div>
  );
};

export default EventComponent;
