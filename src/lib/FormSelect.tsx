import React, { useState, useRef, useEffect } from 'react';
import FormFieldError from './FormFieldError';
import Image from 'next/image';

interface Option {
  value: string;
  label: string;
}

interface FormSelectProps {
  name: string;
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
  onBlur: () => void;
  options: Option[];
  error?: string;
  touched?: boolean;
}

export const FormSelect: React.FC<FormSelectProps> = ({
  name,
  placeholder = 'Оберіть варіант',
  value,
  onChange,
  onBlur,
  options,
  error,
  touched,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const selectRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        selectRef.current &&
        !selectRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
        onBlur();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [onBlur]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
        onBlur();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
      return () => {
        document.removeEventListener('keydown', handleKeyDown);
      };
    }
  }, [isOpen, onBlur]);

  const handleSelect = (optionValue: string) => {
    onChange(optionValue);
    setIsOpen(false);
    onBlur();
  };

  const selectedOption = options.find(option => option.value === value);

  return (
    <div className="flex flex-col">
      <div ref={selectRef} className="relative">
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="w-full py-3 px-5 bg-cardDark rounded-lg text-left flex justify-between items-center cursor-pointer"
        >
          <span className={selectedOption ? '' : 'text-greyNormalActive'}>
            {selectedOption ? selectedOption.label : placeholder}
          </span>
          <Image
            width={8}
            height={8}
            src="/arrow-dropdown.svg"
            alt="dropdown arrow"
            className={`w-5 h-5 transition-transform duration-200 rotate-180 ${isOpen ? 'rotate-360' : ''}`}
          />
        </button>

        {isOpen && (
          <div className="absolute z-10 w-full mt-1 bg-cardDark rounded-lg shadow-lg max-h-60 overflow-auto border-b border-red">
            {options.map((option, index) => (
              <button
                key={option.value}
                type="button"
                onClick={() => handleSelect(option.value)}
                className={`w-full px-5 py-3 text-left bg-cardDark text-black cursor-pointer 
      hover:bg-greyNormalActive transition-colors ${
        index !== options.length - 1 ? 'border-b border-orange-950/50' : ''
      }`}
              >
                {option.label}
              </button>
            ))}
          </div>
        )}
      </div>
      <FormFieldError error={error} />
    </div>
  );
};

export default FormSelect;
