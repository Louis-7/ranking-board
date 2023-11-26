'use client'
import { useEffect, useState } from "react";
import { title } from "@/components/primitives";
import { Skeleton } from "@nextui-org/skeleton";
import { RankingChart } from "./ranking-chart";
import { RankingRecord } from "@/types/event-data";
import { Events } from "@/services/events";


export default function RankingPage() {
	const [rankingRecords, setRankingRecords] = useState<RankingRecord[]>([]);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
    const eventService = new Events();

    eventService.loadEvents().then(() => {
      setIsLoading(false);
      setRankingRecords(eventService.getRankingRecords());
    });

    return () => {
      // Cleanup code here
    };
  }, []);
	
	return (
		<div className="md:container lg:mx-auto md:mx-auto sm:mx-auto">
			<div>
        <Skeleton isLoaded={!isLoading} className="rounded-lg">
          <RankingChart rankingRecords={rankingRecords} />
        </Skeleton>
      </div>
		</div>
	);
}
