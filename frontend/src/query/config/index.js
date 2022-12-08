const twentyFourHoursInMs = 1000 * 60 * 60 * 24
export const oneTimeFetchConfig = {
  refetchOnWindowFocus: false,
  refetchOnmount: false,
  refetchOnReconnect: false,
  retry: false,
  staleTime: twentyFourHoursInMs,
}
