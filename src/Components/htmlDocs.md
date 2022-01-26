Every HTML element is display as: block and inline.

https://www.w3schools.com/html/html_blocks.asp

BLOCK ELEMENT
- A Block element can contain other element
- A block-level element always starts on a new line.
- A block-level element always takes up the full width available (stretches out to the left and right as far as it can).
- A block level element has a top and a bottom margin, whereas an inline element does not.

Inline Elements
- An inline element can't contain other element
- An inline element does not start on a new line.
- An inline element only takes up as much width as necessary.
- This is a <span> element inside a paragraph.

HTML id Attribute
- usage: specify element
    - CSS syntax:
        #myHeader {
            background-color: lightblue;
            color: black;
            padding: 40px;
            text-align: center;
        }
    - HTML Bookmarks with ID and Links
- class vs id:
    - class for multiple items
    - id for one item

BEST PRACTICE
- path
    - abs path: <img src="https://www.w3schools.com/images/picture.jpg" alt="Mountain">
    - relative path: <img src="../images/picture.jpg" alt="Mountain">
- It is best practice to use relative file paths (if possible).
- When using relative file paths, your web pages will not be bound to your current base URL. All links will work on your own computer (localhost) as well as on your current public domain and your future public domains.

The HTML <head> Element
- Contain meta data
- The HTML <title> Element
    - Document (tab) title
    - Required for HTML documents
    - important for search engine optimization (SEO)
- The HTML <style> Element
    eg : <style>
            body {background-color: powderblue;}
            h1 {color: red;}
            p {color: blue;}
        </style>
- The HTML <link> Element: <link rel="stylesheet" href="mystyle.css">
- The HTML <meta> Element
    - <meta charset="UTF-8"> //character format
    - <meta name="keywords" content="HTML, CSS, JavaScript"> //key words for search engine
    - <meta name="viewport" content="width=device-width, initial-scale=1.0">    
        - width=device-width part sets the width
        - initial-scale=1.0 part sets the initial zoom level 

- The HTML <script> Element
    - <script>
        function myFunction() {
            document.getElementById("demo").innerHTML = "Hello JavaScript!";
        }
    </script>

HTML Layout Elements (block elements): https://www.w3schools.com/html/html_layout.asp
- <header> - Defines a header for a document or a section
- <nav> - Defines a set of navigation links
- <section> - Defines a section in a document
- <article> - Defines an independent, self-contained content
- <aside> - Defines content aside from the content (like a sidebar)
- <footer> - Defines a footer for a document or a section

HTML Layout Techniques
There are four different techniques to create multicolumn layouts
- CSS framework
    - Bootrap or W3.CSS
- CSS float property
    - advantage: 
        - can do entire web layouts (with float and position)
        - easy to learn:  just need to remember how the <i>float<i> and <i>clear<i> properties work
    - disadvantage:
        -  tied to the document flow, which may harm the flexibility.
- CSS flexbox
    - the page layout must accommodate different screen sizes and different display devices.
    - recommended way
- CSS grid
    - pretty advanced way of styling
    - easier to design


What is Responsive Web Design?
- Idea: Responsive Web Design is about using HTML and CSS to automatically resize, hide, shrink, or enlarge, a website, to make it look good on all devices (desktops, tablets, and phones)
- Responsive Images
    - If the CSS width property is set to 100%, the image will be responsive and scale up and down:
        - eg: <img src="img_girl.jpg" style="width:100%;">
        - the image can be scaled up to be larger than its original size. resolve by using max-witdth
    - Using the max-width Property
        - set to 100% to restrict upper scale
        - eg: <img src="img_girl.jpg" style="max-width:100%;height:auto;">
    - Using tag <picture/>

- Responsive Text Size
    - "vw" unit, which means the "viewport width" => varied by viewport width
    - 1vw = 1% of viewport width. If the viewport is 50cm wide, 1vw is 0.5cm.

