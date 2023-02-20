import React, { useContext, useMemo } from 'react';
import { GlobalContext } from '../context/GlobalState';

export const CaloricIntake = () => {
  const { intakes } = useContext(GlobalContext);
  const amounts = useMemo(() => intakes.map(intake => intake.amount), [intakes]);
  const total = useMemo(() => amounts.filter(item => item > 0).reduce((acc, item) => (acc += item), 0), [amounts]);
  const textColor = useMemo(() => {
    const ratio = total / 4000;
    const red = Math.floor(255 * ratio);
    const green = Math.floor(255 * (1 - ratio));
    return `rgb(${red}, ${green}, 0)`;
  }, [total]);

  return (
    <>
      <div className="inc-exp-container">
        <div>
          <h4>Calories Gained</h4>
          <p className="calories plus" style={{ color: textColor }}>
            {total}
          </p>
        </div>
      </div>
    </>
  );
};
