import React, { useState, useEffect } from 'react';
import { Parallax } from 'react-parallax';
import styled from 'styled-components';

const SectionWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 80px 0;
  color: #fff;
`;

const TextContainer = styled.div`
  flex: 1;
  padding: 0 20px;
`;

const ImageContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
`;

const Image = styled.img`
  max-width: 100%;
  height: auto;
`;

const ContentContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const AboutSection = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.pageYOffset);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <Parallax bgImage={`${process.env.PUBLIC_URL}/images/pic4.jpg`} strength={-800}>
        <SectionWrapper>
          <TextContainer>
            <ContentContainer>
              <h2>About Us</h2>
              <p>
              
Looking for a perfect food affair to complement your special occasion? Look no further! Gala Caterers provide a sumptuous food itinerary to fulfill your each and every catering need. Be it a large, mid or small sized event, our full-range of outdoor and indoor catering services cover complete food preparation and presentation for formal and informal gatherings.

From an array of food items to choose from, Gala Caterers bring to you the best from all cuisines to suit your event, tastes and pockets even. So while you leave your food worries to us, we let you enjoy those special moments in all the glory. So let the celebrations begin!!   {/* Your about content */}
              </p>
            </ContentContainer>
          </TextContainer>
          <ImageContainer>
            <Image src={`${process.env.PUBLIC_URL}/images/about.jpg`} alt="About Us" />
          </ImageContainer>
        </SectionWrapper>
        <SectionWrapper>
          <TextContainer>
            <ContentContainer>
              <h2>The Kitchen</h2>
              <p>
              At Ayojan Catering Kitchen we believe that food should not only look good, it should taste delicious. Whether it's an all day conference, a wedding occasion, product launch, a business meeting, a Social event or a private dinner to commemorate a special occasion, we believe your guests should enjoy every bite.
RAW MATERIAL
We are committed to offer quality in products & services delivered to our clients. For catering, we procure raw materials & ingredients from reputed suppliers and ensure that they undergo strict inspection before being used in cooking. We make sure that hygienic and nutritious food is provided to our clients. Our quality experts check that there are no compromises done in terms of hygiene and food quality.
STANDARDS
We make sure that our food manufacturing meet high quality standards of the industry. Ayojan Catering has implemented an environmental management system (EMS) to monitor, manage and reduce its impact on the environment as well as making commitments to comply with legislation, prevent pollution and continually improve the EMS.
HYGINE
A State of the Art centralized food factory with huge independent kitchen spaces for different cuisines & equipments maintaining best of hygiene standards. All food preparation we doing with Packaged Drinking water.     {/* Your kitchen content */}
              </p>
            </ContentContainer>
          </TextContainer>
          <ImageContainer>
            <Image src={`${process.env.PUBLIC_URL}/images/kitchen.jpg`} alt="The Kitchen" />
          </ImageContainer>
        </SectionWrapper>
				<SectionWrapper>
          <TextContainer>
            <ContentContainer>
              <h2>The Kitchen</h2>
              <p>
                At Ayojan Catering Kitchen we believe that food should not only look good, it should taste delicious. Whether it's an all day conference...
                {/* Your kitchen content */}
              </p>
            </ContentContainer>
          </TextContainer>
          <ImageContainer>
            <Image src={`${process.env.PUBLIC_URL}/images/kitchen.jpg`} alt="The Kitchen" />
          </ImageContainer>
        </SectionWrapper>
      </Parallax>
    </>
  );
};

export default AboutSection;
