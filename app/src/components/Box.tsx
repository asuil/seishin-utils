import React, {useEffect, useState} from 'react';

type Props = {
  children?: React.ReactNode,
  w?: string, h?: string,
  m?: number, mx?: number, my?: number, ml?: number, mr?: number, mt?: number, mb?: number, 
  p?: number, px?: number, py?: number, pl?: number, pr?: number, pt?: number, pb?: number, 
  b?: number, bx?: number, by?: number, bl?: number, br?: number, bt?: number, bb?: number, 
  flex?: boolean, row?: boolean, col?: boolean, flexGrow?: number,
  alignItems?: string, justifyContent?: string,
  bgcolor?: string, color?: string, bcolor?: string,
  fontFamily?: string, fontSize?: number, fontWeight?: any, letterSpacing?: number, textDecoration?: string,
};

const Box: React.FC<Props> = ({
  children,
  w, h,
  m, mx, my, ml, mr, mt, mb,
  p, px, py, pl, pr, pt, pb,
  b, bx, by, bl, br, bt, bb,
  flex, row, col, flexGrow,
  alignItems, justifyContent,
  bgcolor, color, bcolor,
  fontFamily, fontSize, fontWeight, letterSpacing, textDecoration,
}) => {
  const [border, setBorder] = useState('');
  const [borderLeft, setBorderLeft] = useState('');
  const [borderRight, setBorderRight] = useState('');
  const [borderTop, setBorderTop] = useState('');
  const [borderBottom, setBorderBottom] = useState('');

  useEffect(() => setBorder(b ? `solid ${b}px` : ''), [b]);
  useEffect(() => setBorderLeft((bl || bx) ? `solid ${bl || bx}px` : ''), [bl, bx]);
  useEffect(() => setBorderRight((br || bx) ? `solid ${br || bx}px` : ''), [br, bx]);
  useEffect(() => setBorderTop((bt || by) ? `solid ${bt || by}px` : ''), [bt, by]);
  useEffect(() => setBorderBottom((bb || by) ? `solid ${bb || by}px` : ''), [bb, by]);
  
  useEffect(() => {
    if (row && col) throw new Error('Choose either row or col for this flexbox');
  }, [col, row]);


  return (
    <div style={{
      width: w, height: h,
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
      border, borderLeft, borderRight, borderTop, borderBottom,
      borderColor: bcolor,
      display: (flex ? 'flex' : ''), flexGrow,
      flexDirection: (col && 'column') || (row && 'row') || undefined,
      alignItems, justifyContent,
      backgroundColor: bgcolor,
      color, fontFamily, fontSize, fontWeight, letterSpacing, textDecoration,
    }}>
      {children}
    </div>
  );
}

export default Box;
