import React from "react";

const SettingsModal = ({
  isOpen,
  workDuration,
  breakDuration,
  setWorkDuration,
  setBreakDuration,
  toggleModal,
}) => {
  if (!isOpen) return null;

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Settings</h2>
        <div>
          <label>
            Work Duration (minutes):
            <input
              type="number"
              value={workDuration}
              onChange={(e) => setWorkDuration(e.target.value)}
              min="1"
            />
          </label>
        </div>
        <div>
          <label>
            Break Duration (minutes):
            <input
              type="number"
              value={breakDuration}
              onChange={(e) => setBreakDuration(e.target.value)}
              min="1"
            />
          </label>
        </div>
        <button onClick={toggleModal}>Close</button>
      </div>

      {/* Modal CSS */}
      <style jsx>{`
        .modal {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(0, 0, 0, 0.5);
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .modal-content {
          background-color: white;
          padding: 20px;
          border-radius: 5px;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
        }
        input {
          margin-left: 10px;
          width: 50px;
        }
      `}</style>
    </div>
  );
};

export default SettingsModal;
