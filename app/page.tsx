'use client'

import { useEffect, useState } from "react";
import { Card, CardHeader, CardBody } from "@nextui-org/card";
import { Events } from "@/services/events";
import { Skeleton } from "@nextui-org/skeleton";

export default function Home() {

  const [stats, setStats] = useState({ totalEvents: 0, totalUsers: 0, totalPoints: 0 });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const eventService = new Events();

    eventService.loadEvents().then(() => {
      setIsLoading(false);
      setStats({ totalEvents: eventService.getTotalEvents(), totalUsers: eventService.getTotalUsers(), totalPoints: eventService.getTotalPoints() });
    });

    return () => {
      // Cleanup code here
    };
  }, []);

  return (
    <div className="grid grid-cols-1 gap-4">
      <div className="flex justify-center gap-x-6">

        <Card className="w-60">
          <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
            <p className="text-tiny uppercase font-bold">Total</p>
            <h4 className="font-bold text-large">Events</h4>
          </CardHeader>
          <CardBody className="overflow-visible py-2">
            <Skeleton isLoaded={!isLoading} className="flex rounded-lg" classNames={{ base: "dark:bg-transparent" }}>
              <h4 className="font-bold text-4xl">{stats.totalEvents}</h4>
            </Skeleton>
          </CardBody>
        </Card>
        <Card className="w-60">
          <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
            <p className="text-tiny uppercase font-bold">Total</p>
            <h4 className="font-bold text-large">Users</h4>
          </CardHeader>
          <CardBody className="overflow-visible py-2">
            <Skeleton isLoaded={!isLoading} className="flex rounded-lg" classNames={{ base: "dark:bg-transparent" }}>
              <h4 className="font-bold text-4xl">{stats.totalUsers}</h4>
            </Skeleton>
          </CardBody>
        </Card>
        <Card className="w-60">
          <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
            <p className="text-tiny uppercase font-bold">Total</p>
            <h4 className="font-bold text-large">Points</h4>
          </CardHeader>
          <CardBody className="overflow-visible py-2">
            <Skeleton isLoaded={!isLoading} className="flex rounded-lg" classNames={{ base: "dark:bg-transparent" }}>
              <h4 className="font-bold text-4xl">{stats.totalPoints}</h4>
            </Skeleton>
          </CardBody>
        </Card>
      </div>
    </div>
  )
}
