import { toRadian } from '@src/utils/math';
import React, { useEffect, useRef } from 'react';

type Props = {
  size: number;
  bgColor?: string;
  title?: string;
  titleColor?: string;
  data: {
    key: string;
    color: string;
    value: number;
  }[];
};

const PieChart: React.FC<Props> = ({
  data,
  size,
  bgColor = '#ffffff',
  title = '',
  titleColor = '#000000',
}) => {
  const center = {
    x: size / 2,
    y: size / 2,
  };

  const radius = size / 2;

  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (canvasRef.current === null) return;

    const ctx = canvasRef.current.getContext('2d');

    if (ctx === null) return;

    const total = data.reduce((prev, curr) => curr.value + prev, 0);

    let startAngle = 0;

    // chart
    data.forEach(({ color, value }) => {
      ctx.beginPath();

      ctx.moveTo(center.x, center.y);
      const rate = value / total;

      ctx.arc(
        center.x,
        center.y,
        radius,
        toRadian(startAngle),
        toRadian(startAngle + 360 * rate),
      );
      startAngle += 360 * rate;
      ctx.fillStyle = color;
      ctx.fill();
      ctx.closePath();
    });

    // center hole
    ctx.beginPath();
    ctx.moveTo(center.x, center.y);
    ctx.arc(center.x, center.y, radius / 1.5, toRadian(0), toRadian(360));
    ctx.fillStyle = bgColor;
    ctx.fill();
    ctx.closePath();

    // center title
    ctx.beginPath();
    ctx.font = '14px bold';
    const { width } = ctx.measureText(title);
    ctx.stroke();
    ctx.fillStyle = titleColor;
    ctx.fillText(title, center.x - width / 2, center.y + 4);
    ctx.closePath();
  });

  return <canvas width={size} height={size} ref={canvasRef}></canvas>;
};

export default PieChart;
