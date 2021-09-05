const EventComponent: React.FC = () => {

    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        console.log(event.target.value);
    }

    const onDragStart = (event: React.DragEvent<HTMLDivElement>) => {
        console.log('I am being dragged');
        console.log(event);
    }

  return (
    <div>
      <input
        onChange={onChange}
      />
      <div draggable onDragStart={onDragStart}>Drage Me!</div>
    </div>
  );
};

export default EventComponent;
