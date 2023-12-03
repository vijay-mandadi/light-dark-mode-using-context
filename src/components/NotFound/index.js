import ThemeContext from '../../context/ThemeContext'
import Navbar from '../Navbar'
import './index.css'

const NotFound = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      return (
        <>
          <Navbar />
          <div
            className={isDarkTheme ? 'home-container-dark' : 'home-container'}
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
              alt="not found"
              className="not-found-image"
            />
            <h1
              className={
                isDarkTheme ? 'not-found-heading-dark' : 'not-found-heading'
              }
            >
              Lost Your Way?
            </h1>
            <p
              className={
                isDarkTheme ? 'not-found-paragraph-dark' : 'not-found-paragraph'
              }
            >
              We cannot seem to find the page you are looking for.
            </p>
          </div>
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default NotFound
