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
using CSS

- Inline - by using the style attribute inside HTML elements
- Internal - by using a <style> element in the <head> section
- External - by using a <link> element to link to an external CSS file (MOST COMMON WAY)
  <head>
    <link rel="stylesheet" href="styles.css">   //link tag to ref external css files
  </head>


using class attrib in tag: https://www.w3schools.com/html/html_classes.asp
- usage
- syntax:
  .classname {}
- Different Elements Can Share Same Class
- Multiple Classes

CSS Selectors
- CSS syntax
  - general format: selector {property:value;}
- selector format:
- Simple selectors
  - id: #id {}
  - class: .classname {}
  - element: elementName {}

Cascading Order
- Inline style (inside an HTML element)
- External and internal style sheets (in the head section)
- Browser default

The total width of an element should be calculated like this:
- Total element width = width + left padding + right padding + left border + right border + left margin + right margin
- Total element height = height + top padding + bottom padding + top border + bottom border + top margin + bottom margin


GOOGLE FONTS
- usage
  - add ref link to google fonts: <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Audiowide|Sofia|Trirong">
  - use normally in css: 
    - h1.a {font-family: "Audiowide", sans-serif;}
    - h1.b {font-family: "Sofia", sans-serif;}
    - h1.c {font-family: "Trirong", serif;}
- additional google font "effect": 
  - <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Sofia&effect=neon|outline|emboss|shadow-multiple">
- beautiful font paring: https://www.w3schools.com/css/css_font_pairings.asp

