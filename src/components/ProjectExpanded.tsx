import { Heading, Link, Text } from '@chakra-ui/react';
import disableScroll from 'disable-scroll';
import { motion } from 'framer-motion';
import React, { useState } from 'react';
import { Item } from '../types/item';
import { CloseButton } from './CloseButton';
import { ImageGallery } from './ImageGallery';
import { ProjectTechTimeline } from './ProjectTechTimeline';

interface ProjectExpandedProps {
  item: Item;
  handleSelectedItem: (item: Item | null) => void;
}

export const ProjectExpanded: React.FC<ProjectExpandedProps> = ({
  item,
  handleSelectedItem,
}) => {
  const [close, setClose] = useState(false);
  const { title, description, link, techStack } = item;

  const handleCloseProject = () => {
    setClose(true);
    disableScroll.off();
  };

  const handleAnimationComplete = () => close && handleSelectedItem(null);
  const isMobile = window && window.innerWidth < 800;

  const containerAnimateMobile = close ? { y: '100%' } : { y: 0 };
  const containerAnimateDektop = close ? { x: '100vw' } : { x: '60vw' };
  return (
    <motion.div
      className="portfolio-container"
      transition={{ duration: 0.3 }}
      initial={isMobile ? { y: '100%' } : { x: '100vw' }}
      animate={isMobile ? containerAnimateMobile : containerAnimateDektop}
      onAnimationComplete={handleAnimationComplete}
    >
      <motion.div className="portfolio-content">
        <motion.div
          className="portfolio-title"
          transition={{
            type: 'spring',
            delay: 0.2,
            duration: 1,
          }}
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
        >
          <Heading as="h4" fontSize="36px">
            {title}
          </Heading>
          {item.type && <Text mt="-10px">{`${item.type}`}</Text>}
        </motion.div>
        <CloseButton onClose={handleCloseProject} />

        <motion.div
          className="motion-divider"
          transition={{
            type: 'spring',
            delay: 0.3,
            duration: 1,
          }}
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
        />

        <motion.div className="portfolio-description">
          <motion.p
            className="portfolio-text-description"
            transition={{
              type: 'spring',
              delay: 0.4,
              duration: 1,
            }}
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
          >
            {description}
          </motion.p>
        </motion.div>

        <ImageGallery
          images={[
            'https://d33wubrfki0l68.cloudfront.net/dd23708ebc4053551bb33e18b7174e73b6e1710b/dea24/static/images/wallpapers/shared-colors@2x.png',
            'https://d33wubrfki0l68.cloudfront.net/49de349d12db851952c5556f3c637ca772745316/cfc56/static/images/wallpapers/bridge-02@2x.png',
            'https://d33wubrfki0l68.cloudfront.net/594de66469079c21fc54c14db0591305a1198dd6/3f4b1/static/images/wallpapers/bridge-01@2x.png',
          ]}
        />

        <motion.div
          className="project-bottom-container"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <ProjectTechTimeline techStack={techStack} />
          <Link href={link} isExternal cursor="pointer">
            <motion.div
              className="github-link"
              transition={{
                type: 'spring',
                delay: 0.5,
                duration: 1,
              }}
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
            >
              <Text color="text.main">Github</Text>
            </motion.div>
          </Link>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};
