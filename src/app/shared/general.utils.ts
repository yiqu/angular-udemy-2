import { FormControl } from '@angular/forms';

export function createFormControl(value: any, disabled: boolean, validators: any[] = [], asyncValids: any[] = []): FormControl {
  let fc = new FormControl({
    value: value ? value : null,
    disabled: disabled
  }, validators, asyncValids);
  return fc;
}

export function createFormControl2(value: any, disabled: boolean, validators: any[] = [], asyncValids: any[] = []): FormControl {
  let fc = new FormControl({
    value: value,
    disabled: disabled
  }, validators, asyncValids);
  return fc;
}


export function scrollToElementById(id: string) {
  let top = document.getElementById(id);
  if (top) {
    setTimeout(() => {
      top?.scrollIntoView({block: "end"});
      top = null;
    }, 10)
  }
}
