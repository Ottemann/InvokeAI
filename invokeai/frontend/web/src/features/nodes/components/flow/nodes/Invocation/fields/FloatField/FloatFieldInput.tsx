import { CompositeNumberInput } from '@invoke-ai/ui-library';
import { useFloatField } from 'features/nodes/components/flow/nodes/Invocation/fields/FloatField/useFloatField';
import type { FieldComponentProps } from 'features/nodes/components/flow/nodes/Invocation/fields/inputs/types';
import { NO_DRAG_CLASS } from 'features/nodes/types/constants';
import type { FloatFieldInputInstance, FloatFieldInputTemplate } from 'features/nodes/types/field';
import { memo } from 'react';

export const FloatFieldInput = memo((props: FieldComponentProps<FloatFieldInputInstance, FloatFieldInputTemplate>) => {
  const { defaultValue, onChange, value, min, max, step, fineStep } = useFloatField(props);

  return (
    <CompositeNumberInput
      defaultValue={defaultValue}
      onChange={onChange}
      value={value}
      min={min}
      max={max}
      step={step}
      fineStep={fineStep}
      className={NO_DRAG_CLASS}
      flex="1 1 0"
    />
  );
});

FloatFieldInput.displayName = 'FloatFieldInput ';
