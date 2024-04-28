import React from 'react';
import '../styles/requests.css'; // Ensure this CSS file is correctly linked for styling

const Requests = () => {
    // Sample data including 'received' information for completed requests
    const userRequests = [
        { 
            id: 1, 
            title: "Medical Supply Needs", 
            description: "Urgent need for medical supplies due to increased patient intake.", 
            timestamp: "2024-04-28 10:00 AM", 
            status: "Pending", 
            location: "10234 Healthcare Blvd, Jacksonville, FL 32218",
            received: "" // No received info because it's pending
        },
        { 
            id: 2, 
            title: "Food Supply Request", 
            description: "Request for emergency food supplies for community shelter.", 
            timestamp: "2024-04-27 03:45 PM", 
            status: "Completed", 
            location: "227 Shelter Drive, Jacksonville, FL 32216",
            received: "1000 lbs of food and water supplies received."
        }
    ];

    return (
        <div className="requests-container">
            <h1>My Requests</h1>
            <div className="cards-container">
                {userRequests.map(request => (
                    <RequestCard key={request.id} request={request} />
                ))}
            </div>
        </div>
    );
};

const RequestCard = ({ request }) => {
    return (
        <div className="card">
            <h2>{request.title}</h2>
            <p>{request.description}</p>
            <p><strong>Location:</strong> {request.location}</p>
            <p><strong>Timestamp:</strong> {request.timestamp}</p>
            <p><strong>Status:</strong> 
                <span className={request.status === "Pending" ? "status-pending" : "status-completed"}>
                    {request.status}
                </span>
            </p>
            {request.status === "Completed" && request.received && (
                <p><strong>Received:</strong> {request.received}</p>
            )}
        </div>
    );
};

export default Requests;
