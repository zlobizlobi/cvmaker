export const stripHtml = (summary: string): string => {
  let temporalDivElement = document.createElement('div');
  temporalDivElement.innerHTML = summary;
  return temporalDivElement.textContent || temporalDivElement.innerText || '';
};
