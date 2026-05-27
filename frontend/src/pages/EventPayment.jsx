import { useParams, useNavigate } from "react-router-dom";

import { useState, useEffect } from "react";

import axios from "axios";

function EventPayment() {

  const { id } = useParams();

  const navigate = useNavigate();

  const [event, setEvent] =
    useState(null);

  const [loading, setLoading] =
    useState(true);

  const user =
    JSON.parse(localStorage.getItem("user"));

  const [transactionId, setTransactionId] =
    useState("");

  const [screenshot, setScreenshot] =
    useState(null);

  /* ================= FETCH EVENT ================= */

  const fetchEvent = async () => {

    try {

      const response = await axios.get(
        `http://localhost:5000/api/events/${id}`
      );

      setEvent(response.data);

    } catch (error) {

      console.log(error);

    } finally {

      setLoading(false);

    }

  };

  useEffect(() => {

    fetchEvent();

  }, []);

  /* ================= SUBMIT PAYMENT ================= */

  const handleSubmit = async (e) => {

    e.preventDefault();

    if (!transactionId || !screenshot) {

      alert("Please complete payment details.");

      return;

    }

    try {

      const formData = new FormData();

      formData.append(
        "userId",
        user.id
      );

      formData.append(
        "eventId",
        event.id
      );

      formData.append(
        "paymentStatus",
        "pending"
      );

      formData.append(
        "transactionId",
        transactionId
      );

      formData.append(
        "paymentScreenshot",
        screenshot
      );

      const token =
        localStorage.getItem("token");

      await axios.post(
        "http://localhost:5000/api/registrations",
        formData,
        {
          headers: {

            Authorization:
              `Bearer ${token}`,

            "Content-Type":
              "multipart/form-data"
          }
        }
      );

      alert(
        "Payment submitted successfully!"
      );

      navigate("/dashboard");

    } catch (error) {

      console.log(error);

      alert(
        error.response?.data?.message ||
        "Payment submission failed"
      );

    }

  };

  /* ================= LOADING ================= */

  if (loading) {

    return (
      <div className="p-10 text-center">
        Loading...
      </div>
    );

  }

  /* ================= EVENT NOT FOUND ================= */

  if (!event) {

    return (
      <div className="p-10 text-center">
        Event not found
      </div>
    );

  }

  return (

    <div className="w-full min-h-screen bg-gray-100">

      {/* HEADER */}

      <section className="py-20 text-center bg-gradient-to-br from-blue-900 via-indigo-900 to-slate-900 text-white">

        <h1 className="text-4xl font-bold">
          Complete Your Payment
        </h1>

        <p className="mt-3 text-gray-300">
          Register for {event.title}
        </p>

      </section>

      {/* PAYMENT SECTION */}

      <section className="py-16 flex justify-center">

        <div className="bg-white p-10 rounded-2xl shadow-xl w-[500px]">

          {/* EVENT INFO */}

          <h2 className="text-2xl font-bold text-gray-800">
            {event.title}
          </h2>

          <p className="mt-2 text-gray-600">
            Price: ₹{event.price}
          </p>

          {/* QR */}

          <div className="mt-6 flex flex-col items-center">

            <img
              src="/qr.png"
              alt="QR Payment"
              className="w-72 h-72 object-contain rounded-2xl shadow-lg border p-2"
            />

            <p className="text-sm text-gray-500 mt-2">
              Scan QR to Pay
            </p>

          </div>

          {/* USER */}

          {user && (

            <div className="mt-6 text-sm text-gray-700 space-y-1">

              <p>
                <b>Name:</b> {user.name}
              </p>

              <p>
                <b>Email:</b> {user.email}
              </p>

            </div>

          )}

          {/* FORM */}

          <form
            className="mt-6 space-y-4"
            onSubmit={handleSubmit}
          >

            <input
              type="text"
              placeholder="Transaction ID"
              value={transactionId}
              onChange={(e) =>
                setTransactionId(e.target.value)
              }
              className="w-full border p-3 rounded-lg"
            />

            <input
              type="file"
              onChange={(e) =>
                setScreenshot(e.target.files[0])
              }
              className="w-full border p-3 rounded-lg"
            />

            <button
              className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-3 rounded-lg font-semibold"
            >
              Submit Payment
            </button>

          </form>

        </div>

      </section>

    </div>

  );

}

export default EventPayment;