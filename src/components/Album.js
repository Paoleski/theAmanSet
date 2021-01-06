import React, { useState } from 'react';
import '../styles/album.css';
import MenuRoundedIcon from '@material-ui/icons/MenuRounded';
import Menu from '../components/Menu.js';
import { AnimatePresence, motion } from 'framer-motion';
import { getAlbum } from '../utils/tracklists.js';

function Album({ showAlbum, album, albumPic }) {
  const [menuColor, setMenuColor] = useState('#FFC94C');
  const [showMenu, setShowMenu] = useState(false);
  const albumInfo = getAlbum(album);
  console.log(albumInfo);

  const handleMenuClick = () => {
    if (showMenu) {
      setShowMenu(false);
      setTimeout(() => {
        setMenuColor('#FFC94C');
      }, 500);
      return;
    }
    setShowMenu(true);
    setMenuColor('#4b6464');
  };

  //   const containerVariants = {
  //     enter: {
  //       x: '0',
  //       scale:1.2,
  //       transition: { duration: 1 },
  //     },
  //     initial: {
  //       x: '0',
  //     },
  //     exit: {
  //       opacity:0.5,
  //       transition: { duration:1 }
  //     },
  //   };

  const trackListVariants = {
    enter: {
      opacity: 1,
      transition: { delay: 2.5, duration: 1 },
    },
    exit: {
      opacity: 0,
      transition: { delay: 0.5 },
    },
    initial: {
      opacity: 0,
    },
  };

  const imgVariants = {
    enter: {
      x: -840,
      y: -52,
      scale: 1.35,
      transition: { delay: 0.5, duration: 2 },
    },
    exit: {
      x: 0,
      y: 0,
      scale: 1,
      transition: { delay: 0.5, duration: 2 },
    },
  };

  const listVariants = {
    enter: {
      x: -1100,
      transition: {
        delay: 0.5,
        duration: 2,
      },
    },
    exit: {
      x: 0,
      transition: { delay: 0.5, duration: 2 },
    },
  };

  return (
    <AnimatePresence>
      {showAlbum && (
        <motion.div className="album">
          <Menu showMenu={showMenu} />
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
          <div className="home__left">
            <div initial="initial" animate="animate" className="home__header">
              <MenuRoundedIcon
                style={{ fontSize: 50, color: menuColor, visibility:'hidden' }}
                onClick={() => handleMenuClick()}
              />
            </div>

            <div className="home__left__copyandAlbums">
              <div className="home__left__copyright" style={{ visibility:'hidden' }}>
                <p>
                  No Copyright intended - Unofficial website - Paoleski's
                  Productions 2020
                </p>
              </div>
              <motion.div
                variants={listVariants}
                animate="enter"
                exit="exit"
                className="home__left__albumsList"
              >
                <p
                  style={{
                    color: '#FEC056',
                    marginBottom: -5,
                    width: 'fit-content',
                  }}
                >
                  The Fun Of Watching Fireworks
                </p>
                <p
                  style={{
                    color: '#FAAF66',
                    marginBottom: -5,
                    marginTop: -5,
                    width: 'fit-content',
                  }}
                >
                  From our living room to yours
                </p>
                <p
                  style={{
                    color: '#F9A66C',
                    marginBottom: -5,
                    marginTop: -5,
                    width: 'fit-content',
                  }}
                >
                  the golden band
                </p>
                <p
                  style={{
                    color: '#F79574',
                    marginBottom: -5,
                    marginTop: -5,
                    width: 'fit-content',
                  }}
                >
                  known by heart
                </p>
                <p
                  style={{
                    color: '#F89E70',
                    marginBottom: -5,
                    marginTop: -5,
                    width: 'fit-content',
                  }}
                >
                  promise of love
                </p>
                <p
                  style={{
                    color: '#F4847B',
                    marginBottom: -5,
                    marginTop: -5,
                    width: 'fit-content',
                  }}
                >
                  set free
                </p>
                <p
                  style={{
                    color: '#f37b7e',
                    marginBottom: -5,
                    marginTop: -5,
                    width: 'fit-content',
                  }}
                >
                  Hard To Find: Singles and Unreleased
                </p>
              </motion.div>
            </div>
          </div>
          <div className="home__right">
            <motion.div
              variants={imgVariants}
              initial="initial"
              animate="enter"
              exit="exit"
              className="album__pictureContainer"
            >
              <img alt="" src={albumPic} />
            </motion.div>
          </div>
          <motion.div
            variants={trackListVariants}
            initial="initial"
            animate="enter"
            exit="exit"
            className="album__tracklist"
          >
            {albumInfo && (
              <h3
                style={{
                  color: '#FFC94C',
                  textTransform: 'uppercase',
                  marginBottom: 10,
                }}
              >
                {albumInfo.name}
              </h3>
            )}
            {albumInfo &&
              albumInfo.tracks.map((track, i) => (
                <p style={{ color: '#FFC94C' }}>
                  {i + 1}. {track}
                </p>
              ))}
            {albumInfo && (
              <p
                style={{
                  color: '#FFC94C',
                  marginTop: 15,
                  marginBottom:30
                }}
              >
                {albumInfo?.released}
              </p>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default Album;
