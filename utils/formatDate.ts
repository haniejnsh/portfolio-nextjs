export function formatToEnglishDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toISOString().split("T")[0]; 
}

export function formatToPersianDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString("fa-IR"); 
}