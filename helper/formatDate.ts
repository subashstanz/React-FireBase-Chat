import { formatRelative } from "date-fns";

export const formatDate = (time: { seconds: number; nanoseconds: number }) => {
  const fireBaseTime = new Date(
    time.seconds * 1000 + time.nanoseconds / 1000000
  );
  const atTime = fireBaseTime.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });
  return atTime;
};
