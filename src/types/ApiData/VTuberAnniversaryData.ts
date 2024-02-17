import { VTuberData } from "./VTuberData";

export interface VTuberAnniversaryData extends VTuberData {
  readonly debutDate: string;
  readonly anniversaryYearCount: number;
}

export interface VTuberAnniversaryDataResponse {
  readonly VTubers: ReadonlyArray<VTuberAnniversaryData>;
}
