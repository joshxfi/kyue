export type QueueData = {
  id: string;
  name: string;
  orgId: string;
  timestamp: any;
  queueNumber: number;
  status: "fresh" | "scanned" | "serving" | "stale";
};
