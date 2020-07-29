import React, { useState } from "react";

function App() {
  const [state, setState] = useState({
    animationTransitionRunning: false,
    animationTransformRunning: false,
  });
  const toggleTransitionAnimation = () => {
    setState((prevState) => ({
      ...prevState,
      animationTransitionRunning: !state.animationTransitionRunning,
      animationTransformRunning: false,
    }));
  };
  const toggleTransformAnimation = () => {
    setState((prevState) => ({
      ...prevState,
      animationTransformRunning: !state.animationTransformRunning,
      animationTransitionRunning: false,
    }));
  };
  const returnAnimationType = () => {
    if (state.animationTransformRunning) return "animatedBoxTransform";
    else if (state.animationTransitionRunning) return "animatedBoxTransition";
    else return "animatedBox";
  };
  return (
    <div>
      <input
        type="button"
        className={
          state.animationTransitionRunning === true
            ? "toggleButton greenBack"
            : "toggleButton"
        }
        onClick={toggleTransitionAnimation}
        value={
          state.animationTransitionRunning === true
            ? "Transition animation OFF"
            : "Transition animation ON"
        }
      />
      <input
        type="button"
        className={
          state.animationTransformRunning === true
            ? "toggleButton greenBack"
            : "toggleButton"
        }
        onClick={toggleTransformAnimation}
        value={
          state.animationTransformRunning === true
            ? "Transform animation OFF"
            : "Transform animation ON"
        }
      />
      {[...Array(1000)].map((x, i) => (
        <span className={returnAnimationType()} />
      ))}
    </div>
  );
}

export default App;
