import { ExerciseStatus } from "src/app/core/store/core.states";

export interface AdminState {
  currentActionPage: string | null;
  newExerType?: NewExerUnitType;
  formValidState?: boolean;
  saveNewExerBtnClickTimeStamp?: number;
  loading: boolean;
  exersBeingAdded?: Exercise[];
  error?: boolean;
  errMsg?: string;
  allExers: Exercise[];
  exerBeingUpdated?: Exercise;
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

export interface Exercise {
  name: string;
  sets: number;
  countPerSet: number;
  setUnitTypeIsTime: boolean;
  id?: string;
  created?: number;
  lastUpdated?: number;
  progressStatus?: ExerciseStatus;
  progressLastUpdated?: number;
  inProgressId?: string;
  inCompletedId?: string;
}
