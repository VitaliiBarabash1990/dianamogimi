import clsx from 'clsx';
import FormFieldError from './FormFieldError';
interface FormTextareaProps {
  name: string;
  placeholder?: string;
  error?: string;
}

export const FormTextarea: React.FC<FormTextareaProps> = ({
  name,
  placeholder,
  error,
}) => {
  return (
    <div className="flex flex-col">
      <textarea
        name={name}
        placeholder={placeholder}
        className={clsx(
          'py-3 px-5 rounded-lg bg-cardDark outline-none border border-transparent transition-colors',
          'placeholder-greyNormalActive',
          'focus:border-secondary',
          'not-placeholder-shown:border-primary',
          error && 'border-error',
        )}
        rows={3}
      />
      {error && <FormFieldError error={error} />}
    </div>
  );
};
