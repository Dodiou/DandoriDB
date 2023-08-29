import { useMemo } from "react";

export type ValidationErrorDict = {[key: string]: string};
export type ValidationError = {[key: string]: ValidationErrorDict}
export type ValidationResult = ValidationError | undefined;

const worst = (result0: ValidationResult, result1: ValidationResult): ValidationResult => {
  return result0 || result1;
}

// export type AsyncValidatorFn = <T>(value: T) => Promise<ValidationResult | undefined>;
export type ValidatorFn<T> = (value: T | undefined) => ValidationResult | undefined;

export interface ValidationHook<T> {
  value: T;
  validators: ValidatorFn<T>[];
}

export const useValidation = <T>({ value, validators = [] }: ValidationHook<T>) => {
  const syncState = useMemo(() => {
    let worstError: ValidationResult = undefined;
    for (const validator of validators) {
      worstError = worst(worstError, validator(value));
      if (worstError) {
        return worstError;
      }
    }
    return worstError;
  }, [value, ...validators]);

  return {
    isValid: !syncState,
    isPending: false,
    error: syncState
  };
};
