function Footer() {
  return (
    <footer className="bg-gray-100 mt-10 px-10 py-10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company */}
          <div>
            <h3 className="font-bold text-lg mb-4">Company</h3>
            <ul className="space-y-2 text-gray-600">
              <li className="hover:text-red-500 cursor-pointer">About</li>
              <li className="hover:text-red-500 cursor-pointer">Careers</li>
              <li className="hover:text-red-500 cursor-pointer">Newsroom</li>
              <li className="hover:text-red-500 cursor-pointer">Investors</li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-bold text-lg mb-4">Support</h3>
            <ul className="space-y-2 text-gray-600">
              <li className="hover:text-red-500 cursor-pointer">
                Help Center
              </li>
              <li className="hover:text-red-500 cursor-pointer">
                AirCover
              </li>
              <li className="hover:text-red-500 cursor-pointer">
                Cancellation Options
              </li>
              <li className="hover:text-red-500 cursor-pointer">
                Report a Problem
              </li>
            </ul>
          </div>

          {/* Hosting */}
          <div>
            <h3 className="font-bold text-lg mb-4">Hosting</h3>
            <ul className="space-y-2 text-gray-600">
              <li className="hover:text-red-500 cursor-pointer">
                Become a Host
              </li>
              <li className="hover:text-red-500 cursor-pointer">
                Host Resources
              </li>
              <li className="hover:text-red-500 cursor-pointer">
                Community Forum
              </li>
              <li className="hover:text-red-500 cursor-pointer">
                Responsible Hosting
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="font-bold text-lg mb-4">Social Links</h3>
            <ul className="space-y-2 text-gray-600">
              <li className="hover:text-red-500 cursor-pointer">Facebook</li>
              <li className="hover:text-red-500 cursor-pointer">Instagram</li>
              <li className="hover:text-red-500 cursor-pointer">Twitter</li>
              <li className="hover:text-red-500 cursor-pointer">LinkedIn</li>
            </ul>
          </div>
        </div>

        <hr className="my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
          <p>© 2026 Airbnb Clone. All rights reserved.</p>

          <div className="flex gap-6 mt-4 md:mt-0">
            <span className="cursor-pointer hover:text-red-500">
              Privacy
            </span>
            <span className="cursor-pointer hover:text-red-500">
              Terms
            </span>
            <span className="cursor-pointer hover:text-red-500">
              Sitemap
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;