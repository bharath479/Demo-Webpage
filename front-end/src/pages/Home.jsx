import AppointmentForm from "../components/AppointmentForm";

export default function Home() {
  return (
    <div className="font-sans text-gray-800">

      {/* Header */}
      <header className="bg-blue-700 text-white p-6 text-center">
        <h1 className="text-3xl font-bold">DR.JSR DENTAL HEALTH SPECIALITY</h1>
        <p className="mt-2 text-lg">
          Advanced Technology • Comprehensive Dental Care
        </p>
      </header>

      {/* Clinic Description */}
      <section className="p-6 max-w-5xl mx-auto">
        <h2 className="text-2xl font-semibold mb-3">About Our Clinic</h2>
        <p>
          DR.JSR DENTAL HEALTH SPECIALITY is a leading dental care center in
          Hyderabad, known for its advanced technology and comprehensive dental
          services. Located in Surya Towers, the clinic offers a wide range of
          treatments—from routine check-ups to complex procedures—all under one roof.
        </p>
      </section>

      {/* Services */}
      <section className="bg-gray-50 p-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-semibold mb-4">Services Offered</h2>
          <ul className="grid md:grid-cols-2 gap-3 list-disc list-inside">
            <li>Laser treatments (gum surgery, whitening, root canals)</li>
            <li>Orthodontics (metal braces, invisible aligners, lingual braces)</li>
            <li>Endodontics (root canal therapy)</li>
            <li>Prosthodontics (crowns, bridges, dentures)</li>
            <li>Periodontics (gum disease treatment & maintenance)</li>
            <li>Pediatric dentistry (specialized child care)</li>
            <li>Cosmetic dentistry (veneers, bonding, smile makeovers)</li>
          </ul>
        </div>
      </section>

      {/* Expertise & Facilities */}
      <section className="p-6 max-w-5xl mx-auto">
        <h2 className="text-2xl font-semibold mb-3">Expertise & Facilities</h2>
        <p>
          The clinic is led by <strong>Dr. G. Jai Sekhar Reddy</strong>, a renowned
          Oral and Maxillofacial Surgeon with over two decades of experience.
          Supported by a highly skilled team, the clinic ensures personalized,
          high-quality dental care.
        </p>
        <p className="mt-3">
          Our facility is equipped with state-of-the-art technology including OPG
          machines, automatic sterilizers, and advanced dental chairs, providing a
          safe and comfortable treatment environment.
        </p>
      </section>

      {/* Patient Experience */}
      <section className="bg-gray-50 p-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-semibold mb-3">Patient Experience</h2>
          <p>
            Patients frequently praise our clinic for its friendly staff,
            professional approach, and attention to detail. We strictly follow
            international infection-control standards to ensure a hygienic and
            secure environment.
          </p>
          <p className="mt-2">
            Our emphasis on preventive care and patient education helps patients
            maintain long-term oral health.
          </p>
        </div>
      </section>

      {/* Appointment Booking */}
      <section className="p-6 max-w-5xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4">Book an Appointment</h2>
        <AppointmentForm />
      </section>

      {/* Contact & Location */}
      <footer className="bg-blue-700 text-white p-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-4">
          <div>
            <h3 className="font-semibold text-lg mb-2">Contact Details</h3>
            <p>📞 +91 83419 11977</p>
            <p className="mt-1">🕘 Opening Hours: 8:30 AM – 1:00 PM</p>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-2">Location</h3>
            <p>
              Surya Towers, 1-128, Railway Crossing, behind Anutex,
              opposite Gautham Nagar, Bhavani Nagar, Malkajgiri,
              Secunderabad, Telangana 500047
            </p>
            <a
              href="https://www.google.com/maps"
              target="_blank"
              className="underline mt-2 inline-block"
            >
              Get Directions on Google Maps
            </a>
          </div>
        </div>
      </footer>

    </div>
  );
}