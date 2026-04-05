export function addDates(dateStr: string, dates: number) {
  const date = new Date(dateStr);
  date.setDate(date.getDate() + dates);
  return date.toLocaleDateString('en-CA');
}