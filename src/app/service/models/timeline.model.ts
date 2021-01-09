import { TimeLineData } from './timeline-data.model';
export interface TimeLine {
    UpdateDate: string;
    Source: string;
    DevBy: string;
    SeverBy: string;
    Data: TimeLineData[];
}