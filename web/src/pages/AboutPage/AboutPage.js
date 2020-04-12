import { Link, routes } from '@redwoodjs/router'

const AboutPage = () => {
  return (
    <>
      <header>
        <h1>Redwood Blog</h1>
        <nav>
          <ul>
            <li><Link to={routes.about()}>About</Link></li>
          </ul>
        </nav>
      </header>
      <main>
        <p>
          This site created to test the functionality behind Redwood js.
        </p>

        <Link to={routes.home()}>Home</Link>
      </main>
    </>
  )
}

export default AboutPage
