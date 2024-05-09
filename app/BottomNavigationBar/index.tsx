import { Link } from '@remix-run/react';
import { useState } from 'react';
import { FaTrophy as RanksIcon } from 'react-icons/fa';
import { FaChartBar as StatisticsIcon } from 'react-icons/fa';
import { FaUser as ProfileIcon } from 'react-icons/fa';
import { FaSignInAlt as LoginIcon } from 'react-icons/fa';

type Screens = 'ranks' | 'statistics' | 'profile' | 'login';
export function BottomNavbar() {
  const [selected, setSelected] = useState<Screens>('ranks');
  const handlePress = (screen: Screens) => {
    setSelected(screen);
  };
  return (
    <div className="btm-nav">
      <button
        className={`text-primary ${selected === 'login' ? 'active' : ''}`}
        onClick={() => handlePress('login')}>
        <Link to="/login">Login</Link>
        <LoginIcon className="h-5 w-5 text-primary" />
      </button>
      <button
        className={`text-primary ${selected === 'ranks' ? 'active' : ''}`}
        onClick={() => handlePress('ranks')}>
        <Link to="/ranks">Ranks</Link>
        <RanksIcon className="h-5 w-5 text-primary" />
      </button>
      <button
        className={`text-secondary ${selected === 'statistics' ? 'active' : ''}`}
        onClick={() => handlePress('statistics')}>
        <Link to="/statistics">Statistics</Link>
        <StatisticsIcon className="h-5 w-5 text-secondary" />
      </button>
      <button
        className={`text-accent ${selected === 'profile' ? 'active' : ''}`}
        onClick={() => handlePress('profile')}>
        <Link to="/profile">Profile</Link>
        <ProfileIcon className="h-5 w-5 text-accent" />
      </button>
    </div>
  );
}