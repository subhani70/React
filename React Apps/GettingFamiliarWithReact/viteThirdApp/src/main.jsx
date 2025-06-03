import { createRoot } from 'react-dom/client';

let root = document.getElementById('root');
createRoot(root).render(
  <div>
    <h1>Heading1</h1>
    <h2>Heading2</h2>
    <h3>Heading3</h3>
    <h4>Heading4</h4>
    <h5>Heading5</h5>
    <h6>Heading6</h6>

    <hr />

    <i>HTML</i> stands for Hyper Text Markup Language <br />
    It is case-insensitive language. <br />
    It is <b>error-free</b> language. <br />
    It is introduced by Tim berner's lee.

    <hr />
    <pre>
      <mark>HTML</mark> stands for Hyper Text Markup language.
      It is case-insensitive language.
      It is <b>error-free</b> language.
      It is introduced by Tim berner's lee.
    </pre>

    <hr />

    <b>Bold</b> <strong>Strong</strong> <i>italic</i> <em>emphasize</em>
    <strike>9000</strike>
    <del>9000</del>
    <u>underline</u>

    <hr />
    <p>10 <sup>8</sup> </p>
    <hr />

    <p>C2H6</p>
    <p>C <sub>2</sub> H <sub>6</sub> </p>
  </div>
);