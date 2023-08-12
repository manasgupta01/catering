import React, { useRef } from 'react';
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
  padding: 20px;
  background-color: rgba(0, 0, 0, 0.6); /* Adjust the background color */
  border-radius: 10px; /* Add border radius for rounded corners */
`;

const ImageContainer = styled.div`
  flex: 1;
  display: flex;
`;

const Image = styled.img`
  max-width: 100%;
  height: auto;
`;

const ContentContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const AboutSection = ({ sectionRef }) => {
  return (
    <>
      <Parallax bgImage={`${process.env.PUBLIC_URL}/images/pic4.jpg`} strength={-800}>
        <div ref={sectionRef}>
          <SectionWrapper>
            <ImageContainer>
              <Image src={`${process.env.PUBLIC_URL}/images/about.jpg`} alt="About Us" />
            </ImageContainer>
            <TextContainer>
              <ContentContainer>
                <h2>About Us</h2>
                <p>
                  {/* Your about content */}
                </p>
              </ContentContainer>
            </TextContainer>
          </SectionWrapper>
          <SectionWrapper style={{ flexDirection: 'row-reverse' }}>
            <ImageContainer>
              <Image src={`${process.env.PUBLIC_URL}/images/kitchen.jpg`} alt="The Kitchen" />
							
            </ImageContainer>
            <TextContainer>
              <ContentContainer>
                <h2>The Kitchen</h2>
                <p>
                  hi my name is khan and i am not a terrorist there can only be one winner lets go{/* Your kitchen content */}
                </p>
              </ContentContainer>
            </TextContainer>
          </SectionWrapper>
        </div>
				
      </Parallax>
    </>
  );
};

export default AboutSection;
