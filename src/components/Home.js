import React, { useState } from 'react';
import '../styles/home.css';
import fireworks from '../img/fireworks.jpg';
import MenuRoundedIcon from '@material-ui/icons/MenuRounded';
import ourlivingroom from '../img/ourlivingroom.jpg';
import thegoldenband from '../img/thegoldenband.jpg';
import knownbyheart from '../img/knownbyheart.jpg';
import promiseoflove from '../img/promiseoflove.jpg';
import hardtofind from '../img/hardtofind.jpg';
import analogSetYellow from '../img/analogSetYellow.jpg';
import setfree from '../img/setfree.jpg';
import { AnimatePresence, motion } from 'framer-motion';
import Menu from './Menu.js';
import Album from './Album';
import CloseIcon from '@material-ui/icons/Close';

function Home() {
  const [picture, setPicture] = useState(analogSetYellow);
  const [opacityLevel, setOpacity] = useState([0, 1]);
  const [seeAlbum, setSeeAlbum] = useState('');
  const [delayHandler, setDelayHandler] = useState(null);
  const [showMenu, setShowMenu] = useState(false);
  const [menuColor, setMenuColor] = useState('#FFC94C');
  const [prop_album, setAlbum] = useState('');
  const [showAlbum, setShowAlbum] = useState(false);

  const pVariants = {
    hover: {
      color: [null, '#4b6464', '#FFC94C', '#f37b7e'],
      transition: { repeat: Infinity, duration: 6 },
    },
  };

  const seeAlbumVariants = {
    animate: {
      x: 0,
      transition: { delay: 0.3, duration: 1 },
    },
    initial: {
      x: 400,
    },
    hover: {
      color: [null, '#4b6464', '#FFC94C', '#f37b7e'],
      transition: { repeat: Infinity, duration: 6 },
    },
  };

  const leftDivVariants = {
    animate: {
      x: 0,
      transition: { delay: 1, duration: 1.7 },
    },
    initial: {
      x: -800,
    },
  };

  const rightDivVariants = {
    animate: {
      x: 0,
      transition: { delay: 1, duration: 2 },
    },
    initial: {
      x: 800,
    },
  };

  const handleMouseEnter = (event) => {
    setDelayHandler(
      setTimeout(() => {
        handleHover(event);
      }, 500)
    );
  };

  const handleMouseLeave = () => {
    clearTimeout(delayHandler);
  };

  const handleMenuClick = () => {
    if (showMenu) {
      setShowMenu(false);
      setTimeout(() => {
        setMenuColor('#FFC94C');
      }, 1400);
      return;
    }
    setShowMenu(true);
    setMenuColor('#4b6464');
  };

  const handleHover = (e) => {
    switch (e.target.id) {
      case 'fireworks':
        setPicture(fireworks);
        setAlbum(e.target.id);
        setSeeAlbum('SEE ALBUM (1995)');
        setOpacity([0.1, 1]);
        break;
      case 'livingroom':
        setPicture(ourlivingroom);
        setAlbum(e.target.id);
        setSeeAlbum('SEE ALBUM (1997)');
        setOpacity([0.1, 1]);
        break;
      case 'thegoldenband':
        setPicture(thegoldenband);
        setAlbum(e.target.id);
        setSeeAlbum('SEE ALBUM (1999)');
        setOpacity([0.1, 1]);
        break;
      case 'knownbyheart':
        setPicture(knownbyheart);
        setAlbum(e.target.id);
        setSeeAlbum('SEE ALBUM (2001)');
        setOpacity([0.1, 1]);
        break;
      case 'promiseoflove':
        setPicture(promiseoflove);
        setAlbum(e.target.id);
        setSeeAlbum('SEE ALBUM (2003)');
        setOpacity([0.1, 1]);
        break;
      case 'setfree':
        setPicture(setfree);
        setAlbum(e.target.id);
        setSeeAlbum('SEE ALBUM (2005)');
        setOpacity([0.1, 1]);
        break;
      case 'hardtofind':
        setPicture(hardtofind);
        setAlbum(e.target.id);
        setSeeAlbum('SEE ALBUM (2006)');
        setOpacity([0.1, 1]);
        break;
      default:
        console.log('defo');
    }
  };

  const handleAlbumClick = () => {
    setShowAlbum(true);
  };

  return (
    <div className="home">
      <div className="home__container">
        <>
          <AnimatePresence>
            <Menu showMenu={showMenu} />
          </AnimatePresence>
          <AnimatePresence>
            <Album
              showAlbum={showAlbum}
              album={prop_album}
              albumPic={picture}
            />
          </AnimatePresence>
        </>

        <div className="home__title">
          <h1
            style={{
              fontFamily: 'Neue Plak',
              letterSpacing: ' 0.117647em',
              fontSize: 55,
            }}
          >
            The american analog SET
          </h1>
        </div>
        <div className="album__arrow" onClick={() => setShowAlbum(false)}>
          <CloseIcon
            style={{
              color: menuColor,
              fontSize: 50,
              visibility: showAlbum ? '' : 'hidden',
            }}
          />
        </div>
        <motion.div className="home__left">
          <motion.div
            variants={leftDivVariants}
            initial="initial"
            animate="animate"
            className="home__header"
          >
            <MenuRoundedIcon
              style={{ fontSize: 50, color: menuColor }}
              onClick={() => handleMenuClick()}
            />
          </motion.div>
          <div className="home__left__copyandAlbums">
            <motion.div
              variants={leftDivVariants}
              initial="initial"
              animate="animate"
              className="home__left__copyright"
            >
              <p>
                No Copyright intended - Unofficial website - Paoleski's
                Productions 2020
              </p>
            </motion.div>
            <motion.div className="home__left__albumsList">
              <motion.p
                variants={pVariants}
                whileHover="hover"
                initial={{ x: -800, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 2 }}
                id="fireworks"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                style={{
                  color: '#FEC056',
                  marginBottom: -5,
                  width: 'fit-content',
                }}
              >
                The Fun Of Watching Fireworks
              </motion.p>
              <motion.p
                id="livingroom"
                variants={pVariants}
                initial={{ x: -800, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.6, duration: 2 }}
                whileHover="hover"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                style={{
                  color: '#FAAF66',
                  marginTop: -5,
                  marginBottom: -5,
                  width: 'fit-content',
                }}
              >
                From our living room to yours
              </motion.p>
              <motion.p
                id="thegoldenband"
                variants={pVariants}
                initial={{ x: -800, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.7, duration: 2 }}
                whileHover="hover"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                style={{
                  color: '#F9A66C',
                  marginTop: -5,
                  marginBottom: -5,
                  width: 'fit-content',
                }}
              >
                The Golden Band
              </motion.p>
              <motion.p
                id="knownbyheart"
                variants={pVariants}
                initial={{ x: -800, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.8, duration: 2 }}
                whileHover="hover"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                style={{
                  color: '#F79574',
                  marginTop: -5,
                  marginBottom: -5,
                  width: 'fit-content',
                }}
              >
                Known by Heart
              </motion.p>
              <motion.p
                id="promiseoflove"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                variants={pVariants}
                initial={{ x: -800, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.9, duration: 2 }}
                whileHover="hover"
                style={{
                  color: '#F89E70',
                  marginTop: -5,
                  marginBottom: -5,
                  width: 'fit-content',
                }}
              >
                Promise of Love
              </motion.p>
              <motion.p
                id="setfree"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                variants={pVariants}
                initial={{ x: -800, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 1.0, duration: 2 }}
                whileHover="hover"
                style={{
                  color: '#F4847B',
                  marginTop: -5,
                  marginBottom: -5,
                  width: 'fit-content',
                }}
              >
                Set Free
              </motion.p>
              <motion.p
                id="hardtofind"
                variants={pVariants}
                initial={{ x: -800, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 1.4, duration: 2 }}
                whileHover="hover"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                style={{
                  color: '#f37b7e',
                  marginTop: -5,
                  width: 'fit-content',
                }}
              >
                Hard To Find: Singles and Unreleased
              </motion.p>
            </motion.div>
          </div>
        </motion.div>
        <div className="home__right">
          {/* <p style={{ color: '#FEC056', fontSize: 40, textAlign: 'center' }}>RELEASED IN 2005</p> */}
          <motion.div
            variants={rightDivVariants}
            initial="initial"
            animate="animate"
            className="home__pictureContainer"
          >
            <AnimatePresence>
              <motion.img
                src={picture}
                key={picture}
                animate={{ position: 'absolute', opacity: opacityLevel }}
                transition={{ ease: 'easeOut', duration: 2 }}
                exit={{ position: 'absolute', opacity: [1, 0.1] }}
              />
            </AnimatePresence>
          </motion.div>
          {seeAlbum && (
            <motion.p
              variants={seeAlbumVariants}
              initial="initial"
              animate="animate"
              whileHover="hover"
              style={{
                cursor: 'pointer',
                color: '#f37b7e',
                fontSize: 40,
                marginLeft: '18%',
              }}
              onClick={() => handleAlbumClick()}
            >
              {seeAlbum}
            </motion.p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Home;
