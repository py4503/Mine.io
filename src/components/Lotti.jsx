import React, { useEffect, useState } from 'react';
import Lottie from 'lottie-react';
import Animation from '../assets/Animation - 1749387227812.json'

function RemoteLottie() {

  return (
    <div className="w-64 h-64">
      {Animation && <Lottie animationData={Animation} loop={true} />}
    </div>
  );
}

export default RemoteLottie;
