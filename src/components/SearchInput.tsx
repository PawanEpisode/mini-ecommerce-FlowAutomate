'use client';

import { Search, X } from 'lucide-react';
import { Input, Button } from './ui';

interface SearchInputProps {
  id: string;
  value: string;
  onChange: (value: string) => void;
  onClear: () => void;
  placeholder?: string;
  label?: string;
  disabled?: boolean;
  className?: string;
  showLabel?: boolean;
}

export function SearchInput({
  id,
  value,
  onChange,
  onClear,
  placeholder = 'Search...',
  label = 'Search',
  disabled = false,
  className = '',
  showLabel = true,
}: SearchInputProps) {
  return (
    <div className={`flex flex-col gap-2 ${className}`}>
      {showLabel && (
        <label
          htmlFor={id}
          className="text-muted-foreground text-sm font-medium"
        >
          {label}
        </label>
      )}
      <div className="relative">
        <Search className="text-muted-foreground absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2" />
        <Input
          id={id}
          type="text"
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="text-muted-foreground placeholder:text-muted-foreground h-11 pr-10 pl-9"
          disabled={disabled}
        />
        {value && (
          <Button
            variant="ghost"
            size="icon"
            onClick={onClear}
            className="absolute top-1/2 right-2 h-6 w-6 -translate-y-1/2"
            disabled={disabled}
          >
            <X className="text-muted-foreground h-4 w-4" />
          </Button>
        )}
      </div>
    </div>
  );
}
