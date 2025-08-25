'use client';

import * as React from 'react';
import { ChevronDown, Check } from 'lucide-react';
import { cn } from '../../lib/utils';

export interface DropdownOption {
  value: string;
  label: string;
}

export interface CustomDropdownProps {
  id?: string;
  label?: string;
  placeholder?: string;
  options: DropdownOption[];
  value: string;
  onChange: (value: string) => void;
  disabled?: boolean;
  className?: string;
  error?: string;
}

const CustomDropdown = React.forwardRef<HTMLButtonElement, CustomDropdownProps>(
  ({
    id,
    label,
    placeholder = "Select an option...",
    options,
    value,
    onChange,
    disabled = false,
    className,
    error,
  }, ref) => {
    const [isOpen, setIsOpen] = React.useState(false);
    const [focusedIndex, setFocusedIndex] = React.useState(-1);
    const dropdownRef = React.useRef<HTMLDivElement>(null);
    const optionsRef = React.useRef<(HTMLButtonElement | null)[]>([]);

    // Find the selected option
    const selectedOption = options.find(option => option.value === value);

    // Close dropdown when clicking outside
    React.useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
          setIsOpen(false);
          setFocusedIndex(-1);
        }
      };

      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    // Handle keyboard navigation
    const handleKeyDown = (event: React.KeyboardEvent) => {
      if (disabled) return;

      switch (event.key) {
        case 'Enter':
        case ' ':
          event.preventDefault();
          if (!isOpen) {
            setIsOpen(true);
            setFocusedIndex(0);
          } else if (focusedIndex >= 0) {
            onChange(options[focusedIndex].value);
            setIsOpen(false);
            setFocusedIndex(-1);
          }
          break;
        case 'Escape':
          setIsOpen(false);
          setFocusedIndex(-1);
          break;
        case 'ArrowDown':
          event.preventDefault();
          if (!isOpen) {
            setIsOpen(true);
            setFocusedIndex(0);
          } else {
            setFocusedIndex(prev => (prev + 1) % options.length);
          }
          break;
        case 'ArrowUp':
          event.preventDefault();
          if (isOpen) {
            setFocusedIndex(prev => prev <= 0 ? options.length - 1 : prev - 1);
          }
          break;
        case 'Tab':
          setIsOpen(false);
          setFocusedIndex(-1);
          break;
      }
    };

    // Focus the selected option when opening
    React.useEffect(() => {
      if (isOpen && focusedIndex >= 0 && optionsRef.current[focusedIndex]) {
        optionsRef.current[focusedIndex]?.scrollIntoView({
          block: 'nearest',
          behavior: 'smooth'
        });
      }
    }, [focusedIndex, isOpen]);

    const handleOptionClick = (optionValue: string) => {
      onChange(optionValue);
      setIsOpen(false);
      setFocusedIndex(-1);
    };

    const toggleDropdown = () => {
      if (!disabled) {
        setIsOpen(!isOpen);
        if (!isOpen) {
          setFocusedIndex(0);
        } else {
          setFocusedIndex(-1);
        }
      }
    };

    return (
      <div className={cn("relative", className)}>
        {label && (
          <label 
            htmlFor={id} 
            className="text-sm font-medium text-muted-foreground mb-2 block"
          >
            {label}
          </label>
        )}
        
        <div ref={dropdownRef} className="relative">
          <button
            ref={ref}
            id={id}
            type="button"
            onClick={toggleDropdown}
            onKeyDown={handleKeyDown}
            disabled={disabled}
            className={cn(
              // Base styles
              "relative w-full min-h-[2.75rem] px-4 py-2.5 text-left",
              "bg-background border border-border rounded-lg",
              "text-sm text-foreground",
              "transition-all duration-200 ease-in-out",
              
              // Focus and hover styles
              "hover:border-ring hover:shadow-sm",
              "focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
              
              // Open state
              isOpen && "border-ring shadow-md ring-2 ring-ring ring-offset-2",
              
              // Disabled state
              disabled && "opacity-50 cursor-not-allowed bg-muted",
              
              // Error state
              error && "border-destructive focus:ring-destructive",
              
              className
            )}
            aria-haspopup="listbox"
            aria-expanded={isOpen}
            aria-labelledby={label ? `${id}-label` : undefined}
          >
            <span className="block truncate text-muted-foreground">
              {selectedOption ? selectedOption.label : (
                <span className="text-muted-foreground">{placeholder}</span>
              )}
            </span>
            
            <span className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
              <ChevronDown 
                className={cn(
                  "h-4 w-4 text-muted-foreground transition-transform duration-200",
                  isOpen && "rotate-180"
                )} 
              />
            </span>
          </button>

          {/* Dropdown menu */}
          {isOpen && (
            <div className={cn(
              "absolute z-50 w-full mt-1",
              "bg-white dark:bg-black border border-border rounded-lg shadow-lg",
              "py-1 max-h-60 overflow-auto",
              "animate-in fade-in-0 zoom-in-95 slide-in-from-top-2",
              "data-[state=open]:animate-in data-[state=closed]:animate-out",
              "data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95"
            )}>
              {options.map((option, index) => (
                <button
                  key={option.value}
                  ref={(el: HTMLButtonElement | null) => { optionsRef.current[index] = el }}
                  type="button"
                  onClick={() => handleOptionClick(option.value)}
                  className={cn(
                    "w-full px-4 py-2.5 text-left text-sm dark:text-white",
                    "transition-colors duration-150",
                    "hover:bg-black/20 dark:hover:bg-primary/20 hover:text-accent-foreground",
                    "focus:bg-black/20 dark:focus:bg-primary/20 focus:text-accent-foreground focus:outline-none",
                    
                    // Selected option
                    option.value === value && "bg-accent text-accent-foreground font-medium",
                    
                    // Focused option (keyboard navigation)
                    index === focusedIndex && "bg-accent text-accent-foreground",
                  )}
                  onMouseEnter={() => setFocusedIndex(index)}
                  role="option"
                  aria-selected={option.value === value}
                >
                  <div className="flex items-center justify-between">
                    <span className="truncate">{option.label}</span>
                    {option.value === value && (
                      <Check className="h-4 w-4 text-primary flex-shrink-0 ml-2" />
                    )}
                  </div>
                </button>
              ))}
            </div>
          )}
        </div>

        {error && (
          <p className="mt-1 text-sm text-destructive">
            {error}
          </p>
        )}
      </div>
    );
  }
);

CustomDropdown.displayName = 'CustomDropdown';

export { CustomDropdown };