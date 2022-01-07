import React from 'react';

export const SematicElement = () => {
  return (
    <div>
      <div>
        non-semantic elements - Tells nothing about its content.
        <div />
        <span></span>
      </div>
      <div>
        semantic elements - clearly defines its content. just like div but
        having sematic meaning
        <nav />
        <section>
          <h1>WWF</h1> {/*section header*/}
          <p>
            {/*section content just like an artical*/}
            The World Wide Fund for Nature (WWF) is an international
            organization working on issues regarding the conservation, research
            and restoration of the environment, formerly named the World
            Wildlife Fund. WWF was founded in 1961.
          </p>
        </section>
        <article>
          {/*just as section and div but more "sematic" and diff theme (font family)*/}
          <h2>Google Chrome</h2>
          <p>
            Google Chrome is a web browser developed by Google, released in
            2008. Chrome is the world's most popular web browser today!
          </p>
        </article>
        <summary />
      </div>
      <header>
        a container for introductory content or a set of navigational links.
        <ul>
          <li>{'one or more heading elements (<h1> - <h6>)'}</li>
          <li>logo or icon</li>
          <li>authorship information</li>
        </ul>
      </header>
      <header>
        defines a footer for a document or section.
        <ul>
          <li>authorship information</li>
          <li>copyright information</li>
          <li>sitemap</li>
        </ul>
      </header>
      <nav>
        <p>defines a set of navigation links.</p>
        <p>only for major block of navigation links.</p>
        <a href="/html/">HTML</a> |<a href="/css/">CSS</a> |
        <a href="/js/">JavaScript</a> |<a href="/jquery/">jQuery</a>
      </nav>

      <aside>
        <p>
          defines some content aside from the content it is placed in (like a sidebar).
          <br />
          <strong>
            or have semantic meaning as a side bar or side content
          </strong>
        </p>
        <p>aside is a block element</p>
      </aside>

      <figure>
        <p>contain illustrations, diagrams, photos, code listings, etc.</p>
        <img src="pic_trulli.jpg" alt="Trulli" />
        <figcaption>Fig1. - Trulli, Puglia, Italy.</figcaption>
      </figure>
    </div>
  );
};
