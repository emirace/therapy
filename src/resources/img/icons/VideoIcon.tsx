import React from 'react';
import Svg, { Path, G } from 'react-native-svg';
const VideoIcon = () => (
  <Svg viewBox="0 0 200 200" preserveAspectRatio="xMidYMid slice">
    <Path fill="none" d="M0 0h200v200H0z" />
    <G fill="#717402">
      <Path d="M192.2 50.315c4.3 0 7.8 3.5 7.8 7.8v83.8c0 4.3-3.5 7.8-7.8 7.8-1.6 0-3.2-.5-4.6-1.5l-58.7-41.9c-3.5-2.5-4.3-7.4-1.8-10.9.5-.7 1.1-1.3 1.8-1.8l58.7-41.9c1.3-.9 2.9-1.4 4.6-1.4zm-7.9 76.4v-53.4l-37.3 26.7 37.3 26.7z" />
      <Path d="M24.6 33.515h92.2c13.6 0 24.6 11 24.6 24.6v83.8c0 13.6-11 24.6-24.6 24.6H24.6c-13.6 0-24.6-11-24.6-24.6v-83.8c0-13.6 11-24.6 24.6-24.6zm92.2 117.3c4.9 0 8.9-4 8.9-8.9v-83.8c0-4.9-4-8.9-8.9-8.9H24.6c-4.9 0-8.9 4-8.9 8.9v83.8c0 4.9 4 8.9 8.9 8.9h92.2z" />
    </G>
  </Svg>
);
export default VideoIcon;
