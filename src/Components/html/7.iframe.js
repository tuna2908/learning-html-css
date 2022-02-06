import React from 'react';

/*
<iframe src="url" title="description"></iframe>
*/
export const Iframe = () => {
  return (
    <div>
      <iframe
        src="demo_iframe.htm"
        height="200"
        width="300"
        title="Iframe Example"
        style={{ border: 'none' }} //remove border from iframe
      ></iframe>

      <iframe
        src="demo_iframe.htm"
        name="iframe_a"     //target iframe used in anchor
        title="Iframe Example"
      ></iframe>

      <p>
        <a href="https://www.w3schools.com" 
        target="iframe_a"   //target iframe
        >
          W3Schools.com
        </a>
      </p>
    </div>
  );
};
