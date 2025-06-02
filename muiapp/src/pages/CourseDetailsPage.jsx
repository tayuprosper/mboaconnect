import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Dialog } from '@headlessui/react';
import { handlePay } from '../auth/crud';

function CourseDetails() {
const user = localStorage.getItem("token");

const navigate = useNavigate();
if (!user){
navigate("/login");
}
  const { state } = useLocation();
  const course = state?.course;

  const [isOpen, setIsOpen] = useState(false);
  const [phone, setPhone] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('balance');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const validatePhone = () => {
    return /^237\d{8,12}$/.test(phone);
  };

  const pay = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
    const res = await handlePay(course, phone);
    console.log(res);
      navigate('/dashboard');
    } catch (err) {
      setError(err.message || 'Payment failed. Try again.');
    } finally {
      setLoading(false);
    }
  };

  if (!course) return <p>No course selected.</p>;

  return (
    <div className="max-w-3xl mx-auto mt-10 p-4 shadow-lg rounded-lg bg-white">
      <img src="https://picsum.photos/seed/course/600/300" alt="Course" className="w-full rounded-lg mb-4" />
      <h2 className="text-2xl font-bold text-blue-700 mb-2">{course.title}</h2>
      <p className="text-gray-700 mb-2">{course.description}</p>
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <p className="text-sm text-gray-600">Difficulty:</p>
          <p className="font-medium">{course.difficulty}</p>
        </div>
        <div>
          <p className="text-sm text-gray-600">Duration:</p>
          <p className="font-medium">{course.duration_hours} hours</p>
        </div>
        <div>
          <p className="text-sm text-gray-600">Tutor:</p>
          <p className="font-medium">{course.tutor?.user?.name}</p>
        </div>
        <div>
          <p className="text-sm text-gray-600">Price:</p>
          <p className="font-bold text-pink-600">{course.price} XAF</p>
        </div>
      </div>

      <button
        onClick={() => setIsOpen(true)}
        className="px-6 py-2 bg-blue-700 text-white rounded hover:bg-blue-800"
      >
        Pay
      </button>

      <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="relative z-50">
        <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <Dialog.Panel className="w-full max-w-md rounded bg-white p-6 space-y-4 shadow-xl">
            <Dialog.Title className="text-lg font-bold">Choose Payment Method</Dialog.Title>

            <div>
              <label className="block mb-2 font-medium">Payment Method</label>
              <select
                value={paymentMethod}
                onChange={(e) => setPaymentMethod(e.target.value)}
                className="w-full border p-2 rounded"
              >
                <option value="balance">App Balance</option>
                <option value="mobile">Mobile Money</option>
              </select>
            </div>

            {paymentMethod === 'mobile' && (
              <div>
                <label className="block mb-2 font-medium">Phone Number</label>
                <input
                  type="tel"
                  placeholder="e.g. 237690000000"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full border p-2 rounded"
                />
                {!validatePhone() && phone.length > 0 && (
                  <p className="text-sm text-red-500 mt-1">Phone must be in format 237XXXXXXXXX</p>
                )}
              </div>
            )}

            {error && <p className="text-sm text-red-600">{error}</p>}

            <div className="flex justify-end gap-2">
              <button
                onClick={() => setIsOpen(false)}
                className="px-4 py-2 text-gray-600 hover:underline"
                disabled={loading}
              >
                Cancel
              </button>
              <button
                onClick={pay}
                className="px-4 py-2 bg-blue-700 text-white rounded hover:bg-blue-800 disabled:opacity-60"
                disabled={loading}
              >
                {loading ? (
                  <span className="flex items-center gap-2">
                    <svg className="animate-spin h-4 w-4 text-white" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="white" strokeWidth="4" fill="none" />
                      <path className="opacity-75" fill="white" d="M4 12a8 8 0 018-8v8z" />
                    </svg>
                    Processing...
                  </span>
                ) : (
                  'Confirm'
                )}
              </button>
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>
    </div>
  );
}

export default CourseDetails;
