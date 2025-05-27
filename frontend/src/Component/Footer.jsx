
const Footer = () => {
  return (
    <footer className="bg-slate-600 text-gray-300 py-8">
      <div className="container mx-auto px-4">
        {/* Top banner */}
        <div className="flex flex-col md:flex-row justify-between items-center border-b border-gray-700 pb-6 mb-6">
          <div className="text-2xl font-bold text-red-500">sidd</div>
          <div className="text-center md:text-right space-y-1 mt-4 md:mt-0">
            <p>Balaju , Kathmandu</p>
            <p>Open: 05:00 PM - 12:00 AM</p>
          </div>
        </div>

        {/* Bottom banner */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm space-y-2 md:space-y-0">
          <p>Developed By <span className="font-semibold">Sidd</span></p>
          <p>© {new Date().getFullYear()} All Rights Reserved By Sidd.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
