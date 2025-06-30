import React from "react";

const Footer = () => {
  return (
    <footer className="bg-base-200 py-6 text-center text-sm text-gray-600 dark:text-gray-400">
      <div className="max-w-5xl mx-auto px-4">
        <p>
          Created by{" "}
          <a
            href="https://www.fiverr.com/bulbul_web_dev?up_rollout=true"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline"
          >
            @bulbul_web_dev
          </a>
          . &copy; {new Date().getFullYear()} All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