- Media Queries
    - you can define completely different styles
    - eg: 
    .left, .right {
        float: left;
        width: 20%; /* The width is 20%, by default */
    }

    .main {
        float: left;
        width: 60%; /* The width is 60%, by default */
    }

    /* Use a media query to add a breakpoint at 800px => multirow */
    @media screen and (max-width: 800px) {
        .left, .main, .right {
            width: 100%; /* The width is 100%, when the viewport is 800px or smaller */
        }
    }

Computer code format: https://www.w3schools.com/html/html_computercode_elements.asp
- <code>	Defines programming code
- <kbd>	    Defines keyboard input (mini and diff state)
- <samp>	Defines computer output

Best Practices: 
1. Always Quote Attribute Values
- Good: <table class="striped">
- Bad: <table class=striped>
- Very bad: <table class=table striped>

2. Always Specify alt, width, and height for Images
- Good: <img src="html5.gif" alt="HTML5" style="width:128px;height:128px">
- Bad: <img src="html5.gif">

3. Avoid redundant space
4. Advoid Long Code lines
5. Do not add blank lines, spaces, or indentations without a reason.
6. Never Skip the <title> Element
- Important for SEO

7. Add the lang Attribute (This is meant to assist search engines and browsers.)
8. Meta Data (To ensure proper interpretation and correct search engine indexing)
9. Setting The Viewport
- eg: <meta name="viewport" content="width=device-width, initial-scale=1.0">
10. Using Style Sheets
- Use simple syntax for linking to style sheets (the type attribute is not necessary)
11. Loading JavaScript in HTML
- load from seperate source file is recommended: <script src="myscript.js">
12. Differences Between .htm and .html? (no diff)
13. Default Filenames
- "index.html", "index.htm", "default.html", or "default.htm".


HTML Entities
- syntax: 
    - &entity_name; - eg: &lt; 
    - &#entity_number; - eg: &#60;
- common entity
    - &nbsp; - not breaking words
- ref: 
    - https://www.w3schools.com/html/html_entities.asp
    - https://www.w3schools.com/html/html_symbols.asp
    - https://www.w3schools.com/html/html_emojis.asp
Using Emojis in HTML
- set <meta charset="UTF-8">
- some emoji example: 
    😄 is 128516
    😍 is 128525
    💗 is 128151

HTML Uniform Resource Locators
- def: A URL is another word for a web address.

- usage: used to address a document (or other data) on the web.
    - eg:  https://www.w3schools.com/html/default.asp - define address to access the doc default.asp
           https://www.w3schools.com/ - define address to access the html index.html

- syntax: <span>scheme://prefix.domain:port/PATH/filename<span>
    scheme - defines the type of Internet service (most common is http or https)
    prefix - defines a domain prefix (default for http is www)
    domain - defines the Internet domain name (like w3schools.com)
    port - defines the port number at the host (default for http is 80)
    PATH - defines a path at the server (If omitted: the root directory of the site)
    filename - defines the name of a document or resource

- ref: https://www.w3schools.com/html/html_urlencode.asp
- URL Encoding
    - URLs can only be sent over the Internet using the ASCII character-set. If a URL contains characters outside the ASCII set, the URL has to be converted.
    - URL encoding replaces non-ASCII characters with a "%" followed by hexadecimal digits.
        eg: £	%A3, ©	%A9

HTML Versus XHTML
- XHTML is a stricter, more XML-based version of HTML.
- concepts
    XHTML stands for EXtensible HyperText Markup Language
    XHTML is a stricter, more XML-based version of HTML
    XHTML is HTML defined as an XML application
    XHTML is supported by all major browsers


CANVAS AND SVG
- ref: https://www.w3schools.com/html/html5_svg.asp

HTML MEDIA
- list supported media: https://www.w3schools.com/html/html_media.asp


WEB STORAGE API
- local/session storage vs cookies (frm server and have to be request all the time)
- ref: https://www.w3schools.com/html/html5_webstorage.asp

WEB WORKER API
- ref: https://www.youtube.com/watch?v=1QFTfbDXJCI&ab_channel=AtilaIO
- ref2: https://www.w3schools.com/html/html5_webworkers.asp