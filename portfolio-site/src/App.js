import resume from './Personal/Luke_Cusato_Resume.pdf';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faFilePdf } from '@fortawesome/free-solid-svg-icons';
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <nav>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#about">About</a></li>
          </ul>
        </nav>
      </header>
      <main>
        <section className= "Luke">
          <h1>Luke Cusato</h1>
          <h4>(He/Him)</h4>
          <a href="mailto:lukecusato1@gmail.com" className="email-button">
            <button>Email me!</button>
          </a>
        </section>
        <section className= "welcome"></section>
        <h2>Welcome to my site!</h2>
        <div className="quick_info">
          <span>PGH</span>
          <span>Pitt</span>
          <span>Info Sci</span>
        </div>
        <article>
          <p>Hello there! Im a student @ Pitt studying Information Science, and Im passionate about putting technology and information at the center of people's lives!</p>
        </article>
        <a href= "#work">Check out what I've been up to and what I'm currently working on!</a>
      </main>
      <footer>
  <div className="social_media">
    <a href={resume} target="_blank" rel="noopener noreferrer" aria-label="Resume">
      <FontAwesomeIcon icon={faFilePdf} />
    </a>
    <a href="https://www.linkedin.com/in/luke-cusato/" target="_blank" rel="noopener noreferrer">
      <FontAwesomeIcon icon={faLinkedin} />
    </a>
    <a href="https://github.com/lukecusato07" target="_blank" rel="noopener noreferrer">
      <FontAwesomeIcon icon={faGithub} />
    </a>
  </div>
</footer>
</div>
  );
}

export default App;
