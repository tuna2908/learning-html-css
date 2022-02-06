import React from 'react';

export const Table = () => {
  return (
    <>
      <table>
        <tr>
          {/*table row */}
          <td>Emil</td> {/*table data */}
          <td>Tobias</td>
          <td>Linus</td>
        </tr>
        <tr>
          <td>16</td>
          <td>14</td>
          <td>10</td>
        </tr>
      </table>

      <table>
        <tr>
          <th>Person 1</th> {/*table header */}
          <th>Person 2</th>
          <th>Person 3</th>
        </tr>
        <tr>
          <td>Emil</td>
          <td>Tobias</td>
          <td>Linus</td>
        </tr>
        <tr>
          <td>16</td>
          <td>14</td>
          <td>10</td>
        </tr>
      </table>

      <table style="width:100%">
        {/*width 100% compare to its parents */}
        <tr>
          <th style="width:70%">Firstname</th>{' '}
          {/*width 70% compare to its parents */}
          <th>Lastname</th>
          <th>Age</th>
        </tr>
        <tr>
          <td>Jill</td>
          <td>Smith</td>
          <td>50</td>
        </tr>
        <tr>
          <td>Eve</td>
          <td>Jackson</td>
          <td>94</td>
        </tr>
      </table>

      <table>
        {/*vertical table header */}
        <tr>
          <th>Firstname</th>
          <td>Jill</td>
          <td>Eve</td>
        </tr>
        <tr>
          <th>Lastname</th>
          <td>Smith</td>
          <td>Jackson</td>
        </tr>
        <tr>
          <th>Age</th>
          <td>94</td>
          <td>50</td>
        </tr>
      </table>

      <table>
        <caption>Monthly savings</caption> {/*table caption */}
        <tr>
          <th colspan="2">Name</th>{' '}
          {/*a header that spans over TWO columns. only attrib in <th> or <td>*/}
          <th>Age</th>
        </tr>
        <tr>
          <td>Jill</td>
          <td>Smith</td>
          <td>50</td>
        </tr>
        <tr>
          <td>Eve</td>
          <td>Jackson</td>
          <td>94</td>
        </tr>
      </table>

      <table>
        <tr>
          <th>Name</th>
          <td>Jill</td>
        </tr>
        <tr>
          <th rowspan="2">Phone</th>{' '}
          {/*a header that spans over TWO rows. only attrib in <th> or <td>*/}
          <td>555-1234</td>
        </tr>
        <tr>
          <td>555-8745</td>
        </tr>
      </table>

      <table>
        {/**
         * width property
         * visibility property
         * background properties
         * border properties
         */}
        <colgroup>
          {' '}
          {/*style specific columns. child of table, before anything else but <caption/> */}
          <col span="2" style="background-color: #D6EEEE" />
          {/*styling 2 columns (span=2)*/}
          <col span="3" style="background-color: pink"></col>
          {/*styling next 3 columns (span=2)*/}
          <col span="3" style="visibility: collapse"></col>
          {/*hide columns*/}
        </colgroup>
        <tr>
          <th>MON</th>
          <th>TUE</th>
          <th>WED</th>
          <th>THU</th>
        </tr>
      </table>
    </>
  );
};
