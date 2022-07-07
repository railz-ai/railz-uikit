export function format(first: string, middle: string, last: string): string {
  return (first || '') + (middle ? ' ' + middle : '') + (last ? ' ' + last : '');
}

export const formatServiceName = (name: string): string => {
  return name.replace(/([A-Z])/g, ' $1').replace(/^./, str => {
    return str.toUpperCase();
  });
};
