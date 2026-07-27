import { useState, useRef } from "react";
import { MoveHorizontal } from "lucide-react";

export default function SplitView({ left, right }) {
  const containerRef = useRef(null);

  const [leftWidth, setLeftWidth] = useState(60);

  const dragging = useRef(false);

  const handleMouseDown = () => {
    dragging.current = true;

    document.body.style.userSelect = "none";

    const handleMouseMove = (e) => {
      if (!dragging.current) return;

      const rect = containerRef.current.getBoundingClientRect();

      let percent = ((e.clientX - rect.left) / rect.width) * 100;

      // Clamp between 30% and 75%
      percent = Math.max(30, Math.min(75, percent));

      setLeftWidth(percent);
    };

    const handleMouseUp = () => {
      dragging.current = false;
      document.body.style.userSelect = "";

      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
  };

  return (
    <div
      ref={containerRef}
      className="flex flex-1 overflow-hidden relative"
    >
      {/* Left panel */}
      <div
        className="h-full overflow-hidden"
        style={{ width: `${leftWidth}%` }}
      >
        {left}
      </div>

      {/* Divider */}
      <div
        onMouseDown={handleMouseDown}
        className="relative
                    w-4
                    cursor-col-resize
                    bg-white
                    hover:bg-gray-300
                    transition-colors
                    duration-200"
        >
        <div className="absolute left-0 top-0 h-full w-0.5 bg-gray-500/80" />
            <div
                className="
                absolute
                top-1/2
                left-0
                -translate-x-1/2
                -translate-y-1/2
                w-9 h-9
                bg-white border-2 border-gray-500
                flex items-center justify-center
                shadow-md rounded-none
                "
            >
                <MoveHorizontal size={17} strokeWidth={2} />
            </div>
        </div>

      {/* Right panel */}
      <div
        className="flex-1 h-full overflow-hidden"
      >
        {right}
      </div>
    </div>
  );
}