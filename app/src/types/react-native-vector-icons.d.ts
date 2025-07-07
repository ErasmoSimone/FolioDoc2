// src/types/react-native-vector-icons.d.ts
declare module 'react-native-vector-icons/*';

// Adicione este export default para evitar o aviso

// src/types/react-native-vector-icons.d.ts
declare module 'react-native-vector-icons/*' {
  import { ComponentType } from 'react';
  import { TextProps } from 'react-native';

  interface IconProps extends TextProps {
    name: string;
    size?: number;
    color?: string;
  }

  const Icon: ComponentType<IconProps>;
  export default Icon;
}
