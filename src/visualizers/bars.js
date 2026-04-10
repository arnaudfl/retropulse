export function drawBars(ctx, width, height, frequencyData, intensity, hueShift) {
  const barCount = 72;
  const gap = 2;
  const barWidth = width / barCount - gap;

  ctx.fillStyle = "rgba(2, 4, 10, 0.2)";
  ctx.fillRect(0, 0, width, height);

  for (let i = 0; i < barCount; i += 1) {
    const dataIndex = Math.floor((i / barCount) * frequencyData.length);
    const value = frequencyData[dataIndex] / 255;
    const barHeight = Math.max(3, value * height * 0.88 * intensity);
    const x = i * (barWidth + gap);
    const y = height - barHeight;
    const hue = (hueShift + i * 2.5) % 360;

    ctx.fillStyle = `hsla(${hue}, 95%, 62%, 0.92)`;
    ctx.shadowBlur = 10;
    ctx.shadowColor = `hsla(${hue}, 95%, 62%, 0.8)`;
    ctx.fillRect(x, y, barWidth, barHeight);
  }

  ctx.shadowBlur = 0;
}
