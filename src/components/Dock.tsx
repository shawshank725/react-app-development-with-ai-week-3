import { NavLink } from 'react-router-dom'

const dockItems = [
  {
    to: '/',
    label: 'Home',
    end: true,
    icon: (
      <svg
        className="dock-icon"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.75}
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M3.5 10.5 12 3.5l8.5 7" />
        <path d="M5.5 9.5V19A1.5 1.5 0 0 0 7 20.5h3V15h4v5.5h3A1.5 1.5 0 0 0 18.5 19V9.5" />
      </svg>
    ),
  },
  {
    to: '/notes/new',
    label: 'Add Note',
    end: false,
    icon: (
      <svg
        className="dock-icon"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.75}
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M12 5v14M5 12h14" />
      </svg>
    ),
  },
]

function Dock() {
  return (
    <nav className="dock" aria-label="Main">
      {dockItems.map((item) => (
        <NavLink
          key={item.to}
          to={item.to}
          end={item.end}
          className={({ isActive }) =>
            isActive ? 'dock-item is-active' : 'dock-item'
          }
        >
          {item.icon}
          <span className="dock-label">{item.label}</span>
        </NavLink>
      ))}
    </nav>
  )
}

export default Dock
