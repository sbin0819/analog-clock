const Numbers = () => {
  const numbers = [];
  for (let i = 1; i <= 12; i++) {
    const rotation = i * 30 - 90;
    const xPos = 50 + 42 * Math.cos((Math.PI / 180) * rotation);
    const yPos = 50 + 42 * Math.sin((Math.PI / 180) * rotation);
    numbers.push(
      <div
        key={i}
        className="absolute text-black font-bold text-lg"
        style={{
          left: `${xPos}%`,
          top: `${yPos}%`,
          transform: 'translate(-50%, -50%)',
        }}
      >
        {i}
      </div>,
    );
  }
  return <>{numbers}</>;
};

export default Numbers;
