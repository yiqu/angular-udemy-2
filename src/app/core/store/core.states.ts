export interface CoreState {

}

export interface ExerciseState {
  selectedExerciseIdToStart?: string
}

export interface SelectedExerciseSummary {
  name: string;
  typeDescription: string;
  details?: {setCount?: number, duration?: number, time?: boolean};
}
