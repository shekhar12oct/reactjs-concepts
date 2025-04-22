import React from 'react';

// Only re-renders when the props gets changed
const UsememoUseCallbackReactMemo = React.memo(({ number, onClick }) => {
  console.log('UsememoUseCallbackReactMemo component');
  return (
    <div>
      <p>Number: {number}</p>
      <button onClick={onClick}>UsememoUseCallbackReactMemo Button</button>
    </div>
  );
});

export default UsememoUseCallbackReactMemo;
