import React from 'react';

import Lottie from 'react-lottie';

import animationData from '~/assets/16605-error.json';

export default function Error() {
  return (
    <Lottie
      options={{
        loop: false,
        autoplay: true,
        animationData,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice',
        },
      }}
      height={300}
      width={400}
    />
  );
}
