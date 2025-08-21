import { useDomEvent } from "framer-motion";
import { debounce } from "lodash";
import { mix } from "framer-motion";
import { animate } from "framer-motion";


// Absolute distance a wheel scroll event can travel outside of
// the defined constraints before we fire a "snap back" animation
const deltaThreshold = 5;

// If wheel event fires beyond constraints, multiply the delta by this amount
const elasticFactor = 0.2;

function springTo(value, from, to) {
  if (value.isAnimating && value.isAnimating()) return;

  const controls = animate(from, to, {
    type: "spring",
    stiffness: 400,
    damping: 40,
    velocity: value.getVelocity ? value.getVelocity() : 0,
    onUpdate: (v) => value.set(v),
  });

  return controls;
}


const debouncedSpringTo = debounce(springTo, 100);

export function useWheelScroll(ref, y, constraints, onWheelCallback, isActive) {
  const onWheel = (event) => {
    event.preventDefault();

    const currentY = y.get();
    let newY = currentY - event.deltaY;
    let startedAnimation = false;
    const isWithinBounds =
      constraints && newY >= constraints.top && newY <= constraints.bottom;

    if (constraints && !isWithinBounds) {
      newY = mix(currentY, newY, elasticFactor);

      if (newY < constraints.top) {
        if (event.deltaY <= deltaThreshold) {
          springTo(y, newY, constraints.top);
          startedAnimation = true;
        } else {
          debouncedSpringTo(y, newY, constraints.top);
        }
      }

      if (newY > constraints.bottom) {
        if (event.deltaY >= -deltaThreshold) {
          springTo(y, newY, constraints.bottom);
          startedAnimation = true;
        } else {
          debouncedSpringTo(y, newY, constraints.bottom);
        }
      }
    }

    if (!startedAnimation) {
      y.stop && y.stop();
      y.set(newY);
    } else {
      debouncedSpringTo.cancel();
    }

    if (onWheelCallback) onWheelCallback(event);
  };

  useDomEvent(ref, "wheel", isActive && onWheel, { passive: false });
}
