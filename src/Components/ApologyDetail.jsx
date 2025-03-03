import React, { useEffect, useState, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { supabase } from '../supabaseClient';
import { toPng } from 'html-to-image';
import { FaDownload, FaHeart, FaCopy, FaCheck, FaTimes } from 'react-icons/fa';
import Header from '../Components/Header';
import Footer from '../Components/Footer';

const ApologyDetail = () => {
  const { id } = useParams();
  const [apology, setApology] = useState(null);
  const [loading, setLoading] = useState(true);
  const cardRef = useRef(null);

  useEffect(() => {
    const fetchApology = async () => {
      const { data, error } = await supabase
        .from('apologies')
        .select('*')
        .eq('id', id)
        .single();

      if (error) {
        console.error('Error fetching apology:', error);
      } else {
        setApology(data);
      }
      setLoading(false);
    };

    fetchApology();
  }, [id]);

  const downloadCard = () => {
    if (cardRef.current) {
      toPng(cardRef.current)
        .then((dataUrl) => {
          const link = document.createElement('a');
          link.download = 'apology-card.png';
          link.href = dataUrl;
          link.click();
        })
        .catch((error) => {
          console.error('Failed to convert card to image', error);
        });
    }
  };

  const handleCopyLink = () => {
    const url = window.location.href;
    navigator.clipboard
      .writeText(url)
      .then(() => {
        alert('Link copied to clipboard!');
      })
      .catch((err) => {
        console.error('Failed to copy link:', err);
      });
  };

  // Updated reply function: chain .select() so that updated row is returned
  const updateReply = async (reply) => {
    const { data, error } = await supabase
      .from('apologies')
      .update({ reply_status: reply })
      .eq('id', id)
      .select() // This is required to return the updated record.
      .single();

    if (error) {
      console.error('Error updating reply:', error);
    } else {
      console.log('Reply updated:', data.reply_status);
      setApology(data);
    }
  };

  if (loading) {
    return (
      <>
        <Header />
        <div className="flex justify-center items-center h-screen">
          <p className="text-gray-600">Generating Apology...</p>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gradient-to-br from-pink-50 to-purple-50">
        <div
          ref={cardRef}
          className="relative bg-white p-8 rounded-xl shadow-lg max-w-md w-full text-center transform transition-all hover:scale-105 border-2 border-pink-100 mx-auto"
        >
          <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center opacity-20">
            <FaHeart className="text-pink-200 text-6xl transform rotate-12" />
            <FaHeart className="text-purple-200 text-6xl transform -rotate-12" />
          </div>

          <div className="relative z-10">
            <FaHeart className="text-pink-500 text-3xl transform rotate-12 mx-auto mb-4" />
            <h2 className="text-3xl font-bold mb-4 text-pink-600">
              Apology to {apology.recipient}
            </h2>
            <p className="text-gray-700 mb-6 text-lg italic">
              "{apology.message}"
            </p>
            {apology.details && (
              <p className="text-sm text-gray-600 mb-4">{apology.details}</p>
            )}
          </div>
          <div className="flex justify-center space-x-10">
            <FaHeart className="text-pink-200 text-3xl transform rotate-12" />
            <FaHeart className="text-blue-200 text-3xl transform rotate-12" />
          </div>
        </div>

        <div className="mt-8 flex space-x-4">
          <button
            onClick={downloadCard}
            className="px-6 py-3 bg-pink-500 hover:bg-pink-600 text-white rounded-lg transition duration-200 flex items-center space-x-2 shadow-md"
          >
            <FaDownload className="text-xl" />
            <span>Download Card</span>
          </button>
        </div>

        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600 mb-2">Shareable Link:</p>
          <div className="flex items-center justify-center">
            <input
              type="text"
              value={window.location.href}
              readOnly
              className="w-64 px-4 py-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-pink-100 text-sm text-gray-700"
            />
            <button
              onClick={handleCopyLink}
              className="px-4 py-2 bg-pink-500 hover:bg-pink-600 text-white rounded-r-lg transition duration-200 flex items-center"
            >
              <FaCopy className="mr-2" />
              Copy
            </button>
          </div>
        </div>

        {/* Reply Section */}
        <div className="mt-8 text-center">
          {apology.reply_status ? (
            <p className="text-lg font-semibold text-gray-700">
              {apology.recipient} {apology.reply_status} this apology.
            </p>
          ) : (
            <>
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                Reply to this Apology
              </h3>
              <div className="flex justify-center space-x-4">
                <button
                  onClick={() => updateReply('accepted')}
                  className="px-4 py-2 bg-green-500 hover:bg-green-600 cursor-pointer text-white rounded-lg transition duration-200 flex items-center space-x-2"
                >
                  <FaCheck className="mr-2" />
                  Accept
                </button>
                <button
                  onClick={() => updateReply('declined')}
                  className="px-4 py-2 bg-red-500 cursor-pointer hover:bg-red-600 text-white rounded-lg transition duration-200 flex items-center space-x-2"
                >
                  <FaTimes className="mr-2" />
                  Decline
                </button>
              </div>
            </>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ApologyDetail;
