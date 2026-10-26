import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { switchRoleDemo } from '../store/authSlice';

const LayoutShell = ({ children }) => {
  const { user } = useSelector((state) => state.auth);
  const { demoLinks } = useSelector((state) => state.hrm);
  const dispatch = useDispatch();

  return (
    <div className="nexus-wrapper">
      <header className="nexus-header">
        <div className="nexus-nav-bar">
          <NavLink to="/" className="nexus-brand">
            <div className="nexus-brand-orb">NX</div>
            <div>
              <div>StaffSync <span style={{ color: '#34d399' }}>Nexus</span></div>
              <div style={{ fontSize: '0.7rem', color: '#94a3b8' }}>EXECUTIVE DARK GLASS HRM</div>
            </div>
          </NavLink>

          <nav className="nexus-pills">
            <NavLink to="/" end className={({ isActive }) => `nexus-pill-link ${isActive ? 'active' : ''}`}>Overview</NavLink>
            <NavLink to="/employee-dashboard" className={({ isActive }) => `nexus-pill-link ${isActive ? 'active' : ''}`}>Employee Hub</NavLink>
            <NavLink to="/manager-dashboard" className={({ isActive }) => `nexus-pill-link ${isActive ? 'active' : ''}`}>Manager Hub</NavLink>
            <NavLink to="/hr-dashboard" className={({ isActive }) => `nexus-pill-link ${isActive ? 'active' : ''}`}>HR Analytics</NavLink>
            <NavLink to="/attendance" className={({ isActive }) => `nexus-pill-link ${isActive ? 'active' : ''}`}>Attendance</NavLink>
            <NavLink to="/leaves" className={({ isActive }) => `nexus-pill-link ${isActive ? 'active' : ''}`}>Leaves & Kanban</NavLink>
            <NavLink to="/announcements" className={({ isActive }) => `nexus-pill-link ${isActive ? 'active' : ''}`}>Announcements</NavLink>
            <NavLink to="/trainings" className={({ isActive }) => `nexus-pill-link ${isActive ? 'active' : ''}`}>Trainings</NavLink>
            <NavLink to="/profile" className={({ isActive }) => `nexus-pill-link ${isActive ? 'active' : ''}`}>Profile</NavLink>
          </nav>

          <div className="d-flex align-items-center gap-2">
            <span className="badge-role">{user?.role}: {user?.name}</span>
            <select
              aria-label="Switch Role"
              className="form-select form-select-sm"
              style={{ width: '130px' }}
              value={user?.role}
              onChange={(e) => dispatch(switchRoleDemo(e.target.value))}
            >
              <option value="HR">Role: HR</option>
              <option value="Manager">Role: Manager</option>
              <option value="Employee">Role: Employee</option>
            </select>
            <a href={demoLinks.githubRepoUrl} target="_blank" rel="noreferrer" className="btn btn-sm btn-brand">
              GitHub
            </a>
          </div>
        </div>
      </header>

      <main className="nexus-container">{children}</main>
    </div>
  );
};

export default LayoutShell;
