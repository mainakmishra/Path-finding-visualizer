import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer class="footer bg-dark py-3 mt-auto">
      <div class="container text-center">
        <span class="text-muted">
          Made by &copy;Mainak Mishra{" "}
          <a href="https://github.com/mainakmishra">
            <FaGithub />
          </a>{" "}
          <a href="https://www.linkedin.com/in/mainak-mishra-7761121b3">
            <FaLinkedin />
          </a>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
