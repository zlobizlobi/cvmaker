export const stripHtml = (summary: string): string => {
  const temporalDivElement = document.createElement('div');
  temporalDivElement.innerHTML = summary;
  return temporalDivElement.textContent || temporalDivElement.innerText || '';
};
