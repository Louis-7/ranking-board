'use client'

import { useEffect, useState } from "react";
import { Card, CardHeader, CardBody } from "@nextui-org/card";
import { RankingChart } from "./home/ranking-chart";
import { Events } from "@/services/events";
import { RankingRecord } from "@/types/event-data";

export default function Home() {
  const [rankingRecords, setRankingRecords] = useState<RankingRecord[]>([]);
  const [stats, setStats] = useState({ totalEvents: 0, totalUsers: 0, totalPoints: 0 });

  useEffect(() => {
    const eventService = new Events();

    eventService.loadEvents().then(() => {
      setRankingRecords(eventService.getRankingRecords());
      setStats({ totalEvents: eventService.getTotalEvents(), totalUsers: eventService.getTotalUsers(), totalPoints: eventService.getTotalPoints() });
    });

    return () => {
      // Cleanup code here
    };
  }, []);

  return (
    <>
      <div className="flex justify-center gap-x-6">
        <Card className="w-60">
          <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
            <p className="text-tiny uppercase font-bold">Total</p>
            <h4 className="font-bold text-large">Events</h4>
          </CardHeader>
          <CardBody className="overflow-visible py-2">
            <h4 className="font-bold text-4xl">{stats.totalEvents}</h4>
          </CardBody>
        </Card>
        <Card className="w-60">
          <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
            <p className="text-tiny uppercase font-bold">Total</p>
            <h4 className="font-bold text-large">User</h4>
          </CardHeader>
          <CardBody className="overflow-visible py-2">
            <h4 className="font-bold text-4xl">{stats.totalUsers}</h4>
          </CardBody>
        </Card>
        <Card className="w-60">
          <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
            <p className="text-tiny uppercase font-bold">Total</p>
            <h4 className="font-bold text-large">Points</h4>
          </CardHeader>
          <CardBody className="overflow-visible py-2">
            <h4 className="font-bold text-4xl">{stats.totalPoints}</h4>
          </CardBody>
        </Card>
      </div>
      <div className="md:container">
        {rankingRecords.length > 0 ? <RankingChart rankingRecords={rankingRecords} /> : <div>loading...</div>}
      </div>
    </>
  );
}
