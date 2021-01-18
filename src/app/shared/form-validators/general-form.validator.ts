import { FormControl } from '@angular/forms';
import * as moment from 'moment';

export function customRequiredValidator(control: FormControl): {[s: string]: boolean} | undefined {
  const val: any = control.value;
  if (val && (""+val).trim() !== "") {
    return undefined;
  }
  return {"fieldRequired": true};
}

export function custom4CountValidator(control: FormControl): {[s: string]: boolean} | undefined {
  const val: any = control.value;
  if (val && (""+val).trim() !== "") {
    const v = (val+"").trim();
    if (v.length > 3) {
      return undefined;
    }
  }
  return {"fieldTooShort": true};
}

export function customOnlyLettersValidator(control: FormControl): {[s: string]: boolean} | undefined {
  const letters: RegExp = /^[A-Za-z ]+$/;
  if (control.value && control.value.trim().match(letters)) {
    return undefined;
  }
  return {"lettersOnly": true};
}

export function numbersOnlyValidator(control: FormControl): {[s: string]: boolean} | undefined {
  const nums: RegExp = /^\d+$/;
  if (control.value && control.value.trim().match(nums)) {
    return undefined;
  }
  return {"numbersOnly": true};
}


export function customOnlyNumbersAndDecimalsValidator(control: FormControl): {[s: string]: boolean} | undefined {
  //const num: RegExp = /^[0-9]+([,.][0-9]+)?$/;
  const num: RegExp = /^[0-9]+([.][0-9]+)?$/;
  // convert to string first
  const val = control.value + "";
  if (control.value && val.match(num)) {
    return undefined;
  }
  return {"decimalAndNumbersOnly": true};
}

/**
 * Regex for allowing alphanumeric,-,_ and space
 * @param control
 */
export function alphaNumericValidator(control: FormControl): {[s: string]: boolean} | undefined {
  const alphaNumeric: RegExp = /^[a-z\d\-_\s]+$/i;
  // convert to string first
  const val = (control.value + "").trim();
  if (control.value && val.match(alphaNumeric)) {
    return undefined;
  }
  return {"alphanumericOnly": true};
}

/**
 * Check if the value (moment) is greater than date and less than a date
 * @param control
 */
export function validBirthdayInMoment(control: FormControl): {[s: string]: boolean} | undefined {
  // convert to string first
  if (!control.value) {
    return {"required": true};
  }
  const val: moment.Moment = control.value;
  const years18Before = moment().subtract(18, "years");
  if (val.valueOf() > years18Before.valueOf()) {
    return {"invalidBirthday": true};
  }
  return undefined;
}


/**
 * Value has to be true
 * @param control
 */
export function valueIsTrue(control: FormControl): {[s: string]: boolean} | undefined {
  const val = control.value;
  if (!!control.value) {
    return undefined;
  }
  return {"valueIsNotTrue": true};
}
