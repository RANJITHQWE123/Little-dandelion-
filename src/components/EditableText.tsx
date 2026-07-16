import React, { useState, useEffect } from 'react';
import { Edit2, Check, X } from 'lucide-react';
import { useSiteConfig } from '../context/SiteConfigContext';

interface EditableTextProps {
  value: string;
  onSave: (newValue: string) => void;
  className?: string;
  multiline?: boolean;
  type?: 'text' | 'number';
}

export default function EditableText({
  value,
  onSave,
  className = '',
  multiline = false,
  type = 'text'
}: EditableTextProps) {
  const { isAdmin } = useSiteConfig();
  const [isEditing, setIsEditing] = useState(false);
  const [tempValue, setTempValue] = useState(value);

  // Sync state if external value changes
  useEffect(() => {
    setTempValue(value);
  }, [value]);

  if (!isAdmin) {
    return <span className={className}>{value}</span>;
  }

  const handleSave = () => {
    if (tempValue.trim() === '') return;
    onSave(tempValue);
    setIsEditing(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !multiline) {
      handleSave();
    } else if (e.key === 'Escape') {
      setTempValue(value);
      setIsEditing(false);
    }
  };

  if (isEditing) {
    return (
      <div className="inline-flex items-center gap-2 w-full max-w-full z-30">
        {multiline ? (
          <textarea
            value={tempValue}
            onChange={(e) => setTempValue(e.target.value)}
            onKeyDown={handleKeyDown}
            className="w-full p-2 bg-white text-brand-brown border border-brand-gold text-xs font-sans rounded-none focus:outline-none focus:ring-1 focus:ring-brand-brown"
            rows={3}
            autoFocus
          />
        ) : (
          <input
            type={type}
            value={tempValue}
            onChange={(e) => setTempValue(e.target.value)}
            onKeyDown={handleKeyDown}
            className="w-full px-2 py-1 bg-white text-brand-brown border border-brand-gold text-xs font-sans rounded-none focus:outline-none"
            autoFocus
          />
        )}
        <div className="flex flex-col gap-1 shrink-0">
          <button
            onClick={handleSave}
            className="p-1 bg-brand-brown text-brand-gold hover:bg-brand-brown/90 cursor-pointer"
            title="Save changes"
          >
            <Check className="h-3.5 w-3.5" />
          </button>
          <button
            onClick={() => {
              setTempValue(value);
              setIsEditing(false);
            }}
            className="p-1 bg-brand-cream border border-brand-gold/30 text-brand-brown/60 hover:text-brand-brown cursor-pointer"
            title="Cancel"
          >
            <X className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>
    );
  }

  return (
    <span
      onClick={() => setIsEditing(true)}
      className={`group relative cursor-pointer inline-block border border-dashed border-transparent hover:border-brand-gold/60 pr-6 hover:bg-brand-gold/5 transition-all ${className}`}
      title="Click to edit text"
    >
      {value}
      <span className="absolute right-1 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 text-brand-gold transition-opacity pointer-events-none">
        <Edit2 className="h-3 w-3" />
      </span>
    </span>
  );
}
