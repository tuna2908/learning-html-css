import React from 'react';

//{/**/}

export const list = () => {
  return (
    <>
      <ul>
        {/*unorder list*/}
        <li>Coffee</li>
        <li>Tea</li>
        <li>Milk</li>
      </ul>

      <ol>
        {/*order list*/}
        <li>Coffee</li>
        <li>Tea</li>
        <li>Milk</li>
      </ol>

      <dl>
        {/*decribe description list*/}
        <dt>Coffee</dt> {/*Defines a term in a description list (term name)*/}
        <dd>- black hot drink</dd> {/*term details list*/}
        <dt>Milk</dt>
        <dd>- white cold drink</dd>
      </dl>

      <ul>
        {' '}
        {/*nested list*/}
        <li>Coffee</li>
        <li>
          Tea
          <ul>
            <li>Black tea</li>
            <li>Green tea</li>
          </ul>
        </li>
        <li>Milk</li>
      </ul>

      <ol type="1" start="50"> {/*A,a,I,i and start at*/}
        <li>Coffee</li>
        <li>Tea</li>
        <li>Milk</li>
      </ol>
    </>
  );
};
