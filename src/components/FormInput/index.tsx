import { ReactNode, FormEvent } from 'react';

import styles from './styles.module.scss';

interface Props {
  className?: string;
  disabled?: boolean;
  error?: string;
  inputClassName?: string;
  isTextarea?: boolean;
  inputType: string;
  label?: ReactNode;
  labelClassName?: string;
  name: string;
  onBlur?: (e: FormEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  onChange?: (e: FormEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  onFocus?: (e: FormEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  placeholder?: string;
  readOnly?: boolean;
  touched?: boolean;
  submitCount?: number;
  inputRef?: any;
  required: boolean;
  min?: number;
  max?: number;
  minLength?: number;
  maxLength?: number;
  value?: number | string;
}

function FormInput({
  className = '',
  disabled = false,
  error = '',
  inputClassName = '',
  isTextarea = false,
  inputType,
  label = '',
  labelClassName = '',
  name,
  onBlur,
  onChange,
  onFocus,
  placeholder = '',
  readOnly = false,
  touched,
  submitCount,
  inputRef,
  required,
  min,
  max,
  minLength,
  maxLength,
  value
}: Props) {
  const InputComponent = isTextarea ? 'textarea' : 'input';
  const showError =
    (touched === undefined || touched) && error && (submitCount === undefined || submitCount > 0);

  return (
    <div className={`column start ${className}`}>
      {label && (
        <label htmlFor={name} className={`${labelClassName} m-bottom-1`}>
          {label}
        </label>
      )}
      <InputComponent
        className={`${inputClassName} ${styles.input} ${showError ? styles.error : ''}`}
        name={name}
        id={name}
        type={inputType}
        placeholder={placeholder}
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
        disabled={disabled}
        readOnly={readOnly}
        required={required}
        ref={inputRef}
        min={min}
        max={max}
        minLength={minLength}
        maxLength={maxLength}
        value={value}
      />
    </div>
  );
}

export default FormInput;
