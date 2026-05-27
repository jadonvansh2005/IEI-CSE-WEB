import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Membership() {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    branchYear: "",
    domain: "",
    skills: "",
    reason: ""
  });

  const [user, setUser] = useState(null);

  const [membershipStatus, setMembershipStatus] =
    useState(null);

  const [screenshot, setScreenshot] = useState(null);

  const [loading, setLoading] = useState(false);

  const token =
  localStorage.getItem("token")?.trim();

  /* ================= CHECK LOGIN ================= */

  useEffect(() => {

    if (!token) {
      navigate("/login");
    }

  }, [token, navigate]);

  /* ================= FETCH USER PROFILE ================= */

  useEffect(() => {

    const fetchProfile = async () => {

      try {

        const response = await axios.get(
          "http://localhost:5000/api/users/profile",
          {
            headers: {
              Authorization: `Bearer ${token}`
            }
          }
        );

        const userData = response.data;

        setUser(userData);

        setFormData((prev) => ({
          ...prev,
          name: userData.name || "",
          email: userData.email || "",
          phone: userData.phone || "",
          branchYear:
            `${userData.branch} - ${userData.year}`
        }));

        /* CHECK EXISTING MEMBERSHIP */

        try {

          const membershipResponse =
            await axios.get(
              `http://localhost:5000/api/memberships/user/${userData.id}`,
              {
                headers: {
                  Authorization: `Bearer ${token}`
                }
              }
            );

          if (membershipResponse.data.membership) {

            setMembershipStatus(
              membershipResponse
                .data
                .membership
                .membershipStatus
            );

          }

        } catch (membershipError) {

          // USER HAS NO MEMBERSHIP YET
          setMembershipStatus(null);

        }

      } catch (error) {

        console.log(
          error.response?.data || error.message
        );
      }

    };

    fetchProfile();

  }, [token]);

  /* ================= HANDLE INPUT ================= */

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });

  };

  /* ================= SUBMIT ================= */

  const handleSubmit = async (e) => {

    e.preventDefault();

    if (!formData.domain) {
      alert("Please select a domain");
      return;
    }

    if (!screenshot) {
      alert("Upload payment screenshot");
      return;
    }

    try {

      setLoading(true);

      const submitData = new FormData();

      submitData.append(
        "userId",
        user.id
      );

      submitData.append(
        "domain",
        formData.domain
      );

      submitData.append(
        "skills",
        formData.skills
      );

      submitData.append(
        "reason",
        formData.reason
      );

      submitData.append(
        "paymentScreenshot",
        screenshot
      );

      const response = await axios.post(
        "http://localhost:5000/api/memberships",
        submitData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type":
              "multipart/form-data"
          }
        }
      );

      alert(response.data.message);

      setMembershipStatus("pending");

    } catch (error) {

      console.log(error);

      alert(
        error.response?.data?.message ||
        "Application failed"
      );

    } finally {

      setLoading(false);

    }

  };

  return (
    <div className="min-h-screen bg-slate-950 font-sans text-slate-800 py-20 px-6 relative overflow-hidden flex items-center justify-center">

      {/* Dynamic Soft Blur Background Orbs synchronized with your official theme layout */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[130px] pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 w-[450px] h-[450px] bg-indigo-600/10 rounded-full blur-[150px] pointer-events-none"></div>

      {/* Back to premium dark-blue glass layout sheet with high-impact hover mechanics restored */}
      <div className="w-full max-w-4xl bg-slate-900/40 backdrop-blur-2xl border border-white/10 rounded-[32px] p-8 md:p-12 shadow-[0_30px_70px_rgba(0,0,0,0.4)] relative z-10 hover:scale-[1.01] hover:border-blue-500/30 transition-all duration-500">

        <h1 className="text-4xl md:text-5xl font-black text-white text-center font-heading tracking-tight leading-none">
          Join The Community
        </h1>

        <p className="text-center text-slate-300 font-medium text-sm md:text-base mt-4 tracking-wide">
          Be a part of the innovation.
        </p>

        {/* ================= MEMBERSHIP STATUS ================= */}

        {membershipStatus && (

          <div className="mt-8 bg-slate-950/60 border border-white/10 rounded-2xl p-6 text-center shadow-inner animate-fadeIn">

            <h2 className="text-lg font-bold font-heading tracking-wider uppercase text-slate-300">
              Membership Status
            </h2>

            <p
              className={`mt-4 text-base font-extrabold tracking-widest font-heading uppercase ${
                membershipStatus === "approved"
                  ? "text-emerald-400"
                  : "text-amber-400"
              }`}
            >
              {membershipStatus.toUpperCase()}
            </p>

          </div>

        )}

        {/* ================= FORM ================= */}

        {!membershipStatus && (

          <form
            onSubmit={handleSubmit}
            className="mt-12 space-y-8"
          >

            {/* GRID */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">

              <input
                type="text"
                name="name"
                value={formData.name}
                readOnly
                className="bg-slate-950/40 border border-white/10 rounded-xl p-4 text-slate-400 font-semibold text-sm outline-none cursor-not-allowed select-none border-dashed"
              />

              <input
                type="email"
                name="email"
                value={formData.email}
                readOnly
                className="bg-slate-950/40 border border-white/10 rounded-xl p-4 text-slate-400 font-semibold text-sm outline-none cursor-not-allowed select-none border-dashed truncate"
              />

              <input
                type="text"
                name="phone"
                value={formData.phone}
                readOnly
                className="bg-slate-950/40 border border-white/10 rounded-xl p-4 text-slate-400 font-semibold text-sm outline-none cursor-not-allowed select-none border-dashed"
              />

              <input
                type="text"
                name="branchYear"
                value={formData.branchYear}
                readOnly
                className="bg-slate-950/40 border border-white/10 rounded-xl p-4 text-slate-400 font-semibold text-sm outline-none cursor-not-allowed select-none border-dashed"
              />

            </div>

            {/* DOMAIN */}
            <div className="bg-slate-950/20 border border-white/5 p-6 rounded-2xl">

              <p className="text-slate-200 font-bold text-sm font-heading tracking-wide mb-4">
                Preferred Domain
              </p>

              <div className="flex flex-wrap gap-4">

                {[
                  "Technical",
                  "Design",
                  "Marketing",
                  "Events"
                ].map((domain) => (

                  <button
                    type="button"
                    key={domain}
                    onClick={() =>
                      setFormData({
                        ...formData,
                        domain
                      })
                    }
                    className={`px-6 py-2.5 rounded-xl text-xs font-bold font-heading tracking-wide transition-all duration-300 cursor-pointer border ${
                      formData.domain === domain
                        ? "bg-cyan-500 border-cyan-400 text-white shadow-lg shadow-cyan-500/20 scale-105"
                        : "border-white/10 bg-white/5 text-slate-300 hover:bg-white/10 hover:text-white"
                    }`}
                  >
                    {domain}
                  </button>

                ))}

              </div>

            </div>

            {/* SKILLS */}
            <input
              type="text"
              name="skills"
              placeholder="Technical Skills (Optional)"
              value={formData.skills}
              onChange={handleChange}
              className="w-full bg-slate-950/40 border border-white/10 focus:border-blue-500/40 p-4 rounded-xl focus:ring-4 focus:ring-blue-500/10 focus:outline-none transition-all duration-300 font-medium text-sm text-white placeholder-slate-500"
            />

            {/* REASON */}
            <textarea
              rows="5"
              name="reason"
              placeholder="Why do you want to join IEI?"
              value={formData.reason}
              onChange={handleChange}
              className="w-full bg-slate-950/40 border border-white/10 focus:border-blue-500/40 p-4 rounded-xl focus:ring-4 focus:ring-blue-500/10 focus:outline-none transition-all duration-300 font-medium text-sm text-white placeholder-slate-500 leading-relaxed"
            />

            {/* QR CODE */}
            <div className="text-center bg-slate-950/30 border border-white/5 p-8 rounded-2xl shadow-inner">

              <h2 className="text-xl font-bold text-white font-heading tracking-tight mb-6">
                Membership Payment
              </h2>

              {/* QR Image dimension node configured significantly wider */}
              <img
                src="/qr.png"
                alt="QR"
                className="w-80 h-80 mx-auto rounded-2xl border-2 border-slate-800 bg-white p-3 shadow-2xl transform hover:scale-[1.02] transition duration-300 select-none pointer-events-none"
              />

              {/* Secure fee label modified strictly to 236 */}
              <p className="text-cyan-400 font-bold text-lg mt-4 tracking-wide font-heading">
                Membership Fee: ₹236
              </p>

            </div>

            {/* SCREENSHOT */}
            <div className="flex flex-col gap-2">

              <p className="text-xs uppercase tracking-wider text-slate-400 font-bold ml-1">
                Upload Payment Screenshot
              </p>

              <input
                type="file"
                accept="image/*"
                onChange={(e) =>
                  setScreenshot(e.target.files[0])
                }
                className="w-full bg-slate-950/40 border border-white/10 focus:border-blue-500/40 p-3.5 rounded-xl focus:outline-none text-slate-400 text-sm font-semibold file:mr-4 file:py-1.5 file:px-4 file:rounded-xl file:border-0 file:text-xs file:font-bold file:bg-blue-600 file:text-white file:hover:bg-blue-700 file:transition-colors cursor-pointer"
                required
              />

            </div>

            {/* BUTTON */}
            <button
              type="submit"
              disabled={loading}
              className="w-full py-4 rounded-xl btn-club-glow text-white font-bold font-heading text-sm tracking-wide disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer flex items-center justify-center shadow-xl shadow-blue-600/20"
            >
              {loading
                ? "Submitting Application Ledger..."
                : "Submit Official Application"}
            </button>

          </form>

        )}

      </div>

    </div>
  );
}

export default Membership;