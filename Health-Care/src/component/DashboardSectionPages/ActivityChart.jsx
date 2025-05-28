const ActivityChart = ({ days, bars ,title,subtitle }) => (
  <div className="activity-section">
        <div className="activity-header">
          <h2 className="activity-title">{title}</h2>
          <p className="activity-subtitle">{subtitle}</p>
        </div>
        <div className="activity-chart">
          {days.map((day, dayIdx) => (
            <div key={day} className="day-column">
              <div className="bars-container">
                {bars.map((bar, barIdx) => (
                  <div
                    key={barIdx}
                    className="bar"
                    style={{
                      height: `${bar.height - (barIdx * 10)}px`, 
                      backgroundColor: bar.color,
                      marginLeft: barIdx > 0 ? '2px' : 0
                    }}
                  ></div>
                ))}
              </div>
              <span className="day-label">{day}</span>
            </div>
          ))}
        </div>
      </div>
);

 export default ActivityChart;