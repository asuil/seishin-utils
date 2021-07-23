import React, {useEffect} from 'react';

type Props = {
  children?: React.ReactNode,
  m?: number, mx?: number, my?: number, ml?: number, mr?: number, mt?: number, mb?: number, 
  p?: number, px?: number, py?: number, pl?: number, pr?: number, pt?: number, pb?: number, 
  flex?: boolean, row?: boolean, col?: boolean,
  alignItems?: string, justifyContent?: string,
  bgcolor?: string, color?: string,
  fontFamily?: string, fontSize?: number, fontWeight?: any, letterSpacing?: number,
};

const Box: React.FC<Props> = ({
  children,
  m, mx, my, ml, mr, mt, mb,
  p, px, py, pl, pr, pt, pb,
  flex, row, col,
  alignItems, justifyContent,
  bgcolor,
  color, fontFamily, fontSize, fontWeight, letterSpacing,
}) => {
  useEffect(() => {
    if (row && col) throw new Error('Choose either row or col for this flexbox');
  }, [col, row]);
  return (
    <div style={{
      margin: m,
      marginLeft: ml || mx,
      marginRight: mr || mx,
      marginTop: mt || my,
      marginBottom: mb || my,
      padding: p,
      paddingLeft: pl || px,
      paddingRight: pr || px,
      paddingTop: pt || py,
      paddingBottom: pb || py,
      display: (flex ? 'flex' : ''),
      alignItems, justifyContent,
      backgroundColor: bgcolor,
      color, fontFamily, fontSize, fontWeight, letterSpacing,
    }}>
      {children}
    </div>
  );
}

export default Box;
