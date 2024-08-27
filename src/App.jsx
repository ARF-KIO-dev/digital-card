import { useState } from 'react'
import { faCoffee, faCode, faGamepad } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


import './App.css'

function App() {

  const [count, setCount] = useState(0)

  return (
    <main>

      <h1 className='h1-header'>Project 1 : Digital-Card</h1>

      <div className='card'>

        <img className='img-pfp' src='/pfp.png'></img>

        <div className='div-titles'>
          <h1>KIO-dev</h1>
          <h3>Software & Web Developer</h3>
          <h3>Game Dev + Art!</h3>
          <a>this.is.a.website.link..?</a>
        </div>

        <div className='div-buttons'>
          <a href='https://en.wikipedia.org/wiki/Tea'><button>Tea <FontAwesomeIcon icon={faCoffee} /></button></a>
          <a href='https://github.com/ARF-KIO-dev'><button>Github <FontAwesomeIcon icon={faCode} /><i class="fa fa-code"/></button></a>
          <a href='https://dukkio.itch.io/'><button>Itch <FontAwesomeIcon icon={faGamepad} /></button></a>
        </div>

        <div className='div-about-me'>
          <div className='div-about-me-blocks'>
            <h1>About Me!</h1>
            <p>Programming-head and rarely, I spit out some art now and then.</p>
            <p>I code things.. </p>
            <ul>
              <li>Python</li>
              <li>JS and TS</li>
              <li>C++ and C# (a lil bit)</li>
              <li>Lua - PICO 8</li>
              <li>GML and GDScript</li>
            </ul>
          </div>

          <div className='div-about-me-blocks'>
            <h1>Interests</h1>
            <p>Text goes here!</p>
          </div>
        </div>

        <div className='div-footer'>
          <footer>2024 @ alex.f.fletcher@gmail.com</footer>
        </div>

      </div>
    </main>
  )
}

export default App
