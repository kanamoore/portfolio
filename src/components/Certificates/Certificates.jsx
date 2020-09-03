import React, {
  useContext,
  // useEffect,
  // useState
} from 'react';
import * as moment from 'moment';
// import Fade from 'react-reveal/Fade';
// import Tilt from 'react-tilt';
import { Container } from 'react-bootstrap';
import PortfolioContext from '../../context/context';
import Title from '../Title/Title';

const Certificates = () => {
  const { certificates } = useContext(PortfolioContext);

  // const [isDesktop, setIsDesktop] = useState(false);
  // const [isMobile, setIsMobile] = useState(false);

  // useEffect(() => {
  //   if (window.innerWidth > 769) {
  //     setIsDesktop(true);
  //     setIsMobile(false);
  //   } else {
  //     setIsMobile(true);
  //     setIsDesktop(false);
  //   }
  // }, []);

  return (
    <section id="certificates">
      <Container>
        <div className="certificate-wrapper">
          <Title title="certificates" />
          <div className="display-grid">
            {certificates.map((certificate) => {
              const { id, title, description, source, url, date } = certificate;
              return (
                <div className="card" key={id}>
                  <div className="content">
                    <h3 className="content__title">{title}</h3>
                    <p className="content__date">
                      {source}, {moment(date).format('MM/YYYY')}
                    </p>
                    <div className="content__description">
                      <p>{description}</p>
                    </div>
                  </div>
                  <div className="link">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cta-btn cta-btn--hero"
                      href={url || '#!'}
                    >
                      View Certificate
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Certificates;
