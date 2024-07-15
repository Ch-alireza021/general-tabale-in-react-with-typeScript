// CTHeaderItemIF ---> CTable-header-item-interface
export interface CTHeaderItemIF {
  title: string;
  value: (item: { [key: string]: string }) => React.ReactNode;
}

// CTHItemIF ---> CTable-item-interface
export interface CTHItemIF { [key: string]: string }

// CTStyle ---> CTable-style-interface
export interface CTStyleIF {
    HBG: string | undefined;
    HTC: string | undefined;
    BBG: string[] | undefined;
  };

// CTCaption ---> CTable-Caption-interface
export interface CTCaptionIF { };