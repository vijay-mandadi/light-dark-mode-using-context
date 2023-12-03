import {Link} from 'react-router-dom'
import ThemeContext from '../../context/ThemeContext'
import './index.css'

const Navbar = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme, toggleTheme} = value

      const onChangeTheme = () => {
        toggleTheme()
      }

      return (
        <div
          className={isDarkTheme ? 'navbar-container-dark' : 'navbar-container'}
        >
          <img
            src={
              isDarkTheme
                ? 'https://assets.ccbp.in/frontend/react-js/website-logo-dark-theme-img.png'
                : 'https://assets.ccbp.in/frontend/react-js/website-logo-light-theme-img.png'
            }
            alt="website logo"
            className="logo"
          />
          <ul className="list-container">
            <li>
              <Link
                to="/"
                className={isDarkTheme ? 'listitem-dark' : 'listitem'}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className={isDarkTheme ? 'listitem-dark' : 'listitem'}
              >
                About
              </Link>
            </li>
          </ul>
          <button type="button" onClick={onChangeTheme} data-testid="theme">
            <img
              src={
                isDarkTheme
                  ? 'https://assets.ccbp.in/frontend/react-js/light-theme-img.png'
                  : 'https://assets.ccbp.in/frontend/react-js/dark-theme-img.png'
              }
              alt="theme"
              className="theme"
            />
          </button>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default Navbar
