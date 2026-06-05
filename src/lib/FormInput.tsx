'use client';

import clsx from 'clsx';
import FormFieldError from './FormFieldError';

interface FormInputProps {
  name: string;
  type?: string;
  placeholder?: string;
  error?: string;
}

export const FormInput: React.FC<FormInputProps> = ({
  name,
  type = 'text',
  placeholder,
  error,
}) => {
  return (
    <div className="flex flex-col">
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        className={clsx(
          'py-3 px-5 rounded-lg bg-cardDark outline-none border border-transparent transition-colors',
          'placeholder-greyNormalActive',
          'focus:border-secondary',
          'not-placeholder-shown:border-primary',
          error && 'border-error',
        )}
      />

      <FormFieldError error={error} />
    </div>
  );
};
