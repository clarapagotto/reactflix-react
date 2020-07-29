import styled from 'styled-components';
import bg1 from '../../assets/img/bg1.png'
import bg2 from '../../assets/img/bg2.png'
import bg3 from '../../assets/img/bg3.png'
import bg4 from '../../assets/img/bg4.png'
import bg5 from '../../assets/img/bg5.png'
import bg6 from '../../assets/img/bg6.png'

export const ContentAreaContainer = styled.section`
  margin-left: 5%;
  margin-right: 5%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 10;
  @media (max-width: 800px) {
    padding-top: 100px;
    flex-direction: column;
  }
`;

ContentAreaContainer.Item = styled.div`
  width: 50%;
  display: inline-block;
  margin-bottom: 50px;
  @media (max-width: 800px) {
    width: 100%;
  }
`;

ContentAreaContainer.Category = styled.h1`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 60px;
  line-height: 70px;
  display: flex;
  align-items: center;
  text-align: center;
  display: inline-block; 
  padding: 25px;
  line-height: 1;
  border-radius: 4px;

  @media (max-width: 800px) {
    display: none;
    font-size: 18px;
    padding: 10px;
  }
`;

ContentAreaContainer.Description = styled.p`
  @media (max-width: 800px) {
    display: none;
  }
`;

ContentAreaContainer.Title = styled.h2`
  font-style: normal;
  font-weight: 300;
  font-size: 40px;
  line-height: 1;
  margin-top: 0;
  margin-bottom: 32px;

  @media (max-width: 800px) {
    font-size: 32px;
    text-align: center;
  }
`;

export const BannerMainContainer = styled.section`
  height: 80vh;
  position: relative;
  color: #fff;
  /* background-image: ${({ backgroundImage }) => `url(${backgroundImage})`};  */
  background-image: url(${bg1});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  transition: 5s;

  animation-name: animate;
  animation-direction: alternate-reverse;
  animation-duration: 30s;
  animation-fill-mode: forwards;
  animation-iteration-count: infinite;
  animation-play-state: running;
  animation-timing-function: ease-in-out;

  @keyframes animate{
    0%{
      background-image:url(${bg2});
    }
    20%{
      background-image:url(${bg3});
    }
    40%{
      background-image:url(${bg4});
    }
    60%{
      background-image:url(${bg5});
    }
    80%{
      background-image:url(${bg6});
    }
    100%{
      background-image:url(${bg1});
    }
  }

  @media (max-width: 800px) {
    height: auto;
    min-height: 50vh;
  }

  &:after,
  &:before {
    content: "";
    display: block;
    position: absolute;
    left: 0;
    right: 0;
    margin: auto;
    height: 20%;
  }

  &:before {
    top: 0;
    height: 100%;
    background: rgba(0,0,0,0.5);
  }

  &:after {
    bottom: 0;
    background: linear-gradient(0deg, #141414 0%, transparent 100%);
  }
`;

export const WatchButton = styled.button`
  font-family: 'Roboto', sans-serif;
  box-sizing: border-box;
  cursor: pointer;
  padding: 16px 24px;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  outline: none;
  border-radius: 5px;
  text-decoration: none;
  display: inline-block;
  border: 1px solid transparent;
  color: var(--black);
  background: var(--white);
  border-color: var(--black);
  transition: opacity .3s;
  display: none;
  margin: 0 auto;
  @media (max-width: 800px) {
    display: block;
  }
`;