
import { useState, useEffect } from 'react';


const sampleNotifications = [
  { id: 1, type: 'Success', author: 'System', title: 'Your account has been updated successfully.', isRead: false },
  { id: 2, type: 'Error', author: 'Admin', title: 'Error: Unable to process your request.', isRead: false },
  { id: 3, type: 'Info', author: 'Support', title: 'New feature update available.', isRead: true },
  { id: 4, type: 'Alert', author: 'Alerts', title: 'You have a new message.', isRead: false },
  { id: 5, type: 'Success', author: 'System', title: 'Your changes have been saved.', isRead: true },
];

function Notification() {
  const [notifications, setNotifications] = useState([]);

  // Function to fetch initial notifications
  const fetchData = async () => {
    try {
      // Simulate fetching data with sample notifications
      setNotifications(sampleNotifications);
    } catch (error) {
      console.error('Error fetching notifications:', error);
    }
  };

  // Fetch data on component mount
  useEffect(() => {
    fetchData();
  }, []);

  // Function to handle mark as read
  const handleMarkAsRead = (id) => {
    setNotifications(notifications.map(notification =>
      notification.id === id ? { ...notification, isRead: true } : notification
    ));
  };

  // Function to handle delete notification
  const handleDelete = (id) => {
    setNotifications(notifications.filter(notification => notification.id !== id));
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Notifications</h1>
      <div>
        {notifications.map((noti) => (
          <div
            key={noti.id}
            className={`card mb-3 w-75 mx-auto ${noti.isRead ? 'bg-light' : 'bg-white'}`}
            style={{ border: '1px solid #ddd' }}
          >
            <div className="d-flex align-items-center p-3">
              <div
                className={`rounded-circle me-3 d-flex align-items-center justify-content-center ${noti.type.toLowerCase()}-bg`}
                style={{
                  width: '50px',
                  height: '50px',
                  fontSize: '24px',
                  backgroundColor: '#f0f0f0',
                  color: noti.isRead ? '#6c757d' : '#000',
                }}
              >
                {noti.type[0]} {/* Use the first letter of the type as a placeholder */}
              </div>
              <div className="flex-grow-1">
                <div className="card-header fw-bold">{noti.author}</div>
                <div className="card-body">
                  <p className="card-text">{noti.title}</p>
                </div>
              </div>
              <div className="d-flex flex-column justify-content-between">
                {!noti.isRead && (
                  <button
                    className="btn btn-outline-success btn-sm mb-2"
                    onClick={() => handleMarkAsRead(noti.id)}
                  >
                    Mark as Read
                  </button>
                )}
                <button
                  className="btn btn-outline-danger btn-sm"
                  onClick={() => handleDelete(noti.id)}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Notification;
