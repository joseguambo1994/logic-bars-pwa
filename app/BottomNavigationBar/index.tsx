import { Link } from '@remix-run/react';

export function BottomNavbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/ranks">Ranks</Link>
        </li>
        <li>
          <Link to="/statistics">Statistics</Link>
        </li>
        <li>
          <Link to="/profile">Profile</Link>
        </li>
      </ul>
    </nav>
  );
}