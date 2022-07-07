export interface LogoConfig {
  [provider: string]: {
    svg: {
      width: string;
      height: string;
      url: string;
      transform: string;
    };
    img: {
      width: string;
      height: string;
    };
  };
}
