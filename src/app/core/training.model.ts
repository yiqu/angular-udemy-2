export interface ITab {
  id: string;
  name: string;
}

export class Tab implements ITab {
  constructor(public id: string, public name: string) {
  }
}
