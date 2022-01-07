import React from 'react';

export const Test = () => {
  return (
    <div>
      <h1>This is a Heading</h1> {/* a large heading */}
      <p>This is a paragraph.</p> {/* a paragraph */}
      <br /> {/* an empty element */}
    </div>
  );
};

const Headings = () => {
  //6 type of Heading, desc from size. h1 has largest texts
  //h1 most important, h6 least important
  //heading used in search engine => important
  return (
    <div>
      <h1>This is heading 1</h1>
      <h2>This is heading 2</h2>
      <h3>This is heading 3</h3>
      <h4>This is heading 4</h4>
      <h5>This is heading 5</h5>
      <h6>This is heading 6</h6>
    </div>
  );
};

const Paragraph = () => {
  return (
    <div>
      <p>This is a paragraph.</p>
      <p>This is another paragraph.</p>
      <p>
        This is p with break (empty element) <br /> paragraph with a line break.
      </p>
      <p title="I'm a tooltip">
        This is a paragraph with tooltip in title attrib
      </p>
      <p title='John "ShotGun" Nelson'></p>{' '}
      {/*single quote contains double quotes */}
      <p title="John 'ShotGun' Nelson"></p> {/*and vice versa */}
      <div>
        {/*paragraph with sepreate content line (empty element) <hr/> */}
        <p>This is some text.</p>
        <hr />
        <h2>This is heading 2</h2>
        <p>This is some other text.</p>
        <hr />
      </div>
      <pre>
        {' '}
        {/*pre format text. just as what you want */}
        My Bonnie lies over the ocean. My Bonnie lies over the sea. My Bonnie
        lies over the ocean. Oh, bring back my Bonnie to me.
      </pre>
      <div>
        {/*format text */}
        <pre>
          <b>This text is bold</b>
          <strong>This text is bold</strong> {/* = bold*/}
          <i>This text is italic.</i>
          <em>This text is emphasized</em> {/* = italic*/}
          <small>This is some smaller text.</small>
          <mark>Hightlight text</mark> {/* highlight*/}
          <del>deleted text</del> {/* strike text*/}
          <ins>underline text</ins>
          <sub>sub text (the small text bellow)</sub>
          <sup>superscripted</sup> {/*like power text (upper)*/}
        </pre>
      </div>
      <div>
        <p>Here is a quote from WWF's website:</p>
        <blockquote cite="http://www.worldwildlife.org/who/index.html">
          {/*citing quotes from a link*/}
          <q>
            {/* quotes sign*/}
            For 50 years, WWF has been protecting the future of nature. The
            world's leading conservation organization, WWF works in 100
            countries and is supported by 1.2 million members in the United
            States and close to 5 million globally.
          </q>
        </blockquote>

        <p>
          {/* abbreviation tooltip => word for short*/}
          The <abbr title="World Health Organization">WHO</abbr> was founded in
          1948.
          <cite>The Scream</cite> {/* cite text render in italics*/}
          <bdo dir="rtl">This text will be written from right to left</bdo>{' '}
          {/*text direction: Bi-Directional Override. "rtl" = right to left*/}
        </p>

        <address>
          {' '}
          {/* address, url, email... description in italic and font-family: ahi*/}
          Written by John Doe.
          <br />
          Visit us at:
          <br />
          Example.com
          <br />
          Box 564, Disneyland
          <br />
          USA
        </address>
      </div>
      <p>   {/*use span to markup text in paragraph*/}
        My mother has <span style="color:blue;font-weight:bold">blue</span> eyes
        and my father has{' '}
        <span style="color:darkolivegreen;font-weight:bold">dark green</span> {/*span is a inline*/}
        eyes.
      </p>
    </div>
  );
};

