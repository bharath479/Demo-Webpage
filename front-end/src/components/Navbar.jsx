export default function Navbar() {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        <div>
          <h1 className="text-xl font-bold text-blue-700">
            DR.JSR DENTAL HEALTH SPECIALITY
          </h1>
          <p className="text-xs text-gray-500">
            Advanced & Comprehensive Dental Care
          </p>
        </div>

        <ul className="flex gap-6 text-sm font-medium text-gray-700">
          <li><a href="#about" className="hover:text-blue-700">About</a></li>
          <li><a href="#services" className="hover:text-blue-700">Services</a></li>
          <li><a href="#appointment" className="hover:text-blue-700">Appointment</a></li>
          <li><a href="#contact" className="hover:text-blue-700">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}
