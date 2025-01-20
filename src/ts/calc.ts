
export function calc() {
  const time = (document.getElementById("timeInput") as HTMLInputElement)?.value;
  if (time.length && !Number.isNaN(time)) {
    const result = Math.floor(Number.parseFloat(time) * 60);
    const resultElement = document.getElementById("timeOutput") as HTMLInputElement;
    if (resultElement) {
      resultElement.value = `${Math.floor(
        result / 60
      )}:${String(result % 60).padStart(2, "0")}`;
    }
  }
  return false;
}
