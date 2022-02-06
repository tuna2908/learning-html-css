import React from 'react';

export const Canvas = () => {
  useEffect(() => {
    let c = document.getElementById('myCanvas');
    let ctx = c.getContext('2d');
    ctx.moveTo(0, 0); //drawing config
    ctx.lineTo(200, 100);
    ctx.stroke(); //start drawing
  }, []);
  return (
    <div>
      {/*js must be used to do the drawing*/}
      <canvas id="myCanvas" width="200" height="100"></canvas>
    </div>
  );
};
