import React from 'react';
import Lottie from 'react-lottie';

import animationData from '~/assets/14571-search-loading-animation.json';

export default function Loading() {
  return (
    <Lottie
      options={{
        loop: true,
        autoplay: true,
        animationData,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice',
        },
      }}
      height={350}
      width={250}
    />
  );
}
