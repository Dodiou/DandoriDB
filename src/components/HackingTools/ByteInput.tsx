import { ChangeEvent, ClipboardEvent, useCallback } from "react";

export interface ByteInputProps {
  value: string;
  onChange?: (newText: string) => void;
}

export const ByteInput = ({ value, onChange }: ByteInputProps) => {
  const handleChange = useCallback((evt: ChangeEvent<HTMLTextAreaElement>) => {
    onChange?.(evt.target.value);
  }, [onChange]);
  const handlePaste = useCallback((evt: ClipboardEvent) => {
    // Stop data actually being pasted into div
    evt.stopPropagation();
    evt.preventDefault();

    // Get pasted data via clipboard API
    const clipboardData = evt.clipboardData || (window as any).clipboardData;
    const pastedData = clipboardData.getData('Text');

    const trimmedText = pastedData.replaceAll(/\s+/g, ' ').trim();
    onChange?.(trimmedText);
  }, [onChange])

  return <textarea
    value={value}
    onPaste={handlePaste}
    onChange={handleChange}
  />;
};
