'use client';

import { TBaseQtyInputProps } from '@/types/base-component.type';
import React, {
  ChangeEvent,
  FocusEvent,
  useCallback,
  useEffect,
  useState,
} from 'react';

function BaseQtyInput(props: Partial<TBaseQtyInputProps>) {
  const { value = 1, onChange, max = 99, min = 0 } = props;

  // Local value
  const [localValue, setLocalValue] = useState<number>(0);

  /**
   * Handle change value
   * @param value
   */
  const handleOnChange = useCallback(
    (v: number) => {
      if (onChange) {
        onChange(v);
      }
    },
    [onChange],
  );

  /**
   * Handle increment value
   */
  const handleIncrement = useCallback(() => {
    let nextValue = localValue + 1;
    if (nextValue > max) {
      nextValue = max;
    }
    setLocalValue(nextValue);
    handleOnChange(nextValue);
  }, [handleOnChange, localValue, max]);

  /**
   * Handle decrement value
   */
  const handleDecrement = useCallback(() => {
    let nextValue = localValue - 1;
    if (nextValue < min) {
      nextValue = min;
    }
    setLocalValue(nextValue);
    handleOnChange(nextValue);
  }, [handleOnChange, localValue, min]);

  /**
   * Assign real value to local value
   */
  useEffect(() => {
    setLocalValue(value);
  }, [value]);

  /**
   * Handle value change from keyboard input
   */
  const handleChangeInput = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      let val = +e.target.value;
      if (val < min) {
        val = min;
      } else if (val > max) {
        val = max;
      }

      setLocalValue(val);
      handleOnChange(val);
    },
    [handleOnChange, max, min],
  );

  return (
    <div className="qty-item">
      <div className="d-flex align-items-center">
        <button
          className=" btn btn-add-number btn-nohover"
          onClick={handleDecrement}
          disabled={localValue <= min}
        >
          <span className="icon-ico-rec-minus"></span>
        </button>
        <input
          className="form-control input-number"
          min={min}
          max={max}
          name="quantity"
          value={localValue}
          onChange={handleChangeInput}
          type="number"
          onFocus={(e: FocusEvent<HTMLInputElement>) => {
            e.target.select();
          }}
        />
        <button
          className="btn btn-add-number btn-nohover"
          onClick={handleIncrement}
          disabled={localValue >= max}
        >
          <span className="icon-ico-rec-plus"></span>
        </button>
      </div>
    </div>
  );
}

export default BaseQtyInput;
