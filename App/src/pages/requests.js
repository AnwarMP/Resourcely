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
          received: ""
        },
        {
          id: 2,
          title: "Food Supply Request",
          description: "Request for emergency food supplies for community shelter.",
          timestamp: "2024-04-27 03:45 PM",
          status: "Completed",
          location: "227 Shelter Drive, Jacksonville, FL 32216",
          received: "1000 lbs of food and water supplies received."
        },
        {
          id: 3,
          title: "Water Delivery Needed",
          description: "Community in need of bottled water due to contaminated water supply.",
          timestamp: "2024-04-26 12:30 PM",
          status: "Pending",
          location: "1456 Waterfront Dr, Miami, FL 33132",
          received: ""
        },
        {
          id: 4,
          title: "Shelter Supplies Request",
          description: "Urgent need for blankets, cots, and other shelter supplies.",
          timestamp: "2024-04-25 09:15 AM",
          status: "Completed",
          location: "3421 Shelter Way, Tampa, FL 33614",
          received: "500 blankets, 200 cots, and other supplies received."
        },
        {
          id: 5,
          title: "Generator Request",
          description: "Community center in need of generators for power.",
          timestamp: "2024-04-24 02:45 PM",
          status: "Pending",
          location: "1234 Community Dr, Orlando, FL 32817",
          received: ""
        },
        {
          id: 6,
          title: "Food and Water for Pets",
          description: "Request for pet food and water for displaced pets.",
          timestamp: "2024-04-23 11:30 AM",
          status: "Completed",
          location: "678 Pet Lane, Gainesville, FL 32601",
          received: "500 lbs of pet food and 1000 bottles of water received."
        },
        {
          id: 7,
          title: "First Aid Kit Request",
          description: "Urgent need for first aid kits for medical treatment.",
          timestamp: "2024-04-22 10:15 AM",
          status: "Pending",
          location: "901 Medical Dr, Pensacola, FL 32514",
          received: ""
        },
        {
          id: 8,
          title: "Flashlight and Battery Request",
          description: "Request for flashlights and batteries for lighting.",
          timestamp: "2024-04-21 03:30 PM",
          status: "Completed",
          location: "567 Light Way, Tallahassee, FL 32301",
          received: "500 flashlights and 1000 batteries received."
        },
        {
          id: 9,
          title: "Personal Hygiene Kit Request",
          description: "Urgent need for personal hygiene kits for displaced individuals.",
          timestamp: "2024-04-20 12:45 PM",
          status: "Pending",
          location: "2345 Hygiene Dr, Fort Lauderdale, FL 33311",
          received: ""
        },
        {
          id: 10,
          title: "Baby Supply Request",
          description: "Request for baby supplies, including diapers and formula.",
          timestamp: "2024-04-19 09:30 AM",
          status: "Completed",
          location: "3456 Baby Way, West Palm Beach, FL 33409",
          received: "500 diapers and 1000 bottles of formula received."
        },
        {
          id: 11,
          title: "Cleaning Supply Request",
          description: "Urgent need for cleaning supplies for shelter cleaning.",
          timestamp: "2024-04-18 02:15 PM",
          status: "Pending",
          location: "4567 Cleaning Dr, Sarasota, FL 34236",
          received: ""
        },
        {
          id: 12,
          title: "Tool Request",
          description: "Request for tools for debris removal and cleanup.",
          timestamp: "2024-04-17 11:00 AM",
          status: "Completed",
          location: "6789 Tool Way, Bradenton, FL 34205",
          received: "500 tools received."
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
