export type EventDB = {
  ranking: EventObject[];
}

export type EventObject = {
  /**
   * The time event been added
   * E.g. 2023-03-15T08:17:53.309Z
   */
  time: Date;
  /**
   * Sender of the event
   * E.g. Tom
   */
  sender: string;
  /**
   * Receiver of the event
   * E.g. Jack
   */
  receiver: string;
  /**
   * Points
   */
  points: number;
  /**
   * Comment for this event
   */
  comment: string;
  /**
   * Event type
   */
  type: EventType
}

export enum EventType {
  innovation,
  thanks,
  other = 1000,
}

export type RankingRecord = {
  /**
   * Receiver of the event
   * E.g. Jack
   */
  receiver: string,
  /**
   * Points
   */
  points: number,
}