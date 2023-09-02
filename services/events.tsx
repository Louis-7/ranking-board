import axios from "axios";
import { dataSourceConfig } from "@/config/data-source";
import { EventDB, EventObject, RankingRecord } from "@/types/event-data";

type userPointsMap = {
  [key: EventObject["receiver"]]: EventObject["points"];
};

export class Events {
  dataUrl: string;
  data: EventDB;

  constructor() {
    this.dataUrl = dataSourceConfig.url;
    this.data = { ranking: [] };
  }

  /**
   * Load data from the data source provide by the dataUrl
   * This function should be called before user other functions in this class
   * @returns {Promise<void>}
   * @memberof Events
   */
  async loadEvents(): Promise<void> {
    return axios.get(this.dataUrl).then((response) => {
      this.data = response.data;
    });
  }

  /**
   * Return ranking records
   * @returns ranking records
   */
  getRankingRecords(): RankingRecord[] {
    if (!this.isLoaded()) {
      return [];
    }

    const ranking = this.data.ranking;
    let userPointsMap: userPointsMap = {};

    for (let event of ranking) {
      let receiver = event.receiver;
      let points = event.points;

      if (userPointsMap[receiver] != null) {
        let currentPoints = userPointsMap[receiver];

        userPointsMap[receiver] = currentPoints + points;
      } else {
        userPointsMap[receiver] = points;
      }
    }

    let records: RankingRecord[] = [];

    for (let receiver in userPointsMap) {
      records.push({
        receiver,
        points: userPointsMap[receiver],
      });
    }

    return records;
  }

  /**
   * Check whether data is loaded
   * @returns data load status
   */
  private isLoaded(): boolean {
    return this.data != null;
  }

  getTotalEvents(): number {
    if (!this.isLoaded()) {
      return 0;
    }

    return this.data.ranking.length;
  }

  getTotalUsers(): number {
    if (!this.isLoaded()) {
      return 0;
    }

    const ranking = this.data.ranking;
    let userCountMap: { [key: string]: number } = {}

    for (let event of ranking) {
      if (userCountMap[event.receiver] != null) {
        userCountMap[event.receiver]++;
      } else {
        userCountMap[event.receiver] = 1;
      }

      if (userCountMap[event.sender] != null) {
        userCountMap[event.sender]++;
      } else {
        userCountMap[event.sender] = 1;
      }
    }

    return Object.keys(userCountMap).length;

  }

  getTotalPoints(): number {
    if (!this.isLoaded()) {
      return 0;
    }

    const ranking = this.data.ranking;

    return ranking.reduce((accumulator, currentEvent) => {
      return accumulator + currentEvent.points
    }, 0);
  }
}
