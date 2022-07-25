export interface LogoConfig {
  [provider: string]: {
    svg: {
      large: {
        width: string;
        height: string;
        url: string;
        transform: string;
      };
      small: {
        width: string;
        height: string;
        url: string;
        transform: string;
        rect: {
          x: string;
          y: string;
          width: string;
          height: string;
        };
      };
    };
    img: {
      large: {
        width: string;
        height: string;
      };
      small: {
        width: string;
        height: string;
      };
    };
  };
}
