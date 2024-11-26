import React, { useState, useEffect } from 'react';
import './PDashboard.css';

const Dashboard = () => {
  const [appointmentStats, setAppointmentStats] = useState({
    total: 0,
    pending: 0,
    completed: 0,
    rejected: 0,
    approved: 0
  });

  useEffect(() => {
    const fetchAppointmentStats = async () => {
      const user = JSON.parse(localStorage.getItem('user'));
      const patientId = user ? user._id : null;
      if (!patientId) {
        console.error('Patient ID not found in local storage.');
        return;
      }

      try {
        const response = await fetch(`http://localhost:5000/api/v1/patients/${patientId}/appointment-stats`);
        const data = await response.json();
        if (response.ok) {
          setAppointmentStats(data.stats);
        } else {
          console.error(data.message);
        }
      } catch (error) {
        console.error('An error occurred while fetching appointment statistics:', error);
      }
    };

    fetchAppointmentStats();
  }, []);

  return (
    <>
      <div className="p-dashboard">
        <div className="p-dashboard-page-container">
          <div className="p-dashboard-main-content">
            <div className="p-dashboard-header">
              <h1>Dashboard</h1>
              <div className="p-dashboard-search-box">
                <input
                  type="search"
                  placeholder="Search..."
                  className="p-dashboard-search-input"
                />
                <button className="p-dashboard-search-button">Search</button>
              </div>
            </div>

            <div className="p-dashboard-cards-container">
              <div className="p-dashboard-card">
                <div className="p-dashboard-card-header">
                  <h2 className="p-dashboard-card-title">Total Appointments</h2>
                </div>
                <div className="p-dashboard-card-number">
                  {appointmentStats.total}
                </div>
              </div>
              <div className="p-dashboard-card">
                <div className="p-dashboard-card-header">
                  <h2 className="p-dashboard-card-title">Rejected Appointments</h2>
                </div>
                <div className="p-dashboard-card-number">
                  {appointmentStats.rejected}
                </div>
              </div>
              <div className="p-dashboard-card">
                <div className="p-dashboard-card-header">
                  <h2 className="p-dashboard-card-title">Approved Appointments</h2>
                </div>
                <div className="p-dashboard-card-number">
                  {appointmentStats.approved  }
                </div>
              </div>

              <div className="p-dashboard-card">
                <div className="p-dashboard-card-header">
                  <h2 className="p-dashboard-card-title">Pending Appointments</h2>
                </div>
                <div className="p-dashboard-card-number">
                  {appointmentStats.pending}
                </div>
              </div>

              <div className="p-dashboard-card">
                <div className="p-dashboard-card-header">
                  <h2 className="p-dashboard-card-title">Completed Appointments</h2>
                </div>
                <div className="p-dashboard-card-number">
                  {appointmentStats.completed}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;