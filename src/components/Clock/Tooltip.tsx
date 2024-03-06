interface Props {
  visible: boolean;
  position: { x: number; y: number };
  content: string;
}

const Tooltip = ({ visible, position, content }: Props) => {
  if (!visible) {
    return null;
  }
  return (
    <div
      className="absolute flex justify-center items-center bg-white text-black p-2 w-32 border border-teal-300 rounded shadow-lg"
      style={{
        left: position.x,
        top: position.y,
      }}
    >
      {content}
    </div>
  );
};

export default Tooltip;
