import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Table, Button } from 'react-bootstrap'; // Import Table from react-bootstrap
import { FaCheckCircle, FaTimesCircle, FaEdit, FaTrash } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';



function Dashboard() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (!storedUser) {
      navigate('/login');
    } else {
      setUser(JSON.parse(storedUser));
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('token'); // Clear token from localStorage
    localStorage.removeItem('user');  // Clear user data from localStorage
    navigate('/login'); // Redirect to login page after logout
  };

  if (!user) {
    return <div>Loading...</div>; // Optional loading state
  }



    const data = [
      { srNo: 1, name: 'John Doe', dateCreated: '2024-09-01', role: 'Admin', status: 'active' },
  { srNo: 2, name: 'Jane Smith', dateCreated: '2024-08-15', role: 'Editor', status: 'inactive' },
  { srNo: 3, name: 'Alice Johnson', dateCreated: '2024-07-30', role: 'Contributor', status: 'active' },
  { srNo: 4, name: 'Bob Brown', dateCreated: '2024-06-25', role: 'Moderator', status: 'inactive' },
  { srNo: 5, name: 'Charlie Davis', dateCreated: '2024-05-20', role: 'Subscriber', status: 'active' },
  { srNo: 6, name: 'Dana White', dateCreated: '2024-04-10', role: 'Admin', status: 'inactive' },
  { srNo: 7, name: 'Eve Clark', dateCreated: '2024-03-15', role: 'Editor', status: 'active' },
  { srNo: 8, name: 'Frank Martin', dateCreated: '2024-02-05', role: 'Contributor', status: 'inactive' },
    ];

  return (
    <div className="dashboard">
      <div className="container mt-4">
      <Table striped bordered hover responsive className="text-center">
        <thead className="bg-gray-800 text-white">
          <tr>
            <th>Sr No.</th>
            <th>Name</th>
            <th>Date Created</th>
            <th>Role</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.srNo}>
              <td>{item.srNo}</td>
              <td>{item.name}</td>
              <td>{item.dateCreated}</td>
              <td>{item.role}</td>
              <td>
                <span
                  className={`inline-flex items-center px-2 py-1 rounded-full text-white ${
                    item.status === 'active'
                      ? 'bg-green-500'
                      : 'bg-red-500'
                  }`}
                >
                  {item.status === 'active' ? (
                    <FaCheckCircle className="mr-1" />
                  ) : (
                    <FaTimesCircle className="mr-1" />
                  )}
                  {item.status}
                </span>
              </td>
              <td>
                <Button variant="link" className="text-blue-600 hover:text-blue-800">
                  <FaEdit />
                </Button>
                <Button variant="link" className="text-red-600 hover:text-red-800 ml-2">
                  <FaTrash />
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
    <div className='flex justify-center'>
      <button
        onClick={handleLogout}
        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
      >
        Logout
      </button>
      </div>
    </div>
  );
}

export default Dashboard;
