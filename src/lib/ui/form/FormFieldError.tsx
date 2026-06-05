interface FormFieldErrorProps {
  error?: string;
}

const FormFieldError: React.FC<FormFieldErrorProps> = ({ error }) => {
  if (!error) return null;

  return (
    <span className="text-error text-xs mt-1 text-right w-full">{error}</span>
  );
};

export default FormFieldError;
