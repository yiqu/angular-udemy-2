export interface AdminState {
  currentActionPage: string | null;
  formErrorState?: boolean;
}


export interface PanelButtonType {
  btnName: string;
  btnMenu?: boolean;
  btnMenuItems?: string[];
}
