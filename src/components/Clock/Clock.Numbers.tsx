const TOTAL_NUMBERS = 12;
const ROTATE_DEGREE_PER_NUMBER = 30;
const INITIAL_ROTATION_OFFSET = -90;
const RADIUS_PERCENTAGE = 42;
const POSITION_OFFSET = 50;

const Numbers = () => {
  const numbers = [];
  for (let i = 1; i <= TOTAL_NUMBERS; i++) {
    const rotation = i * ROTATE_DEGREE_PER_NUMBER + INITIAL_ROTATION_OFFSET;
    const xPos =
      POSITION_OFFSET +
      RADIUS_PERCENTAGE * Math.cos((Math.PI / 180) * rotation);
    const yPos =
      POSITION_OFFSET +
      RADIUS_PERCENTAGE * Math.sin((Math.PI / 180) * rotation);

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
