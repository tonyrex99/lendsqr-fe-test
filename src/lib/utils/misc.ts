export function formatDateJoined(
  dateString: string | Date | undefined
): string {
  if (!dateString) return "Invalid Date";

  const date = new Date(dateString);
  const formatter = new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });

  return formatter.format(date);
}

// Simple hash function to create a seed from a string
function stringToHash(str: string): number {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = (hash << 5) - hash + char;
    hash |= 0; // Convert to 32-bit integer
  }
  return Math.abs(hash); // Ensure positive seed
}

// PRNG based on seed
function seededRandom(seed: number): number {
  const x: number = Math.sin(seed++) * 10000;
  return x - Math.floor(x);
}

// Generate a set of numbers
export function generateNumbersFromString(
  str: string,
  count: number = 8
): number[] {
  const seed = stringToHash(str);
  const numbers: number[] = [];
  for (let i = 0; i < count; i++) {
    numbers.push(seededRandom(seed + i));
  }
  return numbers;
}
