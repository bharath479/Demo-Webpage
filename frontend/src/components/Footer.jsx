export default function Footer() {
  return (
    <footer className="bg-blue-700 text-white mt-10">
      <div className="max-w-6xl mx-auto px-4 py-6 grid md:grid-cols-2 gap-4">

        <div>
          <h3 className="font-semibold text-lg mb-2">
            DR.JSR DENTAL HEALTH SPECIALITY
          </h3>
          <p className="text-sm">
            Leading dental care center in Hyderabad offering advanced,
            hygienic, and patient-focused treatments.
          </p>
        </div>

        <div>
          <h3 className="font-semibold text-lg mb-2">Contact</h3>
          <p className="text-sm">📞 +91 83419 11977</p>
          <p className="text-sm">🕘 8:30 AM – 1:00 PM</p>
          <p className="text-sm mt-1">
            📍 Malkajgiri, Secunderabad, Telangana
          </p>
        </div>

      </div>

      <div className="text-center text-xs bg-blue-800 py-2">
        © {new Date().getFullYear()} DR.JSR Dental Health Speciality. All rights reserved.
      </div>
    </footer>
  );
}
