import { AnimatePresence, motion } from 'framer-motion';
import React from 'react';
import '../styles/menu.css';

function Menu({ showMenu }) {
  const containerVariants = {
    enter: {
      x: '0',
      transition: { duration: 1, ease:'easeIn' },
    },
    initial: {
      x: '-100vw',
    },
    exit: {
      x: '-100vw',
      transition: { duration: 1 },
    },
  };

  const aboutVariants = {
    enter: {
      opacity: 1,
      transition: { delay: 0.6, duration: 1.6 },
    },
    initial: {
      opacity: 0,
    },
    exit: {
      opacity: 0,
    },
  };

  return (
    <AnimatePresence>
      {showMenu && (
        <motion.div
          variants={containerVariants}
          initial="initial"
          animate="enter"
          exit="exit"
          className="menu"
          key="child"
        >
          <motion.div
            className="menu__container"
            variants={aboutVariants}
            initial="initial"
            animate="enter"
            exit="exit"
          >
            <div className="menu__about">
              <h2 style={{ fontWeight: 200 }}>About</h2>
              <h3 style={{ marginTop: 40, fontWeight: 900 }}>
                The American Analog Set (sometimes referred to as AmAnSet) was
                an Austin-based indie rock, lo-fi band from 1995 to 2005. Formed
                in 1995, the group's early sound was highly-influenced by
                krautrock and post-rock and British shoegazer bands like Cocteau
                Twins, often featuring long instrumental passages. Over time,
                their songs became shorter and more pop-influenced. The band has
                released six full-length albums, four EPs, and several vinyl
                singles.
              </h3>
              <p style={{ marginTop: 40 }}>
                <a href="http://www.amanset.com/">Official website</a>
              </p>
            </div>
            <div className="menu__right">
              <h2 style={{ fontWeight: 200 }}>Band Members</h2>
              <div className="menu__grid">
                <p>Andrew Kenny</p>
                <p>Lee Gillespie</p>
                <p>Mark Smith</p>
                <p>Craig McCaffrey</p>
                <p>Sean Ripple</p>
                <p>Lisa Roschmann</p>
                <p>Tom Hoff</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default Menu;
