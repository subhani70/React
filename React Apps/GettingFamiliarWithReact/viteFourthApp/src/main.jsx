import { createRoot } from 'react-dom/client';

let root = document.getElementById('root');
createRoot(root).render(
    <main>
        <header>
            <nav>
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
        </header>
        <section>
            <article>
                <h1>Welcome to Semantic HTML Example</h1>
                <p>This is an example demonstrating all semantic HTML5 tags.</p>
                <figure>
                    <img src="https://via.placeholder.com/150" alt="Placeholder" />
                    <figcaption>Example image with caption</figcaption>
                </figure>
                <aside>
                    <h2>Related Info</h2>
                    <p>This is some additional information in an aside.</p>
                </aside>
            </article>
        </section>
        <footer>
            <address>
                Contact us at <a href="mailto:info@example.com">info@example.com</a>
            </address>
            <small>&copy; 2024 Example Company</small>
        </footer>
    </main>
);