import React from 'react';

export const Form = () => {
  return (
    <div>
      {/**
       * @obselete
       * @action - script file, server handling file in sever side
       * @target - response display place. eg: blank: display res in new tab
       * @method - GET/POST - https method when submit form
       * @autocomplete - on/off -enable/disable auto complete
       */}
      <form action="/action_page.php" target="_blank">
        {/*sematic element*/}
        <label for="fname">First name:</label>
        {/*define label "for" form element(s). "for="id""*/}
        <br />
        <input type="text" id="fname" name="fname" />
        {/*input text. default width is 20 char*/}
        <br />
        <label for="lname">Last name:</label>
        {/*useful for screen-reader users*/}
        <br />
        <input type="radio" id="lname" name="lname" />
        {/*radio button. rbuttons with same name will be auto group*/}
        <br />
        <label for="lname">radio:</label>
        {/*with input with small area (cb, radio). click to their label to toggle it*/}
        <br />
        <input type="checkbox" id="lname" name="lname" />
        {/*each input should have name or it will not be submit in server form hanlder*/}
        <br />
        <label for="lname">submit:</label>
        <br />
        <input type="submit" id="lname" name="lname" />
        {/*obsolete in modern framework*/}
        <br />
        <label for="lname">button:</label>
        <br />
        <input type="button" id="lname" name="lname" />
        <br />
        <label for="cars">car drop down list:</label>
        <select id="cars" name="cars" size="3" multiple>
          {/*just dont do the "size" "multiple" thing, reasons: https://www.w3schools.com/html/tryit.asp?filename=tryhtml_elem_select_size*/}
          <option value="volvo" selected>
            Volvo
          </option>
          {/*mark as selected item*/}
          <option value="saab">Saab</option>
          <option value="fiat">Fiat</option>
          <option value="audi">Audi</option>
        </select>
        {/**
         *@row - display rows
         *@cols - display width
         *@style ="width:200px; height:600px;"
         */}
        <textarea name="message" rows="10" cols="30">
          The cat was playing in the garden.
        </textarea>
      </form>
      <fieldset>
        {/*group inputs in a section*/}
        <legend>Personalia:</legend>
        {/*label of that section*/}
        <label for="fname">First name:</label>
        <br />
        <input type="text" id="fname" name="fname" value="John" />
        <br />
        <label for="lname">Last name:</label>
        <br />
        <input type="text" id="lname" name="lname" value="Doe" />
        <br />
        <br />
        <input type="submit" value="Submit" />
      </fieldset>

      <form action="/action_page.php">
        {/**
         * input suggestion list
         * @list = datalistId
         * */}
        <input list="browsers" />
        <datalist id="browsers">
          <option value="Internet Explorer" />
          <option value="Firefox" />
          <option value="Chrome" />
          <option value="Opera" />
          <option value="Safari" />
        </datalist>
      </form>

      <form>
        {/*other input types*/}
        <input type="range" id="a" name="a" value="50" />
        {/*slider.*/}
        <input type="number" id="b" name="b" value="50" />
        {/*a numeric input field.*/}
        <input //text input
          type="text"
          id="fname"
          name="fname"
          readonly //can't be modified
          disabled //disblale from editing and style
          size="4" //size in character
          maxlength="4"
          pattern="[A-Za-z]{3}" //validation pattern with custom view
          title="Three letter country code" //tooltip
          placeholder="123-45-678" //short hint
          required //not allow empty
          autofocus //focus on element
          autocomplete="off"
        />
        <input type="password" id="pwd" name="pwd" /> {/*password field*/}
        <input type="reset" /> {/*reset all form's value to default*/}
        <form>
          {/*radio buttons with the same name*/}
          <input type="radio" id="html" name="fav" value="HTML" />
          <label for="html">HTML</label>
          <input type="radio" id="css" name="fav" value="CSS" />
          <label for="css">CSS</label>
          <input type="radio" id="fav" name="fav" value="JavaScript" />
          <label for="javascript">JavaScript</label>
        </form>
        <input type="button" onclick={() => {}} value="Click Me!" />
        <input //color selector
          type="color"
          id="favcolor"
          name="favcolor"
        />
        <input //date selector
          type="date"
          id="birthday"
          name="birthday"
          max="1979-12-31"
          min="2000-01-02"
        />
        <input //time selector: hh:mm:ss
          type="time"
          id="appt"
          name="appt"
        />
        <input type="week" id="week" name="week"></input>
        <input //should contain an e-mail address
          type="email"
          id="email"
          name="email"
        />
        <input
          type="tel"
          id="phone"
          name="phone"
          pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
        ></input>
        <input type="url" id="homepage" name="homepage"></input>
        <input //file browser
          type="file"
          id="myfile"
          name="myfile"
          multiple //multiple file selector
        />
        <input //useless 'cause can be edit by "view source"
          type="hidden"
          id="custId"
          name="custId"
          value="3487"
        />
        <input //numeric input with max min value range
          type="number"
          id="quantity"
          name="quantity"
          min="1"
          max="5"
          step="10"
          size="10" //size in character
        />
        <input type="range" id="vol" name="vol" min="0" max="50" />
        <input //search input
          type="search"
          id="gsearch"
          name="gsearch"
        />
        <input
          type="submit"
          formenctype="multipart/form-data" //summit data form. can be use to overide the submitting input
          formmethod="post" //obsolete for react user
          value="Submit as Multipart/form-data"
          formtarget="_blank" //response display place
        />
      </form>
    </div>
  );
};
