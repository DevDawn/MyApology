import React, { useState } from 'react';
import Header from '../Components/Header';
import { supabase } from '../supabaseClient';
import { useNavigate } from 'react-router-dom';

const ApologyForm = () => {
  const [formData, setFormData] = useState({
    recipient: '',
    message: '',
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.recipient || !formData.message) {
      setError('Please fill out all fields.');
      return;
    }

    setIsLoading(true);
    setError('');

    try {
      const { data, error } = await supabase
        .from('apologies')
        .insert([
          {
            recipient: formData.recipient,
            message: formData.message,
          },
        ])
        .select()
        .single();

      if (error) {
        setError('Failed to submit apology. Please try again.');
        console.error('Error inserting apology:', error);
      } else {
        navigate(`/apology/${data.id}`);
      }
    } catch (err) {
      setError('An unexpected error occurred. Please try again.');
      console.error('Unexpected error:', err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Header />
      <div className="flex justify-center items-center mt-20 px-4">
        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-xl shadow-lg p-8 w-full max-w-lg"
        >
          <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">
            Create Your Apology
          </h2>
          {error && <p className="text-red-500 text-center mb-4">{error}</p>}
          <div className="mb-4">
            <label htmlFor="recipient" className="block text-gray-700 mb-2">
              Who are you apologizing to?
            </label>
            <input
              type="text"
              id="recipient"
              name="recipient"
              value={formData.recipient}
              onChange={handleChange}
              placeholder="Recipient's name"
              required
              className="w-full px-4 py-2 border border-pink-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-100"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-gray-700 mb-2">
              Your Apology Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              placeholder="Write your apology here..."
              required
              className="w-full px-4 py-2 border border-pink-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-100"
            ></textarea>
          </div>
          <button
            type="submit"
            disabled={isLoading}
            className={`w-full py-3 ${
              isLoading ? 'bg-pink-400 cursor-not-allowed' : 'bg-pink-300 hover:bg-pink-400'
            } text-white font-semibold rounded-lg transition duration-200`}
          >
            {isLoading ? 'Apologizing...' : 'Submit Apology'}
          </button>
        </form>
      </div>
    </>
  );
};

export default ApologyForm;