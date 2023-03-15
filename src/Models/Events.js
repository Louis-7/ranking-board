export class Events {

  constructor(data) {
    this.data = data;
  }

  getRecords() {
    const ranking = this.data.ranking
    let userPointsMap = {};

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

    let records = [];

    for (let receiver in userPointsMap) {
      records.push({
        receiver,
        points: userPointsMap[receiver]
      })
    }

    return records;
  }
}