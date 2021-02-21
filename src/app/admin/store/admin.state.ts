export interface AdminState {
  currentActionPage: string | null;
  newExerType?: NewExerUnitType;
  formErrorState?: boolean;
  saveNewExerBtnClickTimeStamp?: number;
}


export interface PanelButtonType {
  btnName: string;
  btnMenu?: boolean;
  btnMenuItems?: AdminNewExerSubMenu[];
}

export type AdminNewExerSubMenu = "Time Based" | "Rep Based";

export interface NewExerUnitType {
  name: AdminNewExerSubMenu | undefined
}
