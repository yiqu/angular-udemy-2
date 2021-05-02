import { Exercise } from "src/app/admin/store/admin.state";

export interface CoreState {

}

export interface ExerciseState {
  selectedExerciseIdToStart?: string;
  exerciseInProgress?: Exercise;
  exerciseInProgressSaveCompleted?: boolean;
}

export interface SelectedExerciseSummary {
  name: string;
  typeDescription: string;
  details?: {setCount?: number, duration?: number, time?: boolean};
  exercise?: Exercise;
}


export type ExerciseStatus = "Started" | "Completed";
