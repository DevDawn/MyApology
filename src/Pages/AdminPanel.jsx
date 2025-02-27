import React, { useEffect, useState } from 'react';
import { supabase } from '../supabaseClient';
import { FaEye, FaTrash } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const AdminPanel = () => {
  const [apologies, setApologies] = useState([]);
  const [recipient, setRecipient] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const fetchApologies = async () => {
    const { data, error } = await supabase
      .from('apologies')
      .select('*');
    if (error) {
      console.error('Error fetching apologies:', error);
    } else {
      setApologies(data);
    }
  };

  const deleteApology = async (id) => {
    const { error } = await supabase
      .from('apologies')
      .delete()
      .eq('id', id);
    if (error) {
      console.error('Error deleting apology:', error);
    } else {
      fetchApologies();
    }
  };

  // Create a new apology
  const createApology = async () => {
    const { error } = await supabase
      .from('apologies')
      .insert([{ recipient, message }]);
    if (error) {
      console.error('Error creating apology:', error);
      setError(error.message);
    } else {
      setRecipient('');
      setMessage('');
      setError(null);
      fetchApologies();
    }
  };

  useEffect(() => {
    fetchApologies();
  }, []);

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-8">Admin Panel</h1>

      {/* Create Apology Form */}
      <div className="mb-8 bg-white p-6 rounded-xl shadow-lg">
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">
          Create Your Apology
        </h2>
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}
        <div className="space-y-4">
          <input
            type="text"
            placeholder="Recipient's name"
            value={recipient}
            onChange={(e) => setRecipient(e.target.value)}
            className="w-full px-4 py-2 border border-pink-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-100"
          />
          <textarea
            placeholder="Write your apology here..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows="4"
            className="w-full px-4 py-2 border border-pink-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-100"
          ></textarea>
          <button
            onClick={createApology}
            className="w-full py-3 bg-pink-300 hover:bg-pink-400 text-white font-semibold rounded-lg transition duration-200 cursor-pointer"
          >
            Create Apology
          </button>
        </div>
      </div>

      {/* Apologies List */}
      <h2 className="text-2xl font-bold mb-4">All Apologies</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {apologies.map((apology) => (
          <div
            key={apology.id}
            className="bg-white p-4 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-200"
          >
            <h3 className="text-xl font-bold text-gray-800">
              {apology.recipient}
            </h3>
            <p className="text-gray-700 mt-2">{apology.message}</p>
            <div className="mt-4 flex justify-between">
              <button
                onClick={() => navigate(`/apology/${apology.id}`)}
                className="flex items-center space-x-2 px-3 py-2 text-pink-500 cursor-pointe rounded-lg transition duration-200"
              >
                <FaEye />
              </button>
              <button
                onClick={() => deleteApology(apology.id)}
                className="flex items-center space-x-2 px-3 py-2 cursor-pointer text-red-500 rounded-lg transition duration-200"
              >
                <FaTrash />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminPanel;