const Anchor = () => {
  return (
    <>
      <a href="https://www.w3schools.com">This is a link</a>
      <a href="https://www.w3schools.com" title="tooltip text">
        This is a link with tooltip
      </a>
      {/*
      _self - Default. Opens the document in the same window/tab as it was clicked
      _blank - Opens the document in a new window or tab
      _parent - Opens the document in the parent frame
      _top - Opens the document in the full body of the window 
      */}
      <a href="https://www.w3schools.com" title="tooltip text" target="_blank">
        This is a link open in new tab
      </a>

      <div>
        <h2>Absolute URLs</h2>
        <a href="https://www.w3.org/">W3C</a>
        <a href="https://www.google.com/">Google</a>
        <h2>Relative URLs</h2> {/*same origin with the sites */}
        <a href="html_images.asp">HTML Images</a>
        <a href="/css/default.asp">CSS Tutorial</a>
      </div>

      <div>
        <a href="default.asp">
          {' '}
          {/*use Image as a Link */}
          <img
            src="smiley.gif"
            alt="HTML tutorial"
            style="width:42px;height:42px;"
          />
        </a>
        <a href="mailto:someone@example.com">Send email</a>{' '}
        {/*use to open email sender */}
        <button
          onclick={() => {
            //button to open a like "document.location='default.asp'"
          }}
        >
          HTML Tutorial
        </button>
      </div>

      <div>
        <h2 id="C4">Chapter 4</h2>
        <a href="#C4">Jump to Chapter 4</a> {/*jump to id C4 */}
        <a href="html_demo.html#C4">Jump to Chapter 4</a>{' '}
        {/*jump to id C4 in html_demo*/}
      </div>
    </>
  );
};

const Images = () => {
  return (
    <>
      <img src="w3schools.jpg" alt="W3Schools.com" width="104" height="142" />
      <img
        src="img_girl.jpg"
        alt="alt text when image cannot be displayed"
      ></img>

      <img src="html5.gif" alt="HTML5 Icon" width="128" height="128" />

      <img
        src="html5.gif" //source gif
        alt="HTML5 Icon" //https://www.w3schools.com/html/tryit.asp?filename=tryhtml_images_style
        style={{ width: 128, height: 128 }} //prefered way because width and height will not be overrided by parent style
      />

      <img
        src="https://www.w3schools.com/images/w3schools_green.jpg" //source url
        alt="W3Schools.com"
      />

      <a href="default.asp">
        {' '}
        {/*image to open link */}
        <img
          src="smiley.gif"
          alt="HTML tutorial"
          style="width:42px;height:42px;"
        />
      </a>

      <div>
        <img src="workplace.jpg" alt="Workplace" usemap="#workmap" />{' '}
        {/**image wanna create clickable */}
        <map name="workmap">
          <area /**area laptop with coords */
            shape="rect"
            coords="34,44,270,350"
            alt="Computer"
            href="computer.htm"
          />
          <area
            shape="rect"
            coords="290,172,333,250"
            alt="Phone"
            href="phone.htm"
          />
          <area
            shape="circle"
            coords="337,300,44" /**area coffee with at (337,300) radius: 44 */
            alt="Coffee"
            href="coffee.htm"
          />
          <area
            shape="poly" //area of any shape
            coords="140,121,181,116,204,160,204,222,191,270,140,329,85,355,58,352,37,322,40,259,103,161,128,147"
            href="croissant.htm"
          ></area>
        </map>
      </div>
      <div>
        <div //by defaut repeat itself, horizontally and vertically, until it reaches the end of the element
          style={{
            backgroundImage: "url('img_girl.jpg')", //background image
            backgroundRepeat: 'no-repeat', //prevent repeating
            backgroundSize: 'cover', //cover the whole div
            backgroundAttachment: 'fixed', //make sure img cover the whole div
            backgroundSize: '100% 100%', //strecth the image size by the parent tag (eg: div, body, etc)
          }}
        />
      </div>

      <div>
        <picture>
          {' '}
          {/*support all screen size via attrib media, and all image format via srcset */}
          <source media="(min-width: 650px)" srcset="img_food.jpg" />
          <source media="(min-width: 650px)" srcset="img_car.jpg" />
          <img src="img_girl.jpg" />{' '}
          {/*must specify if no browser support tag <picture/> */}
        </picture>
      </div>
    </>
  );
};
