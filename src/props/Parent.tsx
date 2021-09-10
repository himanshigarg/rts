import { ChildAsFC } from './Child';

const Parent = () => {
  return (
    <>
      {/* <Child>sdfls</Child> */}
      <ChildAsFC
        color='red'
        onClick={() => {
          console.log('clicked');
        }}
      >
        sdjlf
      </ChildAsFC>
    </>
  );
};

export default Parent;
