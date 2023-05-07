import React from "react";

export interface IProps {}

const Footer: React.FC<IProps> = () => {
  return (
    <>
      <footer className="wrapper style1 align-center">
        <div className="inner">
          <a className="psychology-today-seal" href="https://www.psychologytoday.com/profile/435847" target="_top" title="Jessie Lee Ogienko"></a>
          <ul className="icons">
            <li>
              <a
                href="mailto:hello@caladriustherapy.com"
                className="icon style2 solid fa-envelope"
              >
                <span className="label">Email</span>
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/company/caladrius-therapy/"
                className="icon brands style2 fa-linkedin"
              >
                <span className="label">LinkedIn</span>
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/caladriustherapy/"
                className="icon brands style2 fa-instagram"
              >
                <span className="label">Instagram</span>
              </a>
            </li>
          </ul>
          <p>
            &copy; 2018-2023 Caladrius Therapy. Design:{" "}
            <a href="https://html5up.net/story">Story by HTML5 UP</a>.
            Photographs by{" "}<a href="https://unsplash.com/@the_real_napster">
              Dominic Lange
            </a>{" "}
            and <a href="https://unsplash.com/@elijahsad">Elijah O'Donnell</a>{" "}
            on <a href="https://unsplash.com">Unsplash</a>. Headshots and "See Our Space" photographs by <a href="https://www.alisharuddphotography.com">Alisha Rudd</a>.
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
