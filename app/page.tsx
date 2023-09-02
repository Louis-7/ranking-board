'use client'

import { useEffect, useState } from "react";
import { Card, CardHeader, CardBody } from "@nextui-org/card";
import { RankingChart } from "./home/ranking-chart";
import { Events } from "@/services/events";
import { EventObject, RankingRecord } from "@/types/event-data";

export default function Home() {
  const [rankingRecords, setRankingRecords] = useState<RankingRecord[]>([]);

  useEffect(() => {
    const eventService = new Events();
    eventService.loadEvents().then(() => {
      setRankingRecords(eventService.getRankingRecords());
    });
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
            <h4 className="font-bold text-4xl">32</h4>
          </CardBody>
        </Card>
        <Card className="w-60">
          <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
            <p className="text-tiny uppercase font-bold">Total</p>
            <h4 className="font-bold text-large">User</h4>
          </CardHeader>
          <CardBody className="overflow-visible py-2">
            <h4 className="font-bold text-4xl">32</h4>
          </CardBody>
        </Card>
        <Card className="w-60">
          <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
            <p className="text-tiny uppercase font-bold">Total</p>
            <h4 className="font-bold text-large">Points</h4>
          </CardHeader>
          <CardBody className="overflow-visible py-2">
            <h4 className="font-bold text-4xl">32</h4>
          </CardBody>
        </Card>
      </div>
      <div className="md:container">
        {rankingRecords.length > 0 ?  <RankingChart rankingRecords={rankingRecords}></RankingChart> : <div>loading...</div>}
      </div>
    </>
  );
}
