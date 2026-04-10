export function drawRadial(ctx, width, height, frequencyData, intensity, hueShift, timeMs) {
  const cx = width / 2;
  const cy = height / 2;
  const baseRadius = Math.min(width, height) * 0.18;

  ctx.fillStyle = "rgba(2, 4, 10, 0.2)";
  ctx.fillRect(0, 0, width, height);

  ctx.save();
  ctx.translate(cx, cy);

  const spokes = 140;
  for (let i = 0; i < spokes; i += 1) {
    const dataIndex = Math.floor((i / spokes) * frequencyData.length);
    const value = frequencyData[dataIndex] / 255;
    const length = baseRadius + value * (Math.min(width, height) * 0.28) * intensity;
    const angle = (i / spokes) * Math.PI * 2 + timeMs * 0.00012;
    const x1 = Math.cos(angle) * baseRadius;
    const y1 = Math.sin(angle) * baseRadius;
    const x2 = Math.cos(angle) * length;
    const y2 = Math.sin(angle) * length;
    const hue = (hueShift + i * 1.8) % 360;

    ctx.strokeStyle = `hsla(${hue}, 95%, 65%, 0.9)`;
    ctx.lineWidth = 2;
    ctx.shadowBlur = 10;
    ctx.shadowColor = `hsla(${hue}, 95%, 65%, 0.72)`;

    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.stroke();
  }

  ctx.shadowBlur = 22;
  ctx.fillStyle = "rgba(53, 255, 203, 0.82)";
  ctx.beginPath();
  ctx.arc(0, 0, Math.max(5, baseRadius * 0.08), 0, Math.PI * 2);
  ctx.fill();

  ctx.restore();
}
