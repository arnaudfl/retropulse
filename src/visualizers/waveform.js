export function drawWaveform(ctx, width, height, timeDomainData, intensity, hueShift) {
  ctx.fillStyle = "rgba(2, 4, 10, 0.24)";
  ctx.fillRect(0, 0, width, height);

  ctx.lineWidth = 3;
  ctx.strokeStyle = `hsla(${(200 + hueShift) % 360}, 96%, 62%, 0.95)`;
  ctx.shadowBlur = 18;
  ctx.shadowColor = ctx.strokeStyle;

  ctx.beginPath();
  const sliceWidth = width / timeDomainData.length;
  for (let i = 0; i < timeDomainData.length; i += 1) {
    const normalized = (timeDomainData[i] - 128) / 128;
    const y = height / 2 + normalized * (height * 0.34) * intensity;
    const x = i * sliceWidth;

    if (i === 0) {
      ctx.moveTo(x, y);
    } else {
      ctx.lineTo(x, y);
    }
  }
  ctx.stroke();

  ctx.lineWidth = 1;
  ctx.strokeStyle = "rgba(95, 120, 255, 0.35)";
  ctx.shadowBlur = 0;
  ctx.beginPath();
  ctx.moveTo(0, height / 2);
  ctx.lineTo(width, height / 2);
  ctx.stroke();
}
