import {
  Facebook,
  Twitter,
  GithubIcon as GitHub,
  Linkedin,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t bg-background transition-colors duration-300">
      <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
        <div className="md:flex md:items-start md:justify-between">
          <div className="flex justify-center space-x-6 md:order-2">
            <a
              href="https://www.facebook.com/ahmed.abusabha583/"
              className="text-gray-400 hover:text-gray-500"
            >
              <span className="sr-only">Facebook</span>
              <Facebook className="h-6 w-6" />
            </a>
            <a
              href="https://x.com/abuSabha583"
              className="text-gray-400 hover:text-gray-500"
            >
              <span className="sr-only">Twitter</span>
              <Twitter className="h-6 w-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/ahmed-sabha-927589277/"
              className="text-gray-400 hover:text-gray-500"
            >
              <span className="sr-only">Instagram</span>
              <Linkedin className="h-6 w-6" />
            </a>
            <a
              href="https://github.com/AHMEDASABHA"
              className="text-gray-400 hover:text-gray-500"
            >
              <span className="sr-only">GitHub</span>
              <GitHub className="h-6 w-6" />
            </a>
          </div>
          <div className="mt-8 md:order-1 md:mt-0">
            <p className="text-center text-base text-gray-500 dark:text-gray-400">
              &copy; {new Date().getFullYear()} Recipe App by Ahmed Abu Sabha.
              All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
