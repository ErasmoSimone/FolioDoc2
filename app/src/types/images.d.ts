export interface ImageFile {
  uri: string;
  name?: string;
  type?: string;
  size?: number;
  width?: number;
  height?: number;
  path?: string;
}



// src/types/images.d.ts
declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.gif';
declare module '*.svg' {
  import React from 'react';
  import { SvgProps } from 'react-native-svg';
  const content: React.FC<SvgProps>;
  export default content;
}
