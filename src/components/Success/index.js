import React from 'react';

import Lottie from 'react-lottie';

import animationData from '~/assets/433-checked-done.json';

export default function Success() {
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
